import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Nav from "./Navpar.jsx"
import Fouter_part from './Footer.jsx'
import Employees from './Employees.jsx'
import Client from './Cliients.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Nav />
    <Employees/>
    <Client/>
    <Fouter_part />

  </StrictMode>,
)
