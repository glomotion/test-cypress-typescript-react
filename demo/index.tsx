import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app.component';
import '../src/styles/immutable.global.css';

ReactDOM.render(<App />, document.getElementById('app') as HTMLElement);
