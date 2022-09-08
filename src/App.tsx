import { useState } from 'react'
import { Button } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import { PoweroffOutlined } from '@ant-design/icons'
import { Initialize, Message } from './components'
import { animation } from './types'
import style from './App.module.css'
import { Box, Manipulator } from './components/Manipulator/Manipulator'

type step = 'button' | 'animation' | 'message'

const App = () => {
  const [step, setStep] = useState<step>('button')
  const [modAnimation, setModAnimation] = useState<animation>('start')

  const onClick = () => {
    setStep('animation')
    setTimeout(() => {
      setModAnimation('finish')
      setTimeout(() => setStep('message'), 500)
    }, 2500)
  }

  return (
    <Content >
      <Manipulator elementName={step}>
        <Box name='button'>
          <Button
            className={style.button}
            type='primary'
            icon={<PoweroffOutlined />}
            onClick={onClick}
          >
            Click me!
          </Button>
        </Box>
        <Box name='animation'>
          <Initialize mode={modAnimation}/>
        </Box>
        <Box name='message'>
          <Message className={style.message}>
            <h3>Привет</h3>
            <p>чем могу помочь?</p>
          </Message>
        </Box>
      </Manipulator>
    </Content>
  )
}

export default App;
