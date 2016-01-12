var store = require('store'),
    initialPosts = store.get('posts') || [];

module.exports = function($q) {
    var posts = initialPosts;

    function getPosts() {
        var deferred = $q.defer();

        deferred.resolve(posts);

        return deferred.promise;
    }

    function addNewPost(post) {
        var deferred = $q.defer();

        posts.push(post);
        store.set('posts', posts);
        deferred.resolve();

        return deferred.promise;
    }

    return {
        getPosts: getPosts,
        addNewPost: addNewPost
    }
};
