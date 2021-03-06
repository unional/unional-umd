/*
 * Copyright(c) 2014, Unional (https://github.com/unional)
 * @license Licensed under the MIT License (https://github.com/unional/umd/LICENSE)).
 * Created by unional on 9/25/14.
 */
umd(function(define) {
        define(function(require) {
            var func = require("func");
            var func2 = require('sm/umdv/defineFunction');
            var object3 = require('./exportsObject');
            return function() {
                return func() + " " + func2() + " " + object3.value;
            }
        });
    }, "sampleModules.umd.mappedModule", {
        requireJS: {
            "sm": "sampleModules",
            "func": "sampleModules/umd/defineFunction"
        },
        browserGlobal: {
            "sm": "sampleModules",
            ".": "sampleModules/umd",
            "func": "sampleModules/umd/defineFunction"
        }
    },
    require, exports, module);
