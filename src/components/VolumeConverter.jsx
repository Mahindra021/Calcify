import React, {useState} from 'react'

const VolumeConverter = () => {

  const[inputValue, setInputValue] = useState("");
  const[resultantValue, setResultantValue] = useState("");
  const[fromUnit, setFromUnit] = useState("m3");
  const[toUnit, setToUnit] = useState("cm3");
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

    const factor = {m3 : 1000000, dm3 : 1000, cm3 : 1, mm3 : 0.001, hl : 100000, l : 1000, dl : 100, cl : 10, ml : 1, ft3 : 28316.846592, in3 : 16.387064, yd3 : 764554.857984, af3 : 1234000000};

    const valueInCubicCentiMeters = Number(inputValue) * factor[fromUnit];
    const toRequiredUnit = valueInCubicCentiMeters / factor[toUnit];

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

        <h1>Volume Converter</h1>

        <div className='w-[900px] h-[450px] m-auto mt-10 flex flex-col border-2 border-black rounded-xl p-10 gap-10'>

          <div className='flex place-content-between'>

            {/* First Select */}
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)} 
              className='w-[330px] px-3 py-2 border-2 border-black rounded-lg'
            >
              <option value={"m3"}>Cubic Meter (M³)</option>
              <option value={"dm3"}>Cubic Decimeter (Dm³)</option>
              <option value={"cm3"}>Cubic Centimeter (Cm³)</option>
              <option value={"mm3"}>Cubic Millimeter (Mm³)</option>
              <option value={"hl"}>Hectoliter (Hl)</option>
              <option value={"l"}>Liter (L)</option>
              <option value={"dl"}>Deciliter (Dl)</option>
              <option value={"cl"}>Centiliter (Cl)</option>
              <option value={"ml"}>Milliliter (Ml)</option>
              <option value={"ft3"}>Cubic Foot (Ft³)</option>
              <option value={"in3"}>Cubic Inch (In³)</option>
              <option value={"yd3"}>Cubic Yard (yd³)</option>
              <option value={"af3"}>Acre-Foot (Af³)</option>
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
              className='w-[330px] px-3 py-2 border-2 border-black rounded-lg'
            >
              <option value={"m3"}>Cubic Meter (M³)</option>
              <option value={"dm3"}>Cubic Decimeter (Dm³)</option>
              <option value={"cm3"}>Cubic Centimeter (Cm³)</option>
              <option value={"mm3"}>Cubic Millimeter (Mm³)</option>
              <option value={"hl"}>Hectoliter (Hl)</option>
              <option value={"l"}>Liter (L)</option>
              <option value={"dl"}>Deciliter (Dl)</option>
              <option value={"cl"}>Centiliter (Cl)</option>
              <option value={"ml"}>Milliliter (Ml)</option>
              <option value={"ft3"}>Cubic Foot (Ft³)</option>
              <option value={"in3"}>Cubic Inch (In³)</option>
              <option value={"yd3"}>Cubic Yard (yd³)</option>
              <option value={"af3"}>Acre-Foot (Af³)</option>
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

export default VolumeConverter