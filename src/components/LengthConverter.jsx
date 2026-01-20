import React, { useState } from 'react'

const LengthConverter = () => {

  const[inputValue, setInputValue] = useState("");
  const[resultantValue, setResultantValue] = useState("");
  const[fromUnit, setFromUnit] = useState("km");
  const[toUnit, setToUnit] = useState("m");
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

    if (num >= 1e15 || num < 1e-15) {

      return num.toExponential(15); 
    }

    return Number(num.toFixed(15)).toString();
  }

  function handleConvert(){

    if (!inputValue){

      setResultantValue("");
      return;
    }

    const factor = {km : 1000, m : 1, dm : 0.1, cm : 0.01, mm : 0.001, µm : 0.000001, nm : 0.000000001, pm : 0.000000000001};

    const valueInMeters = Number(inputValue) * factor[fromUnit];
    const toRequiredUnit = valueInMeters / factor[toUnit];

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

        <h1>Length Converter</h1>

        <div className='w-[800px] h-[450px] m-auto mt-10 flex flex-col border-2 border-black rounded-xl p-10 gap-10'>

          <div className='flex place-content-between'>

            {/* First Select */}
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)} 
              className='w-[250px] px-3 py-2 border-2 border-black rounded-lg'
            >
              <option value={"km"}>Kilometer (KM)</option>
              <option value={"m"}>Meter (M)</option>
              <option value={"dm"}>Decimeter (DM)</option>
              <option value={"cm"}>Centimeter (CM)</option>
              <option value={"mm"}>Millimeter (MM)</option>
              <option value={"µm"}>Micrometer (µM)</option>
              <option value={"nm"}>Nanometer (NM)</option>
              <option value={"pm"}>Picometer (PC)</option>
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
              <option value={"km"}>Kilometer (KM)</option>
              <option value={"m"}>Meter (M)</option>
              <option value={"dm"}>Decimeter (DM)</option>
              <option value={"cm"}>Centimeter (CM)</option>
              <option value={"mm"}>Millimeter (MM)</option>
              <option value={"µm"}>Micrometer (µM)</option>
              <option value={"nm"}>Nanometer (NM)</option>
              <option value={"pm"}>Picometer (PC)</option>
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

export default LengthConverter