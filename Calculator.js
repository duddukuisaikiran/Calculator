import {useState} from 'react';
import './Style.css';

export function Calculator(){
    const [input,setInput]=useState('');
    const [output,setOutput]=useState(0);
    
    const handleInput=(value)=>{
        setInput(input+value);
        console.log(value);
    }
    const handleOperation= (operator) => {
        setInput(`${input} ${operator} `);
    };
    const Calculation=()=>{
        try {
            const result = eval(input);
            setOutput(result);
            setOutput(result.toFixed(11));
            setInput('');
          } catch (error) {
            setOutput(0);
            setInput('');
          }
    }
    const clear=()=>{
        setInput("");
        setOutput(0);
    }
    const clearOne=()=>{
        if(input.length > 1){
            setInput(input.slice(0,-1));
        }else{
            setInput('');
        }
    }
    return(
        <div>
            <div id="div1">
               <h2>{input}</h2>
               <h2>{output}</h2>
            </div>
            <div className="grid-container">
                <div className="grid-item" id="item1" onClick={()=>handleInput(7)}>7</div>
                <div className="grid-item" id="item2" onClick={()=>handleInput(8)}>8</div>
                <div className="grid-item" id="item3" onClick={()=>handleInput(9)}>9</div>
                <div className="grid-item" id="item4" onClick={()=>clearOne()}>{'\u274C'}</div>
                <div className="grid-item" id="item5" onClick={()=>handleInput(4)}>4</div>
                <div className="grid-item" id="item6" onClick={()=>handleInput(5)}>5</div>
                <div className="grid-item" id="item7" onClick={()=>handleInput(6)}>6</div>
                <div className="grid-item" id="item8"  onClick={()=>handleOperation('/')}>{'\u00F7'}</div>
                <div className="grid-item" id="item9" onClick={()=>handleInput(1)}>1</div>
                <div className="grid-item" id="item10" onClick={()=>handleInput(2)}>2</div>
                <div className="grid-item" id="item11" onClick={()=>handleInput(3)}>3</div>
                <div className="grid-item" id="item12"  onClick={()=>handleOperation('*')}>x</div>
                <div className="grid-item" id="item13" onClick={()=>handleInput(0)}>0</div>
                <div className="grid-item" id="item14"  onClick={()=>handleInput('.')}>.</div>
                <div className="grid-item" id="item15"  onClick={()=>Calculation()}>=</div>
                <div className="grid-item" id="item16"  onClick={()=>handleOperation('-')}>-</div>
                <div className="grid-item" id="item17" onClick={()=>clear()}>C</div>
                <div className="grid-item" id="item18"></div>
                <div className="grid-item" id="item19"></div>
                <div className="grid-item" id="item20"  onClick={()=>handleOperation('+')}>+</div>
            </div>
        </div>
    )
}
export default Calculator;