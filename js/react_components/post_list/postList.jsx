var React = require('react'),
    store = require('store'),
    initialPosts = store.get('posts') || [],
    _ = require('lodash'),
    Post = require('./post.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        return { posts: initialPosts };
    },
    handlePostEvent: function(e) {
        var newPost = e.detail,
            updatedPosts = this.state.posts;

        newPost.id = this.generateId(updatedPosts);
        updatedPosts.push(newPost);
        store.set('posts', updatedPosts);
        this.setState({ posts: updatedPosts });
    },
    generateId: function(items) {
        return items.length && _.max(items, 'id').id + 1;
    },
    render: function() {
        // TODO: find another way to communicate between independent components (try FLUX?)
        document.removeEventListener('submitPost', this.handlePostEvent);
        document.addEventListener('submitPost', this.handlePostEvent, false);

        if (!this.state.posts.length) {
            return (
                <div className="row text-center post">No posts yet. Submit your first post!</div>
            );
        }

        var posts = this.state.posts.map(function(post) {
            return (
                <Post post={post} key={post.id} />
            );
        });

        return (
            <div className="row">{posts}</div>
        );
    }
});
