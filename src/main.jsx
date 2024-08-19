// 1. Importamos las dependencias
import React from 'react'
//import ReactDOM, { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' 

/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)*/

// 2. Creamos un elemento de React
//No vamos a utilizar 'element' porque ya estamos renderizando componentes de 'App.jsx'
//const element = React.createElement('h1', { id: 'hola'}, 'Hola Info!');

// 3. Renderizamos la aplicación
//const container = document.querySelector('#root');
const container = document.getElementById('root');
if (!container) throw new Error();
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)