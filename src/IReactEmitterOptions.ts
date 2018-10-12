import { CradleModel, PropertyTypes } from '@gatewayapps/cradle'
import ModelReference from '@gatewayapps/cradle/dist/lib/ModelReference'
import PropertyType from '@gatewayapps/cradle/dist/lib/PropertyTypes/PropertyType'
import { ReactComponentTypes } from './ReactEmitter'

export interface IReactEmitterOptions {
  readonly overwriteExisting: boolean
  readonly additionalComponentTypes?: string[]
  readonly getOutputPathForComponentType: (modelName: string, componentType: ReactComponentTypes | string) => string
  readonly shouldRenderModelForComponentType?: (model: CradleModel, componentType: ReactComponentTypes | string) => boolean
  readonly shouldRenderPropertyForComponentType?: (
    model: CradleModel,
    propertyName: string,
    propertyType: PropertyType,
    componentType: ReactComponentTypes | string
  ) => boolean
  readonly shouldRenderReferenceForComponentType?: (
    model: CradleModel,
    referenceName: string,
    referenceType: ModelReference,
    componentType: ReactComponentTypes | string
  ) => boolean
  readonly renderModelForComponentType: (
    model: CradleModel,
    componentType: ReactComponentTypes | string,
    renderedChildren: Record<string, string | undefined>
  ) => string
  readonly renderPropertyForComponentType?: (
    model: CradleModel,
    propertyName: string,
    propertyType: PropertyType,
    componentType: ReactComponentTypes | string
  ) => string | undefined
  readonly renderReferenceForComponentType?: (
    model: CradleModel,
    referenceName: string,
    referenceType: ModelReference,
    componentType: ReactComponentTypes | string
  ) => string | undefined
  readonly onComplete: (filesEmitted: string[]) => void
}
