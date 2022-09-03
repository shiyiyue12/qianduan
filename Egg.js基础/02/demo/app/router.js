'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // router.get('/fruits',controller.fruits.index);
  // router.get('/fruits/:id',controller.fruits.getId);
  // router.get('/creatfruit',controller.fruits.createPage);
  // router.post('/creatfruit',controller.fruits.createFruit);
  router.resources('fruits','/fruits',controller.fruits);
};
