const Calculator = () => {
  return (
    <div className="w-[400px] h-[630px] border-4 border-black rounded-xl m-auto mt-6 p-3">
      
      <input type="text" className="border-2 border-black rounded-md w-full h-[130px] text-right text-4xl pr-3 pt-14"/>

      <div className="flex flex-col gap-5 mt-10 place-content-evenly">

        <div className="flex gap-5 place-content-between">
          <button className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500">AC</button>
          <button className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500">C</button>
          <button className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500">%</button>
          <button className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500">/</button>
        </div>


        <div className="flex gap-5 place-content-between">
          <button className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500">7</button>
          <button className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500">8</button>
          <button className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500"> 9</button>
          <button className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500">X</button>
        </div>


        <div className="flex gap-5 place-content-between">
          <button className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500">4</button>
          <button className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500">5</button>
          <button className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500">6</button>
          <button className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500">-</button>
        </div>


        <div className="flex gap-5 place-content-between">
          <button className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500">1</button>
          <button className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500">2</button>
          <button className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500">3</button>
          <button className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500">+</button>
        </div>


        <div className="flex gap-5 place-content-between">
          <button className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500">F</button>
          <button className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500">0</button>
          <button className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500">.</button>
          <button className="text-[30px] w-[80px] px-4 py-3 rounded-2xl bg-gray-300 hover:bg-slate-500">=</button>
        </div>

      </div>

    </div>
  )
}

export default Calculator