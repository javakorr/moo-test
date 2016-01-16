var AppDispatcher = require('../dispatcher/appDispatcher'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    _ = require('lodash'),
    store = require('store'),
    initialPosts = store.get('posts') || [];

var posts = initialPosts;

var PostStore = assign({}, EventEmitter.prototype, {
    emitChange: function() {
        this.emit('change');
    },
    addChangeListener: function(callback) {
        this.on('change', callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    },
    getAll: function() {
        return posts;
    }
});

AppDispatcher.register(function(action) {
    switch (action.actionType) {
        case 'CREATE_POST':
            var newPost = action.post;

            newPost.id = generateId(posts);
            posts.push(newPost);
            store.set('posts', posts);
            PostStore.emitChange();
            break;

        default:
    }
});

function generateId(items) {
    return items.length && _.max(items, 'id').id + 1;
}

module.exports = PostStore;
