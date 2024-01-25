import React from 'react'
import UseStorage from './Custom Hooks/UseStorage'

const App = () => {
  const {setStorage} = UseStorage()
  return (
    <div>
      <input type="text" placeholder='Enter text' onChange={(e) => setStorage(e.target.value)}/>
    </div>
  )
}

export default App
