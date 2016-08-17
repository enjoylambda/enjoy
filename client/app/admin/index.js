'use strict';

import routes from './admin.routes';
import AdminController from './admin.controller';

export default angular.module('enjoylambdaApp.admin', ['enjoylambdaApp.auth', 'ui.router'])
  .config(routes)
  .controller('AdminController', AdminController)
  .name;
