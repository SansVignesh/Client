import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.renderClients = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
};

window.unmountClients = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('Clients-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}
