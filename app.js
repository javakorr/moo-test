var angular = require('angular'),
    ngApp = angular.module('moo', []);

ngApp.controller('MainCtrl', ['$scope', require('./js/angular-app/controllers/main')]);

ngApp.factory('posts', [require('./js/angular-app/services/posts')]);

ngApp.directive('postList', ['posts', require('./js/angular-app/directives/post-list/postList')]);

ngApp.directive('postForm', ['posts', require('./js/angular-app/directives/post-form/postForm')]);

module.exports = ngApp;
