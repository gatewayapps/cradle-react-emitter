
import {CradleSchema, EmitterOptions, IConsole, ICradleEmitter} from '@gatewayapps/cradle'

export enum ReactComponentTypes {
  Detail,
  Edit,
  List
}

export default class ReactEmitter implements ICradleEmitter {

  public console: IConsole
  public options: EmitterOptions<>

  public prepareEmitter(options: EmitterOptions, console: IConsole) {
    this.console = console
    this.options = options
  }

  public emitSchema(schema: CradleSchema) {

  }
}
