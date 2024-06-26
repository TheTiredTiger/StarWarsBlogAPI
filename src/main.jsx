import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {APIContext} from "../src/components/Context"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <APIContext>
        <App />
    </APIContext>
  </React.StrictMode>,
)