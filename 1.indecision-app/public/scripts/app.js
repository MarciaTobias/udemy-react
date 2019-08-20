'use strict';

console.log('App.js is running');

// JSX - JavaScript XML
// wrap div
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Marcia Tobias'
    ),
    React.createElement(
        'p',
        null,
        'This is some info!'
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

// Create a templateTwo var JSX expression
// div
//  h1 -> your name
// p -> Age: 26
// p -> Location: 
// Render templateTwo instead of template


var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Marcia Tobias'
    ),
    React.createElement(
        'p',
        null,
        'Age: 36'
    ),
    React.createElement(
        'p',
        null,
        'Location: Ireland'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);

// ReactDOM.render(template, appRoot);
