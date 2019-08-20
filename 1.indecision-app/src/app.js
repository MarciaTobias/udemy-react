console.log('App.js is running');

// if statements
// ternary operations
// logical and operator

// Chalenge 3
// only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.lenght > 0 "Here are your options" "No options"

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

// Challenge 2
// create app object tittle/subtitle
// user title/subtitle in the template
// render template

// JSX - JavaScript XML
// wrap div
var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle  && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

// Challenge 1
// Create a templateTwo var JSX expression
// div
//  h1 -> your name
// p -> Age: 26
// p -> Location: 
// Render templateTwo instead of template

// User Object
var user = {
    name: 'Andrew',
    age: 27,
    location: 'New York'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } 
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        <h2>{user.name.toUpperCase()}</h2>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

// ReactDOM.render(template, appRoot);