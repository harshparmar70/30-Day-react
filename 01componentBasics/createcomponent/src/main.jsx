
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RootButton from './button.jsx'

createRoot(document.getElementById('root')).render(<App />)
createRoot(document.getElementsByName('root-button')[0]).render(<RootButton/>)



