/* @flow */
/* eslint import/no-default-export: off, import/no-nodejs-modules: off */

import { getWebpackConfig } from 'grumbler-scripts/config/webpack.config';

import globals from './globals';

const FILE_NAME = 'login-zoid-component';
const MODULE_NAME = 'zoidlogin';

export const WEBPACK_CONFIG_FRAME = getWebpackConfig({
    filename:   `${ FILE_NAME }.frame.js`,
    modulename: MODULE_NAME,
    minify:     false,
    vars:       {
        ...globals
    }
});

export const WEBPACK_CONFIG_FRAME_MIN = getWebpackConfig({
    filename:   `${ FILE_NAME }.frame.min.js`,
    modulename: MODULE_NAME,
    minify:     true,
    vars:       {
        ...globals,
        __MIN__: true
    }
});

export const WEBPACK_CONFIG_POPUP = getWebpackConfig({
    filename:   `${ FILE_NAME }.popup.js`,
    modulename: MODULE_NAME,
    minify:     false,
    vars:       {
        ...globals,
        __DEFAULT_CONTEXT__:  'popup',
        __POPUP_SUPPORT__:    true,
        __IE_POPUP_SUPPORT__: true
    }
});

export const WEBPACK_CONFIG_POPUP_MIN = getWebpackConfig({
    filename:   `${ FILE_NAME }.popup.min.js`,
    modulename: MODULE_NAME,
    minify:     true,
    vars:       {
        ...globals,
        __DEFAULT_CONTEXT__:  'popup',
        __POPUP_SUPPORT__:    true,
        __IE_POPUP_SUPPORT__: true,
        __MIN__:              true
    }
});

export const WEBPACK_CONFIG_TEST = getWebpackConfig({
    modulename: MODULE_NAME,
    test:       true,
    vars:       {
        ...globals
    }
});

export default [
    WEBPACK_CONFIG_FRAME,
    WEBPACK_CONFIG_FRAME_MIN,
    WEBPACK_CONFIG_POPUP,
    WEBPACK_CONFIG_POPUP_MIN
];
