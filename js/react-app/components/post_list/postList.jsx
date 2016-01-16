var React = require('react'),
    Post = require('./post.jsx'),
    PostStore = require('../../stores/postStore');

module.exports = React.createClass({
    getInitialState: function() {
        return { posts: PostStore.getAll() };
    },
    componentDidMount: function() {
        PostStore.addChangeListener(this.onChange);
    },
    componentWillMount: function() {
        PostStore.removeChangeListener(this.onChange);
    },
    onChange: function() {
        this.setState(PostStore.getAll());
    },
    render: function() {
        if (!this.state.posts.length) {
            return (
                <div className="row text-center post">No posts yet. Submit your first post!</div>
            );
        }

        var posts = this.state.posts.map(function(postItem) {
            return (
                <Post post={postItem.post} key={postItem.post.id} />
            );
        });

        return (
            <div className="row">{posts}</div>
        );
    }
});
