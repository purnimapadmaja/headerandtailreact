import React,{useState} from 'react';
import './CounterApp1.css'

const CounterAppp = () => {
    const [value,setA]=useState(0)
    
    function increament(){
        setA(value+1)
    }
    function decrement() {
        setA(value-1)
    }
    return (
        
     <div className='b-container'>
            <h1 className="head"> Counter
                <br />
                {value}
            </h1>
            <button className='buttonincrease' onClick={ increament}>Increase</button>
         
            <button className='buttondecrease' onClick={ decrement} id="decrea">Decrement</button>
      </div>
    )
}
export default CounterAppp