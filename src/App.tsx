import { useState } from 'react'
import { Button } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import { PoweroffOutlined } from '@ant-design/icons'
import { Initialize, Message } from './components'
import { animation } from './types'
import style from './App.module.css'

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

  const getElementByType = () => {
    switch(step) {
      case 'button': return (
      <Button
        className={style.button}
        type="primary"
        icon={<PoweroffOutlined />}
        onClick={onClick}
      >
        Click me!
      </Button>);
      case 'animation': return <Initialize mode={modAnimation}/>;
      case 'message': return (
        <Message className={style.message}>
          <h3>Привет</h3>
          <p>чем могу помочь?</p>
        </Message>
      )
    }
  }

  return (
    <Content >
      {getElementByType()}
    </Content>
  )
}

export default App;
