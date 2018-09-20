import { CradleSchema, EmitterOptions, IConsole, ICradleEmitter, PropertyTypes } from '@gatewayapps/cradle';
import { IReactEmitterOptions } from './IReactEmitterOptions';
export declare enum ReactComponentTypes {
    Detail = 0,
    Edit = 1,
    List = 2
}
export default class ReactEmitter implements ICradleEmitter {
    console?: IConsole;
    options?: EmitterOptions<IReactEmitterOptions>;
    test(propType: typeof PropertyTypes.PropertyType): void;
    prepareEmitter(options: EmitterOptions<IReactEmitterOptions>, console: IConsole): void;
    emitSchema(schema: CradleSchema): void;
}
//# sourceMappingURL=ReactEmitter.d.ts.map