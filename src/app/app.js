import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import uibootstrap from 'angular-ui-bootstrap';

import routing from './app.config';
import home from '../features/home';
import about from '../features/about';

import 'bootstrap/dist/css/bootstrap.css';
//import '../style/app.css';
import HomeController from '../features/home/home.controller';

// let app = () => {
//   return {
//     template: require('./app.html'),
//     controller: 'AppCtrl',
//     controllerAs: 'app'
//   }
// };

// class AppCtrl {
//   constructor() {
//     this.url = 'https://github.com/preboot/angular-webpack';
//   }
// }

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter,
    uibootstrap,
    home,
    about
  ])
  //.directive('app', app)
  //.controller('AppCtrl', AppCtrl)
  .config(routing)
  .controller('HomeController', HomeController)
  .name;

export default MODULE_NAME;
