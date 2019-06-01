import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import uibootstrap from 'angular-ui-bootstrap';

import routing from './about.routes';
import AboutController from './about.controller';

//import './home.css';

export default angular.module('app.about', [uirouter,
    uibootstrap
  ])
  .config(routing)
  .controller('AboutController', AboutController)
  .name;