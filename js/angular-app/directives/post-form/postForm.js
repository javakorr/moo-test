var moment = require('moment'),
    _ = require('lodash');

var ENTER_KEY_CODE = 13;

module.exports = function(posts) {
    return {
        restrict: 'C',
        templateUrl: '../js/angular-app/partials/post-form/postForm.html',
        link: function(scope) {
            scope.newPost = {
                text: ''
            };

            scope.submitPost = function(e) {
                if (e.type === 'keydown' && e.keyCode !== ENTER_KEY_CODE) {
                    return false;
                }

                var newPostText = scope.newPost.text.trim();

                if (!newPostText.length) {
                    scope.newPost.text = '';
                    return;
                }

                var newPostDate = moment().format('MMM Do YYYY, h:mm:ssa'),
                    newPost = { id: generateId(scope.posts), text: newPostText, date: newPostDate };

                posts.addNewPost(newPost).then(function() {
                    scope.newPost.text = '';
                }, function(error) {
                    // TODO: reflect on UI properly.
                    throw new Error(error);
                });
            };

            function generateId(items) {
                return items.length && _.max(items, 'id').id + 1;
            }
        }
    };
};
