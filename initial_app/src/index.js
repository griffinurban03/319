import React from 'react';
import ReactDOM from 'react-dom/client';

// init react
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// render something in HTML :
root.render(<h1>Hello World!</h1>);


function Greeting() {
    return <div>
        <h1>This is a header</h1>
        <h2>This is a subheader</h2>
    </div>
}

root.render(<div>
    <Greeting />
</div>);