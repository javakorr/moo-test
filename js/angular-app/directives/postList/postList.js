module.exports = function(posts) {
    return {
        restrict: 'C',
        templateUrl: '../js/angular-app/partials/postList/postList.html',
        link: function(scope) {
            posts.getPosts().then(function(receivedPosts) {
                scope.posts = receivedPosts;
            });
        }
    };
};
