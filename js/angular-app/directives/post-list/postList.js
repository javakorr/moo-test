module.exports = function(posts) {
    return {
        restrict: 'C',
        templateUrl: './js/angular-app/partials/post-list/postList.html',
        link: function(scope) {
            posts.getPosts().then(function(receivedPosts) {
                scope.posts = receivedPosts;
            });
        }
    };
};
