import React, { useState } from 'react'
import "./Calc.css";
export const Calculadora = () => {
    const [result, setResult]=useState("");
    const handleClick=(e)=>{
        setResult(result.concat(e.target.name));
    }
    const backspace=()=>{
        setResult(result.slice(0, -1))
    }
    const calculate=()=>{
        try{
            setResult(eval(result).toString());   
        } catch(err){
            setResult("Error")
        }
       
    }
    return (
        <div className="container">
            <form>
                <input type="text" value={result}/>  
            </form>
            < div className="keypad">
                
                <button onClick={backspace} id="backspace">AC</button>
                <button name="/"onClick={handleClick}>&divide;</button>
                <button name="*"onClick={handleClick}>&times;</button>
                <button name="-" onClick={handleClick}>&ndash;</button>
                <button name="7"onClick={handleClick}>7</button>
                <button name="8"onClick={handleClick}>8</button>
                <button name="9"onClick={handleClick}>9</button>
                <button className="color"name="+"onClick={handleClick}id="sum">+</button>
               
                <button name="4" onClick={handleClick}>4</button>
                <button name="5" onClick={handleClick}>5</button>
                <button name="6" onClick={handleClick}>6</button>
                
                <button name="1"onClick={handleClick}>1</button>
                <button name="2"onClick={handleClick}>2</button>
                <button name="3"onClick={handleClick}>3</button>
                
                
                <button className="color" name="0"onClick={handleClick}id="cero">0</button>
                <button name="."onClick={handleClick}>.</button>
                <button className="color"onClick={calculate}id="result">=</button>
                
            </div>
        </div>
    )
}