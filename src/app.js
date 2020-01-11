console.log('App.js is running!');

// JSX - Javascript XML

var data = {
    title: 'Indecision App',
    subtitle: 'Helping you decide on things since 2020'
};

var template = (
    <div>
        <h1>{data.title}</h1>
        <p>{data.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: 'Andrew',
    age: 30,
    location: 'Kansas City, KS'
};

var template2 = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);