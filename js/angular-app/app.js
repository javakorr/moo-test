var angular = require('angular'),
    ngApp = angular.module('mooTest', []);

ngApp
    .controller('MooCtrl', ['$scope', require('./controllers/main')])
    .factory('posts', ['$q', require('./services/posts')])
    .directive('postList', ['posts', require('./directives/post-list/postList')])
    .directive('postForm', ['posts', require('./directives/post-form/postForm')]);

module.exports = ngApp;
