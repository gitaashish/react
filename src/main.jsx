import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MainContext } from './Context/MainContext.jsx'

const headerMenu = [
  {id:1 ,menuName: "Home", to:"/"},
  {id:2 ,menuName: "Apparel", to :"/apparel"},
  {id:3 ,menuName: "Shop", to :"/shop"},
  {id:5 ,menuName: "Logistics", to :"/logistics"},
  {id:6 ,menuName: "Coffee & Tea", to :"/coffee-tea"},
  {id:7 ,menuName: "Contact", to :"/contact"},
  
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainContext.Provider value={{headerMenu}}>
    <App />
    </MainContext.Provider>
  </React.StrictMode>,
)
