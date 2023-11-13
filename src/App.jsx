import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Header from './component/Header/Header'
import './component/Header/Header.css'
import Main from './component/Main/Main'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
