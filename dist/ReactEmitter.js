"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactComponentTypes;
(function (ReactComponentTypes) {
    ReactComponentTypes[ReactComponentTypes["Detail"] = 0] = "Detail";
    ReactComponentTypes[ReactComponentTypes["Edit"] = 1] = "Edit";
    ReactComponentTypes[ReactComponentTypes["List"] = 2] = "List";
})(ReactComponentTypes = exports.ReactComponentTypes || (exports.ReactComponentTypes = {}));
class ReactEmitter {
    test(propType) {
        console.log(propType);
    }
    prepareEmitter(options, console) {
        this.console = console;
        this.options = options;
    }
    emitSchema(schema) {
        return;
    }
}
exports.default = ReactEmitter;
//# sourceMappingURL=ReactEmitter.js.map