import { NavLink, Outlet } from "react-router-dom"
import { Ruler, Scale, Clock, Database, Square, Percent, Box, Thermometer, Gauge, User } from "lucide-react";

const Conversion = () => {

  return (

    <div>

      <h1 className="mt-10 m-auto text-center text-[25px] font-bold">Select Converter</h1>

      <div className="w-full flex">

        <ul className="w-[1100px] h-[500px] flex flex-row gap-5 m-auto mt-16 place-content-evenly flex-wrap border-4 border-black p-10 rounded-xl">

          <li>
            <NavLink to={'/conversions/length'} className="w-[250px] flex flex-col border-2 cursor-pointer border-black p-5 rounded-xl text-[30px] font-semibold items-center hover:bg-neutral-300">
              <Ruler/>
              Length
            </NavLink>
          </li>

          <li>
            <NavLink to={'/conversions/mass'} className="w-[250px] flex flex-col border-2 cursor-pointer border-black p-5 rounded-xl text-[30px] font-semibold items-center hover:bg-neutral-300">
              <Scale/>
              Mass
            </NavLink>
          </li>

          <li>
            <NavLink to={'/conversions/time'} className="w-[250px] flex flex-col border-2 cursor-pointer border-black p-5 rounded-xl text-[30px] font-semibold items-center hover:bg-neutral-300">
              <Clock/>
              Time
            </NavLink>
          </li>

          <li>
            <NavLink to={'/conversions/area'} className="w-[250px] flex flex-col border-2 cursor-pointer border-black p-5 rounded-xl text-[30px] font-semibold items-center hover:bg-neutral-300">
              <Square/>
              Area
            </NavLink>
          </li>

          <li>
            <NavLink to={'/conversions/data'} className="w-[250px] flex flex-col border-2 cursor-pointer border-black p-5 rounded-xl text-[30px] font-semibold items-center hover:bg-neutral-300">
              <Database/>
              Data
            </NavLink>
          </li>

           <li>
            <NavLink to={'/conversions/temperature'} className="w-[250px] flex flex-col border-2 cursor-pointer border-black p-5 rounded-xl text-[30px] font-semibold items-center hover:bg-neutral-300">
              <Thermometer/>
              Temperature
            </NavLink>
          </li>
          
          <li>
            <NavLink to={'/conversions/volume'} className="w-[250px] flex flex-col border-2 cursor-pointer border-black p-5 rounded-xl text-[30px] font-semibold items-center hover:bg-neutral-300">
              <Box/>
              Volume
            </NavLink>
          </li>
          
          <li>
            <NavLink to={'/conversions/speed'} className="w-[250px] flex flex-col border-2 cursor-pointer border-black p-5 rounded-xl text-[30px] font-semibold items-center hover:bg-neutral-300">
              <Gauge/>
              Speed
            </NavLink>
          </li>
          
          <li>
            <NavLink to={'/conversions/discount'} className="w-[250px] flex flex-col border-2 cursor-pointer border-black p-5 rounded-xl text-[30px] font-semibold items-center hover:bg-neutral-300">
              <Percent/>
              Discount
            </NavLink>
          </li>
        
        </ul>
      
      </div>

    </div>
  )
}

export default Conversion