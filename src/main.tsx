import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Button, Choose, If, Else } from '@B-UI/components'

const App = () => {
  return (
    <>
      <Choose>
        <If condition={false}>
          <Button color='green' size='medium' label='Botao Legal :)' />
        </If>
        <Else>
          <Button color='orange' size='medium' label='Botao Alerta :O' />
        </Else>
      </Choose>
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
