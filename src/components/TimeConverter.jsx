import React, {useState} from 'react'

const TimeConverter = () => {

    const[inputValue, setInputValue] = useState("");
    const[resultantValue, setResultantValue] = useState("");
    const[fromUnit, setFromUnit] = useState("min");
    const[toUnit, setToUnit] = useState("s");
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
  
      const factor = {yr : 31536000, wk : 604800, d : 86400, hr : 3600, min : 60, s : 1, ms : 0.001,  µs: 0.000001, ps: 0.000000000001};
  
      const valueInSeconds = Number(inputValue) * factor[fromUnit];
      const toRequiredUnit = valueInSeconds / factor[toUnit];
  
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
  
          <h1>Time Converter</h1>
  
          <div className='w-[800px] h-[450px] m-auto mt-10 flex flex-col border-2 border-black rounded-xl p-10 gap-10'>
  
            <div className='flex place-content-between'>
  
              {/* First Select */}
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)} 
                className='w-[250px] px-3 py-2 border-2 border-black rounded-lg'
              >
                <option value={"yr"}>Year (Yr)</option>
                <option value={"wk"}>Week (Wk)</option>
                <option value={"d"}>Day (D)</option>
                <option value={"hr"}>Hour (Hr)</option>
                <option value={"min"}>Minute (Min)</option>
                <option value={"s"}>Second (S)</option>
                <option value={"ms"}>Millisecond (Ms)</option>
                <option value={"µs"}>Microsecond (µs)</option>
                <option value={"ps"}>Picosecond (Ps)</option>
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
                <option value={"yr"}>Year (Yr)</option>
                <option value={"wk"}>Week (Wk)</option>
                <option value={"d"}>Day (D)</option>
                <option value={"hr"}>Hour (Hr)</option>
                <option value={"min"}>Minute (Min)</option>
                <option value={"s"}>Second (S)</option>
                <option value={"ms"}>Millisecond (Ms)</option>
                <option value={"µs"}>Microsecond (µs)</option>
                <option value={"ps"}>Picosecond (Ps)</option>
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

export default TimeConverter
