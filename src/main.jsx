import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {TransactionProvider} from './context/contractcontext'
import CreateNft from './routes/createNft'
import {BrowserRouter,
  Routes,
  Route, } from "react-router-dom";

ReactDOM.render(
  
  <TransactionProvider>
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}/>
    <Route path="createNft" element={<CreateNft />}/>

  </Routes>
  </BrowserRouter>
  
  </React.StrictMode>
  </TransactionProvider>

  

,

  document.getElementById('root')
)
