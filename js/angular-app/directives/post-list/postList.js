module.exports = function(posts) {
    return {
        restrict: 'C',
        templateUrl: './js/angular-app/partials/post-list/postList.html',
        link: function(scope) {
            scope.posts = posts.getPosts();
        }
    };
};
