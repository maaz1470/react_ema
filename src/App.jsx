import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Header from './component/Header/Header'
import './component/Header/Header.css'
import Main from './component/Main/Main'
import Shop from './component/Shop/Shop'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
      <Shop />
    </>
  )
}

export default App
