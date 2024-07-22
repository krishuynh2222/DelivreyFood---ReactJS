import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//BR stores the current location in the browser's address bar using clean URLS
         //and navigates using the browser's buit-in history stack
import {BrowserRouter} from "react-router-dom" 
import StoreContextProvider from './context/StoreContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContextProvider>
     <App />
  </StoreContextProvider>
  </BrowserRouter>,
)
