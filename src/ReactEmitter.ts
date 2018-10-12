import { CradleModel, CradleSchema, EmitterOptions, IConsole, ICradleEmitter } from '@gatewayapps/cradle'
import PropertyType from '@gatewayapps/cradle/dist/lib/PropertyTypes/PropertyType'
import colors from 'colors'
import { existsSync, writeFileSync } from 'fs'
import { ensureDirSync } from 'fs-extra'
import path from 'path'
import { IReactEmitterOptions } from './IReactEmitterOptions'

export enum ReactComponentTypes {
  Detail = 'Detail',
  Edit = 'Edit',
  List = 'List',
  Select = 'Select'
}

export default class ReactEmitter implements ICradleEmitter {
  public console?: IConsole
  public options!: EmitterOptions<IReactEmitterOptions>

  public async prepareEmitter(options: EmitterOptions<IReactEmitterOptions>, console: IConsole) {
    this.console = console
    this.options = options
  }

  public async emitSchema(schema: CradleSchema) {
    const models = schema.Models
    const emittedFiles: string[] = []
    models.forEach((m) => {
      const detailFile = this.emitModelForComponentType(m, ReactComponentTypes.Detail)
      const listFile = this.emitModelForComponentType(m, ReactComponentTypes.List)
      const editFile = this.emitModelForComponentType(m, ReactComponentTypes.Edit)
      const selectFile = this.emitModelForComponentType(m, ReactComponentTypes.Select)
      if (detailFile) {
        emittedFiles.push(detailFile.toString())
      }
      if (listFile) {
        emittedFiles.push(listFile.toString())
      }
      if (editFile) {
        emittedFiles.push(editFile.toString())
      }
      if (selectFile) {
        emittedFiles.push(selectFile.toString())
      }

      const otherFiles: string[] = []
      this.options.options.additionalComponentTypes!.forEach((ct) => {
        const rendered = this.emitModelForComponentType(m, ct)
      })
    })
    if (this.options.options.onComplete) {
      this.options.options.onComplete(emittedFiles)
    }
  }

  private emitModelForComponentType(model: CradleModel, componentType: ReactComponentTypes | string): string | boolean {
    if (this.options.options.shouldRenderModelForComponentType) {
      if (this.options.options.shouldRenderModelForComponentType!(model, componentType) === false) {
        this.console!.debug(colors.red(`Skipping ${model.Name}:${componentType}`))
        return false
      }
    }

    const fileName = this.options.options.getOutputPathForComponentType(model.Name, componentType)
    const absoluteFilename = path.resolve(fileName)
    if (existsSync(absoluteFilename) && !this.options.options.overwriteExisting) {
      this.console!.debug(colors.red(`Skipping ${absoluteFilename} as it already exists`))
      return false
    }
    this.console!.debug(`${colors.yellow('Emitting: ')}${colors.green(absoluteFilename)}`)

    const absoluteDir = path.dirname(absoluteFilename)
    ensureDirSync(absoluteDir)
    const renderedChildren: Record<string, string | undefined> = {}
    if (this.options.options.renderPropertyForComponentType) {
      const propertyNames = Object.keys(model.Properties)
      propertyNames.forEach((name) => {
        const property = model.Properties[name]
        if (
          this.options.options.shouldRenderPropertyForComponentType === undefined ||
          this.options.options.shouldRenderPropertyForComponentType!(model, name, property, componentType)
        ) {
          renderedChildren[name] = this.options.options.renderPropertyForComponentType!(model, name, property, componentType)
        }
      })
    }

    if (!!this.options.options.renderReferenceForComponentType) {
      const referenceNames = Object.keys(model.References)
      referenceNames.forEach((name) => {
        const reference = model.References.get(name)
        if (reference !== undefined) {
          if (
            this.options.options.shouldRenderReferenceForComponentType === undefined ||
            this.options.options.shouldRenderReferenceForComponentType!(model, name, reference, componentType)
          ) {
            renderedChildren[name] = this.options.options.renderReferenceForComponentType!(model, name, reference, componentType)
          }
        }
      })
    }

    const fileContents = this.options.options.renderModelForComponentType(model, componentType, renderedChildren)
    writeFileSync(absoluteFilename, fileContents, 'utf8')
    return absoluteFilename
  }
}
