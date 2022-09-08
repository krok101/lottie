import React from 'react'
import Lottie from 'lottie-react'
import initialize from '../../assets/animations/INITIALIZE_1_HQ.json'
import { animation } from '../../types'
import style from './style.module.css'

interface props {
  mode: animation;
  className?: string;
}

const Initialize = React.memo(({mode, className}: props) => {
  return <Lottie
    className={`${style.container} ${className} ${mode === 'start' ? style.start : style.finish}`}
    animationData={initialize}
    loop={true}
  />
})

export default Initialize