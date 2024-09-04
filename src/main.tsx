import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Button } from '@B-UI/components'

const App = () => {
  return (
    <Button 
      color='green'
      size='medium'
      label='Botao Legal :)'
    />
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
