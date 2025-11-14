import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/tailwind.css'
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import App from './App.jsx'
import UserProvider from './contexts/useContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <UserProvider>
        <App />
      </UserProvider>
  </StrictMode>,
)