import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import gammyDid from '../../server/index.js'
import {Web5} from '@web5/api'

function App(gammyDid) {
  // const [count, setCount] = useState(0)
  ({web5, did: gammyDid} = web5.connect())

  return (
    
    <p>Gammylink{gammyDid}</p>
  )
}

export default App
