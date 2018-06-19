import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import './styles/index.scss';
import json from './resume.json';


ReactDOM.render(<App resume={json} />, document.getElementById('root'))