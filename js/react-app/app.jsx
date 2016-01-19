const React = require('react'),
    ReactDOM = require('react-dom'),
    PostsList = require('./components/postList/postList.jsx'),
    PostForm = require('./components/postForm/postForm.jsx');

ReactDOM.render(
    <PostsList />,
    document.querySelector('.post-list')
);

ReactDOM.render(
    <PostForm />,
    document.querySelector('.post-form')
);
