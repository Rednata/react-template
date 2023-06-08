import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';

import Module from './module';


// import { createRoot } from 'react-dom/cjs/react-dom.production.min';

const root = createRoot(document.getElementById('root'));
// root.render('Привет');

// root.render(<h1>Привет React</h1>)

root.render(<Module/>)
