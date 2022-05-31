import React from 'react';
import { useState, useRef } from 'react';

const Stopwatch = (props) => {
    const [watch, setWatch] = useState(props.start);
    // const [id, setId] = useState(null);
    let  id=useRef(null);
    // it is like id={current :null} and it is like half of usestate it persist the value but not update the state means change the value from null to other values but not set it so bcoz of that the rendering time will be less than the usestate.
    const Start = ()=>{
        if(!id.current){
            
            let timer =setInterval(()=>{
                setWatch((prev)=>prev+1)
            },1000)
            // setId(timer)
            id.current = timer
        }
        
        // console.log(watch);
        // if(id.current==props.end){
        //     clearInterval(id.current)
        // }
    }
    const pause = ()=>{
        clearInterval(id.current)
        // setId(null)
        id.current = null
    }
    const Reset = ()=>{
        clearInterval(id.current)
        id.current = null
        setWatch(props.start)
    }
  return (
    <div>
        <h1>Stopwatch</h1>
        <h1>{watch}</h1>
    <div>

    <button onClick={Start} >Start</button>
    <button onClick={pause}>Pause</button>
    <button onClick={Reset}>Reset</button>
    </div>
    </div>
  )
}

export default Stopwatch