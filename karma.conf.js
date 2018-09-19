/* @flow */

import { getKarmaConfig } from 'grumbler-scripts/config/karma.conf';

import { WEBPACK_CONFIG_TEST } from './webpack.config';

export default function configKarma(karma : Object) {

    let karmaConfig = getKarmaConfig(karma, {
        basePath: __dirname,
        webpack:  WEBPACK_CONFIG_TEST
    });
    
    karmaConfig.preprocessors['src/index.js'] = [ 'webpack', 'sourcemap' ];
    karmaConfig.preprocessors['src/**/*.js'] = [ 'sourcemap' ];
    
    karma.set(karmaConfig);
}
