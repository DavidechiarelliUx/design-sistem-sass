import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className='Container'>
  <div className='Element'>center</div>
<ul>
          <li>prezzo 1</li>
          <li>prezzo 2</li>
        </ul>
        <ul>
        <li>prezzo 1</li>
        <li>prezzo 2</li>
      </ul>
</div>
<div className="wrapper">Sono un elemento in max width</div>
    </>
  )
}

export default App
