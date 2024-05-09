import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import appRouter from './App.jsx'
import { Provider } from 'react-redux'
import store from './components/store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={appRouter}  />
  </Provider>
);
