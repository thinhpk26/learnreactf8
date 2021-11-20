import React from 'react'

const Button = ({title, href, onClick}) => {
  let Component = 'button'
  const props = {}
  if(href) {
    Component = 'a'
    props.href = href
  }
  if(onClick) {
    props.onClick = onClick
  }

  return <Component {...props}>{title}</Component>
}

const App = () => {
  return(
    <Button
      title='Click me!'
      href='https://www.youtube.com/watch?v=dG3o9xX_BX8'
      onClick={() => console.log('hihi')}
    />
  )
}

export default App
