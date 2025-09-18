import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
// import MainPage from '../SIHCode/main_page/index1.jsx'
import Map from './MapComponent.jsx'

createRoot(document.getElementById('root')).render(
    <Map/>
)
