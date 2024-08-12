import Search from './Search'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Search name="Tom" />
  </StrictMode>
)
