import { CradleModel, PropertyTypes } from '@gatewayapps/cradle'

import { ReactComponentTypes } from './ReactEmitter'

export interface IReactEmitterOptions {
  readonly getOutputPath: (modelName: string, componentType: typeof PropertyTypes.PropertyType) => string
  readonly getImports: () => Array<{types: string, moduleName: string}>
  readonly renderPropertyForComponentType: ( modelName: string, propertyName: string, propertyType: typeof PropertyTypes.PropertyType , componentType: ReactComponentTypes) => string
  readonly renderModelForComponentType: (model: CradleModel, componentType: ReactComponentTypes, renderedProperties: string[]) => string
}
