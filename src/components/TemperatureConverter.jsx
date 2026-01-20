import React, {useState} from 'react'

const TemperatureConverter = () => {
  
  const[inputValue, setInputValue] = useState("");
  const[resultantValue, setResultantValue] = useState("");
  const[fromUnit, setFromUnit] = useState("c");
  const[toUnit, setToUnit] = useState("f");
  const regexEq = /^[0-9\.]*$/;

  function normalizeNumber(val) {

    if (/^0\./.test(val)) 
      return val;

    return val.replace(/^0+(?=\d)/, "");
  }

  function handleInputValue(e){

    const val = e.target.value;
    const lastChar = val.at(-1);

    if (val === "") {

      setInputValue("");
      return;
    }

    if (!regexEq.test(val))
      return;

    if (lastChar === "."){

      const parts = val.split(".");
      if (parts.length > 2)
        return;
    }

    const newVal = normalizeNumber(val);

    setInputValue(newVal);
  }
  
  function formatResult(num) {

    if (num === 0) 
      return "0";

    if (num >= 1e9 || num < 1e-9) {

      return num.toExponential(6); 
    }

    return Number(num.toFixed(6)).toString();
  }

  function handleConvert(){

    if (!inputValue){

      setResultantValue("");
      return;
    }

    const factor = {c : 33.8, f : 1, k : -457.87, r : -458.67, re : 34.25};

    const valueInFahrenheit = Number(inputValue) * factor[fromUnit];
    const toRequiredUnit = valueInFahrenheit / factor[toUnit];

    setResultantValue(formatResult(toRequiredUnit));
  }

  function handleSingleDelete(){

    let newString = normalizeNumber(inputValue.slice(0, -1));

    setInputValue(newString);
  }

  function handleWholeDelete(){

    setInputValue("");
    setResultantValue("");
  }

  return (

    <div>
      
      <div className='m-10 text-center text-[25px] font-semibold'>

        <h1>Temperature Converter</h1>

        <div className='w-[800px] h-[450px] m-auto mt-10 flex flex-col border-2 border-black rounded-xl p-10 gap-10'>

          <div className='flex place-content-between'>

            {/* First Select */}
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)} 
              className='w-[250px] px-3 py-2 border-2 border-black rounded-lg'
            >
              <option value={"c"}>Celsius (°C)</option>
              <option value={"f"}>Fahrenheit (°F)</option>
              <option value={"k"}>Kelvin (K)</option>
              <option value={"r"}>Rankine (°R)</option>
              <option value={"re"}>Reaumur (°Re)</option>
            </select>

            <p className='text-center mt-3'>From</p>

            {/* First Input  */}
            <input 
              type='text' 
              placeholder='Enter Value' 
              className='w-[300px] px-3 py-2 border-2 border-black rounded-lg text-right'
              value={inputValue}
              onChange={handleInputValue}
            /> 

          </div>

          <div className='flex place-content-between'>

            {/* Second Select  */}
            <select 
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className='w-[250px] px-3 py-2 border-2 border-black rounded-lg'
            >
              <option value={"c"}>Celsius (°C)</option>
              <option value={"f"}>Fahrenheit (°F)</option>
              <option value={"k"}>Kelvin (K)</option>
              <option value={"r"}>Rankine (°R)</option>
              <option value={"re"}>Reaumur (°Re)</option>
            </select>   

            <p className='text-center mt-3'>To</p>

            {/* Second Input  */}
            <input 
              value={resultantValue}
              type='text' 
              readOnly 
              className='w-[300px] px-3 py-2 border-2 border-black rounded-lg text-right cursor-default'  
            />    

          </div>

          <div className='flex place-content-around mt-16'>

            <button
              onClick={handleWholeDelete}
              className='border-2 border-black rounded-xl px-3 py-2 w-[130px] cursor-pointer hover:bg-slate-300'
              >
              AC
            </button>

            <button
              onClick={handleConvert}
              className='border-2 border-black rounded-xl px-3 py-2 w-[130px] cursor-pointer hover:bg-slate-300'
              >
              Convert
            </button>

            <button
              onClick={handleSingleDelete}
              className='border-2 border-black rounded-xl px-3 py-2 w-[130px] cursor-pointer hover:bg-slate-300'
              >
              C
            </button>

          </div>

        </div>
      
      </div>

    </div>
  )
}

export default TemperatureConverter