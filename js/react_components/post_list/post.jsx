var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="large-10 large-offset-1 end">
                {this.props.post.date} | {this.props.post.text}
            </div>
        );
    }
});
