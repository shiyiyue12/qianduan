'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);
  router.post('/jwtlogin',controller.jwt.doLogin);
  router.get('/jwtmessage',app.middleware.checktoken(),controller.jwt.getMessage);
};
