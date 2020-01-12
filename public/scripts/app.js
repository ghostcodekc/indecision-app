'use strict';

console.log('App.js is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'Helping you decide on things since 2020',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
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

var count = 0;
var addOne = function addOne() {
    console.log('addOne');
};

var minusOne = function minusOne() {
    console.log('minusOne');
};
var reset = function reset() {
    console.log('reset');
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'reset'
    )
);
console.log(templateTwo);
// const user = {
//     name: 'Andrew',
//     age: 30,
//     location: 'Kansas City, KS'
// };

// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>;
//     } else {
//         return undefined;
//     }
// }
// const template2 = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
//);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
