/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1661589225908_7462';

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    config.jwt = {
        secret: "xiaozhoubaogao"
    }

    config.cors = {
        origin: "*", //允许所以跨域请求，注释掉则允许上面 白名单 访问
        credentials: true,
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    };

    config.security = {
        csrf: {
            enable: false
        }
    }

    config.view = {
        defaultViewEngine: 'nunjucks'
    }

    return {
        ...config,
        ...userConfig,
    };
};
