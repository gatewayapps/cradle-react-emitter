
import {CradleSchema, EmitterOptions, IConsole, ICradleEmitter, PropertyTypes} from '@gatewayapps/cradle'
import { IReactEmitterOptions } from './IReactEmitterOptions'

export enum ReactComponentTypes {
  Detail,
  Edit,
  List
}

export default class ReactEmitter implements ICradleEmitter {

  public console?: IConsole
  public options?: EmitterOptions<IReactEmitterOptions>

  public prepareEmitter(options: EmitterOptions<IReactEmitterOptions>, console: IConsole) {
    this.console = console
    this.options = options
  }

  public emitSchema(schema: CradleSchema) {
    return
  }
}
