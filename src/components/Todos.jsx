import React from 'react'
import Timer from './Timer'
import { useState } from 'react'

const Todos = () => {
    const [show, setshow] = useState(true)
  return (
    <div onClick={() =>setshow(!show)}>Timer
        {
            show ?
            <Timer Start={10} end={20}/>:"App"
        }
    </div>
    
  )
}

export default Todos