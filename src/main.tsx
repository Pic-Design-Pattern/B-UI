import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Button, If, Dialog, InputText } from '@B-UI/components'

const App = () => {

  return (
    <>
      <If condition={true}> 
        <Dialog.Root>
          <Dialog.Header title='Titulo Legal :)'/>
          <Dialog.Body>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <InputText placeholder='Teste com o input text' />
            </div>
          </Dialog.Body>
        </Dialog.Root>
      </If>
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
