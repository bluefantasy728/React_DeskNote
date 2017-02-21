import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';

import Deskmark from './components/Deskmark/index.jsx';

const oContainer = document.createElement('div');
oContainer.id = 'wrap';
document.body.appendChild(oContainer);

ReactDOM.render(<Deskmark />,oContainer);
