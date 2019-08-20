'use strict';

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
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    React.createElement(
        'h2',
        null,
        user.name.toUpperCase()
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

// ReactDOM.render(template, appRoot);
