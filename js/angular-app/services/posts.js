var store = require('store'),
    initialPosts = store.get('posts') || [];

module.exports = function() {
    var posts = initialPosts;

    function getPosts() {
        return posts;
    }

    function addNewPost(post) {
        posts.push(post);
        store.set('posts', posts);
    }

    return {
        getPosts: getPosts,
        addNewPost: addNewPost
    }
};
