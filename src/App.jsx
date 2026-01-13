import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar';
import Calculator from './components/Calculator';
import Conversion from './components/Conversion';

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