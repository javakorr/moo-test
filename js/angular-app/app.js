var angular = require('angular'),
    ngApp = angular.module('mooTest', []);

ngApp
    .controller('MooCtrl', ['$scope', require('./controllers/main')])
    .factory('posts', ['$q', require('./services/posts')])
    .directive('postList', ['posts', require('./directives/postList/postList')])
    .directive('postForm', ['posts', require('./directives/postForm/postForm')]);

module.exports = ngApp;
