/* eslint import/no-commonjs: off, flowtype/require-valid-file-annotation: off, flowtype/require-return-type: off */

let zoidGlobals = require('zoid/globals');

module.exports = Object.assign({
    __DEFAULT_CONTEXT__: 'iframe',
    __POPUP_SUPPORT__:   true
}, zoidGlobals);
