import { useState } from "react"

const Calculator = () => {

  const[inputVal, setInputVal] = useState("0");

  const regexEq = /^[0-9+\-*/%.]*$/;
  
  function normalizeLeadingZeros(expression) {

    const parts = expression.split(/([+\-*/%])/); 
    
    const lastIndex = parts.length - 1;
    let lastPart = parts[lastIndex];

    if (/^0\./.test(lastPart)) 
      return expression;

    lastPart = lastPart.replace(/^0+(?=\d)/, "");

    parts[lastIndex] = lastPart;

    return parts.join("");
  }

  function handleInput(e) {

    const val = e.target.value;
    const lastChar = val.at(-1);
    const prevChar = inputVal.at(-1);

    if (val === "") {

      setInputVal("");
      return;
    }

    if (!regexEq.test(val)) 
      return;

    const operators = ["+", "-", "*", "/", "%", "."];

    if ((operators.includes(prevChar)) && (operators.includes(lastChar)))
      return;

    if (lastChar === ".") {

      const parts = val.split(/[+\-*/%]/);
      const currentNumber = parts.at(-1);

      if (currentNumber.split(".").length > 2) 
        return;
    }

    const normalizedVal = normalizeLeadingZeros(val);
    setInputVal(normalizedVal);
  }

  function handleButtons(val){
    
    const lastChar = inputVal.at(-1);

    const operators = ["%", "*", "/", "-", "+", "."];

    if ((operators.includes(lastChar)) && (operators.includes(val)))
      return;
    
    if (val === "."){

      const parts = inputVal.split(/[+\-*/%]/);
      const currentNumber = parts.at(-1);

      if (currentNumber.includes("."))
        return;
    }

    setInputVal(prev => normalizeLeadingZeros(prev + val));
  }

  function handleCalculation(){

    let str = inputVal;
    let numbers = str.split(/[+\-*/%]/).map(Number);
    let operators = str.match(/[+\-*/%]/g);

    if (numbers.some(isNaN)){

      setInputVal("Error");
      return;
    }

    if (!operators){

      setInputVal(String((numbers[0]) || 0));
      return;
    }

    for (let i = 0; i < operators.length; i++){

      let result;

      if (operators[i] === "*"){

        result = numbers[i] * numbers[i + 1];
      }else if (operators[i] === "/"){

        if (numbers[i + 1] === 0) {

          setInputVal("Infinity");
          return;
        }

        result = numbers[i] / numbers[i + 1];
      }else if (operators[i] === "%"){

        result = numbers[i] % numbers[i + 1];
      }else {

        continue;
      }

      numbers.splice(i, 2, result);
      operators.splice(i, 1);
      i--;
    }

    let finalResult = numbers[0];

    for (let i = 0; i < operators.length; i++){

      if (operators[i] === "+")
        finalResult += numbers[i + 1];
      else if (operators[i] === "-")
        finalResult -= numbers[i + 1];
    }

    const roundedResult = Number(finalResult.toFixed(10));
    setInputVal(String(roundedResult));
  }

  function handlesSingleDelete(){

    let newString = inputVal.slice(0, -1);

    setInputVal(newString);
  }

  function handleEntierDelete(){

    setInputVal("0");
  }

  // Using JavaScript’s parser
  // function handleCalculation() {

  //   try {

  //     const result = Function("return " + inputVal)();
  //     setInputVal(String(result));
  //   } catch {

  //     setInputVal("Error");
  //   }
  // }


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
            onClick={handleEntierDelete}
            className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500"
          >AC</button>

          <button 
            onClick={handlesSingleDelete}
            className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500"
          >C</button>

          <button
            onClick={() => handleButtons("%")}  
            className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500"
          >%</button>
          
          <button 
            onClick={() => handleButtons("/")} 
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
            onClick={() => handleButtons("*")} 
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
            onClick={handleCalculation}
            className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500"
          >=</button>
        </div>

      </div>

    </div>
  )
}

export default Calculator