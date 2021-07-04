import React from 'react';
const linkStyle = { color: 'fff', textDecoration: 'none', color: 'black' }
const AppHeader = ({ title }) => (
    <header className="App-header">
        <h1>
            <a href="https://ko.reactjs.org/" rel="noopener noreferrer" target="_blank" style={linkStyle}>
                Front -End Masters {title}
            </a>
        </h1>
    </header>
);

export default AppHeader;