import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar';
import Calculator from './components/Calculator';
import Conversion from './components/Conversion';
import LengthConverter from './components/LengthConverter';
import MassConverter from './components/MassConverter';
import AreaConverter from './components/AreaConverter';
import TimeConverter from './components/TimeConverter';
import DataConverter from './components/DataConverter';
import DiscountConverter from './components/DiscountConverter';
import VolumeConverter from './components/VolumeConverter';
import SpeedConverter from './components/SpeedConverter';
import TemperatureConverter from './components/TemperatureConverter';
import BMIConverter from './components/BMIConverter';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element:
        <div>
          <NavBar />
          <Calculator />
        </div>
    }, 
    {
      path: '/conversions',
      element:
        <div>
          <NavBar />
          <Conversion />
        </div>
    },
    {
      path: '/conversions/length',
      element:
        <div>
          <NavBar />
          <LengthConverter/>
        </div>
    },
    {
      path: '/conversions/mass',
      element:
        <div>
          <NavBar />
          <MassConverter/>
        </div>
    },
    {
      path: '/conversions/area',
      element:
        <div>
          <NavBar />
          <AreaConverter/>
        </div>
    },
    {
      path: '/conversions/time',
      element:
        <div>
          <NavBar />
          <TimeConverter/>
        </div>
    },
    {
      path: '/conversions/data',
      element:
        <div>
          <NavBar />
          <DataConverter/>
        </div>
    },
    {
      path: '/conversions/discount',
      element:
        <div>
          <NavBar />
          <DiscountConverter/>
        </div>
    },
    {
      path: '/conversions/volume',
      element:
        <div>
          <NavBar />
          <VolumeConverter/>
        </div>
    },
    {
      path: '/conversions/speed',
      element:
        <div>
          <NavBar />
          <SpeedConverter/>
        </div>
    },
    {
      path: '/conversions/temperature',
      element:
        <div>
          <NavBar />
          <TemperatureConverter/>
        </div>
    },
    {
      path: '/conversions/bmi',
      element:
        <div>
          <NavBar />
          <BMIConverter/>
        </div>
    },
  ]
);

function App() {
  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  )
}

export default App