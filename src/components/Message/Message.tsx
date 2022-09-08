import React, { ReactElement } from 'react'
import style from './style.module.css'

interface props {
  children: ReactElement[];
  className?: string;
}

const Message = React.memo(({children, className}: props) => {
  return (
    <div className={style.container + ' ' + className}>{children}</div>
  )
})

export default Message