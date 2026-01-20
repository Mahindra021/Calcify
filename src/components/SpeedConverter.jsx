import React, {useState} from 'react'

const SpeedConverter = () => {

  const[inputValue, setInputValue] = useState("");
  const[resultantValue, setResultantValue] = useState("");
  const[fromUnit, setFromUnit] = useState("ms");
  const[toUnit, setToUnit] = useState("kms");
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

    if (num >= 1e18 || num < 1e-18) {

      return num.toExponential(18); 
    }

    return Number(num.toFixed(28)).toString();
  }

  function handleConvert(){

    if (!inputValue){

      setResultantValue("");
      return;
    }

    const factor = {c : 299792458, ma : 340.3, ms : 1, kmh : 0.277777777777777777, kms : 1000, kn : 0.514444444444444444, mph : 0.44704, fps : 0.3048, ips : 0.0254};

    const valueInMeterPerSeconds = Number(inputValue) * factor[fromUnit];
    const toRequiredUnit = valueInMeterPerSeconds / factor[toUnit];

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

        <h1>Speed Converter</h1>

        <div className='w-[1000px] h-[450px] m-auto mt-10 flex flex-col border-2 border-black rounded-xl p-10 gap-10'>

          <div className='flex place-content-between'>

            {/* First Select */}
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)} 
              className='w-[380px] px-3 py-2 border-2 border-black rounded-lg'
            >
              <option value={"c"}>LightSpeed (C)</option>
              <option value={"ma"}>Mach (Ma)</option>
              <option value={"ms"}>Meter Per Second (m/s)</option>
              <option value={"kmh"}>Kilometer Per Hour (Km/h)</option>
              <option value={"kms"}>Kilometer Per Second (Km/s)</option>
              <option value={"kn"}>Knot (Kn)</option>
              <option value={"mph"}>Mile Per Hour (Mph)</option>
              <option value={"fps"}>Foot Per Second (Fps)</option>
              <option value={"ips"}>Inch Per Second (Ips)</option>
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
              className='w-[380px] px-3 py-2 border-2 border-black rounded-lg'
            >
              <option value={"c"}>LightSpeed (C)</option>
              <option value={"ma"}>Mach (Ma)</option>
              <option value={"ms"}>Meter Per Second (m/s)</option>
              <option value={"kmh"}>Kilometer Per Hour (Km/h)</option>
              <option value={"kms"}>Kilometer Per Second (Km/s)</option>
              <option value={"kn"}>Knot (Kn)</option>
              <option value={"mph"}>Mile Per Hour (Mph)</option>
              <option value={"fps"}>Foot Per Second (Fps)</option>
              <option value={"ips"}>Inch Per Second (Ips)</option>
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

export default SpeedConverter
