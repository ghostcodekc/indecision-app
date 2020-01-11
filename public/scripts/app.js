'use strict';

console.log('App.js is running!');

// JSX - Javascript XML

var data = {
    title: 'Indecision App',
    subtitle: 'Helping you decide on things since 2020'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        data.title
    ),
    React.createElement(
        'p',
        null,
        data.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var user = {
    name: 'Andrew',
    age: 30,
    location: 'Kansas City, KS'
};

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
