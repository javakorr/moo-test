var angular = require('angular'),
    ngApp = angular.module('moo', []);

ngApp
    .controller('MainCtrl', ['$scope', require('./js/angular-app/controllers/main')])
    .factory('posts', [require('./js/angular-app/services/posts')])
    .directive('postList', ['posts', require('./js/angular-app/directives/post-list/postList')])
    .directive('postForm', ['posts', require('./js/angular-app/directives/post-form/postForm')]);

module.exports = ngApp;
