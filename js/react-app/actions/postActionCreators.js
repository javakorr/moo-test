var AppDispatcher = require('../dispatcher/appDispatcher');

module.exports = {
    createPost: function(post) {
        var action = {
            actionType: 'CREATE_POST',
            post: post
        };

        AppDispatcher.dispatch(action);
    }
};
