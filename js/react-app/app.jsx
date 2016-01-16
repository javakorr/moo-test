var React = require('react'),
    ReactDOM = require('react-dom'),
    PostsList = require('./components/post_list/postList.jsx'),
    PostForm = require('./components/post_form/postForm.jsx');

ReactDOM.render(
    <PostsList />,
    document.querySelector('.post-list')
);

ReactDOM.render(
    <PostForm />,
    document.querySelector('.post-form')
);
