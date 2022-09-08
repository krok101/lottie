import { ReactElement } from 'react'

interface propsManipulator {
  children: ReactElement[]
  elementName: string
}

interface propsBox {
  component?: ReactElement
  name: string
  children: ReactElement
}

const Manipulator = ({children, elementName}: propsManipulator) => (
  <>
    {children.map((element) => element.props.name === elementName ? element : null )}
  </>
)

const Box = (props: propsBox) => props.children

export { Manipulator, Box }
