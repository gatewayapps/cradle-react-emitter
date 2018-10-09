import { CradleModel, PropertyTypes } from '@gatewayapps/cradle'
import PropertyType from '@gatewayapps/cradle/dist/lib/PropertyTypes/PropertyType'
import { ReactComponentTypes } from './ReactEmitter'

export interface IReactEmitterOptions {
  readonly getOutputPath: (modelName: string, componentType: ReactComponentTypes) => string
  readonly overwriteExisting: boolean
  readonly shouldRenderModelForComponentType?: (model: CradleModel, componentType: ReactComponentTypes) => boolean
  readonly renderModelForComponentType: (model: CradleModel, componentType: ReactComponentTypes, renderedProperties: string[]) => string
  readonly renderListProperty: (propertyName: string, propertyType: PropertyType, model: CradleModel) => string
  readonly renderEditProperty: (propertyName: string, propertyType: PropertyType, model: CradleModel) => string
  readonly renderDetailProperty: (propertyName: string, propertyType: PropertyType, model: CradleModel) => string
  readonly renderSelectProperty: (propertyName: string, propertyType: PropertyType, model: CradleModel) => string
  readonly onComplete: (filesEmitted: string[]) => void
}
