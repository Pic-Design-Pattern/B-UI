import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Button, If, Dialog, Choose, Else } from '@B-UI/components'
import { DialogButtonProps } from '../ui/types/button.props'

const App = () => {

  const onClose = () => {
    console.log("Closing element")
  }

  const buttons: Array<DialogButtonProps> = [
    {label: 'X', onClick: onClose},
    {label: '_'},
  ]


  return (
    <>
      <If condition={true}> 
        <Dialog.Root>
          <Dialog.Header title='Titulo Legal :)' buttons={buttons}/>
          <Dialog.Body>
            <Button color='green' size='medium' label='Botao Legal :)' />
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
