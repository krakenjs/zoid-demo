"use strict";

exports.__esModule = true;
exports.LoginZoidComponent = void 0;

var _src = require("zoid/src");

var _src2 = require("jsx-pragmatic/src");

/** @jsx node */
let LoginZoidComponent = (0, _src.create)({
  tag: 'login-component',
  dimensions: {
    width: '300px',
    height: '150px'
  },
  url: ({
    props
  }) => {
    return {
      demo: './login.htm',
      production: 'https://my-site.com/login',
      test: 'mock://www.my-site.com/base/test/windows/login/index.htm'
    }[props.env];
  },
  props: {
    env: {
      type: 'string',
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

  prerenderTemplate({
    doc
  }) {
    return (0, _src2.node)("html", null, (0, _src2.node)("head", null, (0, _src2.node)("style", null, `
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
                    `)), (0, _src2.node)("body", null, (0, _src2.node)("div", {
      class: "spinner"
    }, (0, _src2.node)("div", {
      id: "loader",
      class: "loader"
    })))).render((0, _src2.dom)({
      doc
    }));
  }

});
exports.LoginZoidComponent = LoginZoidComponent;