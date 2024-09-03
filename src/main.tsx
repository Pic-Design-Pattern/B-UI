import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Button } from '@B-UI/components'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Button 
      color='green'
      size='medium'
      label='Botao Legal :)'
    />
  </StrictMode>,
)
