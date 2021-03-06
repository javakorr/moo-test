const React = require('react'),
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

        const posts = this.state.posts.map(function(post) {
            return (
                <Post post={post} key={post.id} />
            );
        });

        return (
            <div className="row">{posts}</div>
        );
    }
});
