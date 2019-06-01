import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import uibootstrap from 'angular-ui-bootstrap';

import routing from './home.routes';
import HomeController from './home.controller';
import randomNames from '../../services/randomNames.service';

import './home.css';

export default angular.module('app.home', [uirouter,
    uibootstrap,
    randomNames
  ])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;
