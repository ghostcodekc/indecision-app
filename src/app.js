console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'Helping you decide on things since 2020',
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

let count = 0;
const addOne = () => {
    console.log('addOne');
};

const minusOne = () => {
    console.log('minusOne')
};
const reset = () => {
    console.log('reset')
};
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div >
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

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);