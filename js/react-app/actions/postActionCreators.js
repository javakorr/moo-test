var AppDispatcher = require('../dispatcher/appDispatcher');

module.exports = {
    createPost: function(newPost) {
        var action = {
            actionType: 'CREATE_POST',
            post: newPost.post
        };

        AppDispatcher.dispatch(action);
    }
};
