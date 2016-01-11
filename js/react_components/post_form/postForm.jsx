var React = require('react'),
    moment = require('moment');

module.exports = React.createClass({
    getInitialState: function() {
        return { text: '' };
    },
    handleInputChange: function(e) {
        this.setState({ text: e.target.value });
    },
    submitNewPost: function(e) {
        e.preventDefault();

        var newPostText = this.state.text.trim();

        if (!newPostText.length) {
            this.setState({ text: '' });
            return;
        }

        var newPostDate = moment().format('MMM Do YYYY, h:mm:ssa'),
            newPost = { text: newPostText, date: newPostDate },
            newPostEvent = new CustomEvent('submitPost', { detail: newPost, bubbles: false });

        // TODO: find another way to communicate between independent components (try FLUX?)
        document.dispatchEvent(newPostEvent);

        this.setState({ text: '' });
    },
    render: function() {
        return (
            <div className="row">
                <div className="large-9 large-offset-1 columns">
                    <input type="text" placeholder="Enter your message here..." value={this.state.text} onChange={this.handleInputChange} />
                </div>
                <div className="large-1 columns end">
                    <button className="button" onClick={this.submitNewPost}>Post</button>
                </div>
            </div>
        );
    }
});
