import { useRef, useState } from "react"

const Calculator = () => {

  const[inputVal, setInputVal] = useState("");
  const[allowDot, setAllowDot] = useState(true);

  const regexEq = /^[0-9+\-x÷*/%.^]*$/;
  
  function handleInput(e) {

    const val = e.target.value;
    const lastChar = val.at(-1);
    const prevChar = inputVal.at(-1);

    // allow empty input
    if (val === "") {

      setInputVal("");
      return;
    }

    if (!/^[0-9+\-*/%.]*$/.test(val)) return;

    const operators = ["+", "-", "*", "/", "%"];

    if ((operators.includes(prevChar) || prevChar === ".") && (operators.includes(lastChar) || lastChar === ".")){

      return;
    }
    
    if (lastChar === ".") {

      const parts = val.split(/[+\-*/%]/);
      const currentNumber = parts.at(-1);

      if (currentNumber.split(".").length > 2) 
        return;
    }

    setInputVal(val);
  }

  function handleButtons(val){
    
    const lastValOfString = inputVal[inputVal.length - 1];
    if ((["%", "x", "÷", "+", "-", "."].includes(lastValOfString)) && (["%", "x", "÷", "+", "-", "."].includes(val)))
      return;
    
    if (val === "."){

      if (!allowDot)
        return;

      setAllowDot(false);
    }

    if (["%", "x", "÷", "+", "-"].includes(val))
      setAllowDot(true);  

    const newValue = inputVal + val;

    if (regexEq.test(newValue))
      setInputVal(newValue);

  }

  return (

    <div className="w-[400px] h-[630px] border-4 border-black rounded-xl m-auto mt-6 p-3">
      
      <input 
        placeholder="0"
        type="text"
        value={inputVal} 
        onChange={handleInput}
        className="border-2 border-black rounded-md w-full h-[130px] text-right text-4xl pr-3 pt-14 font-bold text-black"
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
            onClick={() => handleButtons("x")} 
            className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500"
          >x</button>
        
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