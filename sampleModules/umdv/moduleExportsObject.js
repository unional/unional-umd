/*
 * Copyright(c) 2014, Unional (https://github.com/unional)
 * @license Licensed under the MIT License (https://github.com/unional/umd/LICENSE)).
 * Created by unional on 9/24/14.
 */
(function (define) {
    define(function(require, exports, module) {
        module.exports = {
            value: "umdv.moduleExportsObject value"
        };
    });
}((function() {
    if (typeof define === "function" && define.amd) {
        // AMD.
        return define;
    }
    else if (typeof require === "function" &&
             typeof exports === 'object' &&
             typeof module === 'object') {
        // Node (not CommonJS because module.exports does not conform)
        return function(factory) {
            var result = factory(require, exports, module);
            if (typeof result !== 'undefined') {
                module.exports = result;
            }
        };
    }
    else {
        // Browser globals
        return umd.createDefine("sampleModules.umdv.moduleExportsObject");
    }
}())));