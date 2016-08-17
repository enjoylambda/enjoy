'use strict';

import {
  UtilService
} from './util.service';

export default angular.module('enjoylambdaApp.util', [])
  .factory('Util', UtilService)
  .name;
