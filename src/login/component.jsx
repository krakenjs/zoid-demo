/* @flow */
/** @jsx node */

import { create, type ZoidComponent } from 'zoid/src';
import { node, dom } from 'jsx-pragmatic/src';

export type LoginZoidComponentProps = {|
    env : string,
    prefilledEmail : string,
    onLogin : (email : string) => void
|};

export const LoginZoidComponent : ZoidComponent<LoginZoidComponentProps> = create({

    tag: 'login-component',

    dimensions: {
        width:  '300px',
        height: '150px'
    },

    url: ({ props }) => {
        return {
            demo:       './login.htm',
            production: 'https://my-site.com/login',
            test:       'mock://www.my-site.com/base/test/windows/login/index.htm'
        }[props.env];
    },

    props: {
        env: {
            type:    'string',
            default: () => 'production'
        },

        prefilledEmail: {
            type: 'string'
        },

        onLogin: {
            type: 'function'
        }
    },

    defaultContext: __DEFAULT_CONTEXT__,

    // eslint-disable-next-line flowtype/require-exact-type
    prerenderTemplate({ doc } : { doc : Document }) : HTMLElement {
        return (
            <html>
                <head>
                    <style>
                        {`
                        html, body {
                            width: 100%;
                            height: 100%;
                            overflow: hidden;
                            top: 0;
                            left: 0;
                            margin: 0;
                            text-align: center;
                        }

                        .spinner {
                            position: absolute;
                            max-height: 60vmin;
                            max-width: 60vmin;
                            height: 40px;
                            width: 40px;
                            top: 50%;
                            left: 50%;
                            transform: translateX(-50%) translateY(-50%);
                            z-index: 10;
                        }

                        .spinner .loader {
                            height: 100%;
                            width: 100%;
                            box-sizing: border-box;
                            border: 3px solid rgba(0, 0, 0, .2);
                            border-top-color: rgba(33, 128, 192, 0.8);
                            border-radius: 100%;
                            animation: rotation .7s infinite linear;

                        }

                        @keyframes rotation {
                            from {
                                transform: rotate(0deg)
                            }
                            to {
                                transform: rotate(359deg)
                            }
                        }
                    `}
                    </style>
                </head>
                <body>
                    <div class="spinner">
                        <div id="loader" class="loader" />
                    </div>
                </body>
            </html>
        ).render(dom({ doc }));
    }
});
