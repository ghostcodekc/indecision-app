console.log('App.js is running!');

// JSX - Javascript XML
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var template2 = (
    <div>
        <h1>Andrew Grube</h1>
        <p>Age: 30</p>
        <p>Location: Kansas City, KS</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);