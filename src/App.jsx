import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  BasicExample  from './Comp/Navbar'
import DarkVariantExample from './Comp/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BasicExample/>
   <DarkVariantExample/>
    </>
  )
}

export default App
