import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import App from './App.jsx';  // We import app.jsx (our main component, which will be the starting point) 
import './index.css';  // We import index.css (the file where we will centralize all the global styles) 

// We create the root to render the React application
ReactDOM.createRoot(document.getElementById('root')).render( //We use React.StrictMode to detect possible problems in the code during development.
  <React.StrictMode> 
  <App /> 
  </React.StrictMode> 
); 