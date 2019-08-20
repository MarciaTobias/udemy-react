console.log('App.js is running');

// JSX - JavaScript XML
// wrap div
var template = (
    <div>
        <h1>Marcia Tobias</h1>
        <p>This is some info!</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

// Create a templateTwo var JSX expression
// div
//  h1 -> your name
// p -> Age: 26
// p -> Location: 
// Render templateTwo instead of template


var templateTwo = (
    <div>
        <h1>Marcia Tobias</h1>
        <p>Age: 36</p>
        <p>Location: Ireland</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);

// ReactDOM.render(template, appRoot);