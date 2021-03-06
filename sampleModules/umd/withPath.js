/*
 * Copyright(c) 2014, Unional (https://github.com/unional)
 * @license Licensed under the MIT License (https://github.com/unional/umd/LICENSE)).
 * Created by unional on 9/27/14.
 */
umd(function(define) {
    define(function(require /*, exports, module */) {
        var defineObject = require('sm/umd/defineObject');
        var defineFunction = require('df');
        var exportsObject = require('sm/umd/exportsObject');
        var returnObject = require('sm/umdv/returnObject');

        return defineObject !== undefined &&
               defineFunction !== undefined &&
               exportsObject !== undefined &&
               returnObject !== undefined;
    });
}, "sampleModules.umd.withPath", require, exports, module);
