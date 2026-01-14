import { useState } from "react"

const Calculator = () => {

  const[inputVal, setInputVal] = useState("");

  const regexEq = /^[0-9+\-X÷*/%.^]*$/;
  
  function handleInput(e){

    const value = e.target.value;
    
    if (regexEq.test(value)){

      setInputVal(value);
    }
  }

  let isDot = false;
  function handleButtons(val){

    if (val === ".")
      isDot = !isDot; 

    
    if (val === "." && isDot === true)
      return;

    const lastValOfString = inputVal[inputVal.length - 1];
    
    if ((lastValOfString === "+" || lastValOfString === "-" || lastValOfString === "X" || lastValOfString === "%" || lastValOfString === "÷" || lastValOfString === ".") && (val === "+" || val === "-" || val === "X" || val === "%" || val === "÷" || val === ".")){
      
      return;
    }
    
    const newValue = inputVal + val;
    if (regexEq.test(newValue)){

      setInputVal(newValue);
    }
  }

  return (

    <div className="w-[400px] h-[630px] border-4 border-black rounded-xl m-auto mt-6 p-3">
      
      <input 
        type="text"
        value={inputVal} 
        onChange={handleInput}
        className="border-2 border-black rounded-md w-full h-[130px] text-right text-4xl pr-3 pt-14"
      />

      <div className="flex flex-col gap-5 mt-10 place-content-evenly">

        <div className="flex gap-5 place-content-between">

          <button 
            
            className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500"
          >AC</button>

          <button 

            className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500"
          >C</button>

          <button
            onClick={() => handleButtons("%")}  
            className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500"
          >%</button>
          
          <button 
            onClick={() => handleButtons("÷")} 
            className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500"
          >÷</button>

        </div>


        <div className="flex gap-5 place-content-between">

          <button
            onClick={() => handleButtons("7")} 
            className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500"
          >7</button>

          <button
            onClick={() => handleButtons("8")}  
            className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500"
          >8</button>

          <button 
            onClick={() => handleButtons("9")} 
            className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500"
          > 9</button>

          <button 
            onClick={() => handleButtons("X")} 
            className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500"
          >X</button>
        
        </div>


        <div className="flex gap-5 place-content-between">

          <button 
            onClick={() => handleButtons("4")} 
            className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500"
          >4</button>

          <button 
            onClick={() => handleButtons("5")}
            className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500"
          >5</button>

          <button
            onClick={() => handleButtons("6")} 
            className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500"
          >6</button>

          <button
            onClick={() => handleButtons("-")} 
            className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500"
          >-</button>

        </div>


        <div className="flex gap-5 place-content-between">

          <button 
            onClick={() => handleButtons("1")} 
            className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500"
          >1</button>
          
          <button 
            onClick={() => handleButtons("2")} 
            className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500"
          >2</button>

          <button 
            onClick={() => handleButtons("3")} 
            className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500"
          >3</button>

          <button 
            onClick={() => handleButtons("+")} 
            className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500"
          >+</button>

        </div>


        <div className="flex gap-5 place-content-between">

          <button 

            className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500"
          >F</button>

          <button 
            onClick={() => handleButtons("0")} 
            className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500"
          >0</button>

          <button 
            onClick={() => handleButtons(".")} 
            className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500"
          >.</button>

          <button 

            className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500"
          >=</button>
        </div>

      </div>

    </div>
  )
}

export default Calculator