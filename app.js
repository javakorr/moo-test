var angular = require('angular'),
    ngApp = angular.module('mooTest', []);

ngApp
    .controller('MooCtrl', ['$scope', require('./js/angular-app/controllers/main')])
    .factory('posts', ['$q', require('./js/angular-app/services/posts')])
    .directive('postList', ['posts', require('./js/angular-app/directives/post-list/postList')])
    .directive('postForm', ['posts', require('./js/angular-app/directives/post-form/postForm')]);

module.exports = ngApp;
