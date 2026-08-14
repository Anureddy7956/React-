import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from '../../basic-react-app/src/App.jsx'

createRoot(document.getElementById('root')).render(
 <StrictMode>
    <App />
</StrictMode>,
)
