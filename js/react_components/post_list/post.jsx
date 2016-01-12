var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="small-10 small-centered post columns">
                <span className="post-date">{this.props.post.date}</span>
                <p className="post-text">{this.props.post.text}</p>
            </div>
        );
    }
});
