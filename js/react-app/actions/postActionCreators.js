const AppDispatcher = require('../dispatcher/appDispatcher');

module.exports = {
    createPost: function(newPost) {
        const action = {
            actionType: 'CREATE_POST',
            post: newPost.post
        };

        AppDispatcher.dispatch(action);
    }
};
