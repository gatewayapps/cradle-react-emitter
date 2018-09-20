import { CradleModel, PropertyTypes } from '@gatewayapps/cradle'
import PropertyType from '@gatewayapps/cradle/dist/lib/PropertyTypes/PropertyType'
import { ReactComponentTypes } from './ReactEmitter'

export interface IReactEmitterOptions {
  readonly getOutputPath: (modelName: string, componentType: ReactComponentTypes) => string
  readonly renderPropertyForComponentType: ( modelName: string, propertyName: string, propertyType: PropertyType , componentType: ReactComponentTypes) => string
  readonly renderModelForComponentType: (model: CradleModel, componentType: ReactComponentTypes, renderedProperties: string[]) => string
}
