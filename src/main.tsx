import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Button from './components/Button/Button'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className='honeymoon' style={{padding: "10px"}}>
     <Button color='default' size='medium'>Meu casca de bala uryel</Button>
    </main>
  </StrictMode>,
)
