import React, {useState} from 'react'

const DiscountConverter = () => {

  const[originalPrice, setOriginalPrice] = useState("");
  const[discount, setDiscount] = useState("");
  const[discountedAmount, setDiscountedAmount] = useState("");
  const[finalPrice, setFinalPrice] = useState("");

  const regexEq = /^[0-9\.]*$/;

    function normalizeNumber(val) {

    if (/^0\./.test(val)) 
      return val;

    return val.replace(/^0+(?=\d)/, "");
  }

  function handleOriginalPrice(e){

    const val = e.target.value;
    const lastChar = val.at(-1);

    if (val === ""){

      setOriginalPrice("");
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

    setOriginalPrice(newVal);
  }

  function handleDiscount(e){

    const val = e.target.value;
    const lastChar = val.at(-1);

    if (val === ""){

      setDiscount("");
      return;
    }
    
    if (val === "0" || val === "0.") {
      
      setDiscount(val);
      return;
    }
    
    const checkVal = Number(val);

    if (val.includes(".")){

      const [, decimals] = val.split(".");
      if (decimals.length > 2) 
        return;

      if (decimals.length === 2) {

        if (checkVal < 0.01 || checkVal > 0.99)
          return;
      }
    }else {

      if (checkVal < 0 || checkVal > 99)
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

    setDiscount(newVal);
  }

  function calculateFinalPrice(){

    if (originalPrice === "" || discount === "")
      return;

    const disAmt = Number((originalPrice * discount) / 100);
    const finAmt = Number(originalPrice - disAmt);

    setDiscountedAmount(String(disAmt));;
    setFinalPrice(String(finAmt));
  }

  function handleWholeDelete(){

    setDiscount("");
    setOriginalPrice("");
    setDiscountedAmount("");
    setFinalPrice("");
  }

  return (

    <div>
      
      <div className='m-10 text-center text-[25px] font-semibold'>

        <h1 className='text-[30px] flex place-content-center'>
          Know The Discount -
          <span className='text-[17px] place-content-center'>
          (You Can Enter Discount between 0-99 Only)
          </span>
        </h1>

        <div className='w-[750px] h-[520px] m-auto mt-10 flex flex-col border-2 border-black rounded-xl p-10 gap-5'>

          <div className='flex place-content-between items-center'>

            {/* First Input  */}

            <label className='text-[35px]'>Original Price: </label>
            <input 
              type='text' 
              placeholder='Enter Price' 
              className='w-[330px] px-3 py-2 border-2 border-black rounded-lg text-right'
              value={originalPrice}
              onChange={handleOriginalPrice}
            /> 

          </div>

          <div className='flex place-content-between items-center'>

            {/* First Input  */}
            <label className='text-[35px]'>Discount: </label>
            <input 
              type='text' 
              placeholder='Enter Discount' 
              className='w-[330px] px-3 py-2 border-2 border-black rounded-lg text-right'
              value={discount}
              onChange={handleDiscount}
            /> 

          </div>

          <div className='flex place-content-between items-center'>

            {/* Second Input  */}
            <label className='text-[35px]'>Dicounted Amount: </label>
            <input 
              value={discountedAmount}
              type='text' 
              readOnly 
              className='w-[330px] px-3 py-2 border-2 border-black rounded-lg text-right cursor-default'  
            />    

          </div>

          <div className='flex place-content-between items-center'>

            {/* Second Input  */}
            <label className='text-[35px]'>Final Price: </label>
            <input 
              value={finalPrice}
              type='text' 
              readOnly 
              className='w-[330px] px-3 py-2 border-2 border-black rounded-lg text-right cursor-default'  
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
              onClick={calculateFinalPrice}
              className='border-2 border-black rounded-xl px-3 py-2 w-[200px] cursor-pointer hover:bg-slate-300'
              >
              Get Final Price
            </button>

          </div>

        </div>
      
      </div>

    </div>
  )
}

export default DiscountConverter