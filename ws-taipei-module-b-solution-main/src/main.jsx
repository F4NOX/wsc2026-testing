import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./assets/bootstrap.min.css"
import {StoreProvider} from "./store.jsx";

createRoot(document.getElementById('root')).render(
    <StoreProvider>
        <App />
    </StoreProvider>
)
