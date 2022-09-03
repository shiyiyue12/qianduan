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
  config.keys = appInfo.name + '_1661497080744_9118';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  //设置默认的模板引擎
  config.view = {
    defaultViewEngine : "nunjucks"
  }

  config.cors = {
    origin:"*",
    allowMethods:"GET,HEAD,PUT,POST,DELETE"
  }

  config.security = {
    csrf: {
      enable:false
    }
  }

  return {
    ...config,
    ...userConfig,
  };
};
