import './index.css';
import '../src/medipass.css';
import '../node_modules/angular-material/angular-material.css';
import '../node_modules/angular-material-data-table/dist/md-data-table.css';
import angular from 'angular';
import ngMaterial from 'angular-material';
// import uirouter from 'angular-ui-router';
import uirouter from '@uirouter/angularjs';

import { default as mdTable } from '../src/md-dytable.module';
// import { Main } from './components/main/main.component';
// import { UserAdmin } from './components/user-admin/user-admin.component';

import routing from './app.config';

let app = angular.module('app', [
  uirouter,
  ngMaterial,
  MedipassBase
])
.component('main', Main)
.component('userAdmin', UserAdmin)
  .config(routing);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/dashboard");
}]);
