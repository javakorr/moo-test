var moment = require('moment'),
    _ = require('lodash');

module.exports = function(posts) {
    return {
        restrict: 'C',
        templateUrl: './js/angular-app/partials/post-form/postForm.html',
        link: function(scope) {
            scope.newPost = {
                text: ''
            };

            scope.submitPost = function() {
                var newPostText = scope.newPost.text.trim();

                if (!newPostText.length) {
                    scope.newPost.text = null;
                    return;
                }

                var newPostDate = moment().format('MMM Do YYYY, h:mm:ssa'),
                    newPost = { id: generateId(scope.posts), text: newPostText, date: newPostDate };

                posts.addNewPost(newPost);
                scope.newPost.text = null;
            };

            function generateId(items) {
                return items.length && _.max(items, 'id').id + 1;
            }
        }
    };
};
