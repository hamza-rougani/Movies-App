import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import store from './Redux/app/Store.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import RoutesApp from './Routes.jsx'
import { ContextProvider } from './context/ContextProvider'
// import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
    <ContextProvider>
    <BrowserRouter>
    {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link> */}
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
    <RoutesApp/>
    </BrowserRouter>
    </ContextProvider>
    </Provider>
  </React.StrictMode>,
)
