import { NavLink } from 'react-router-dom'
import calcifyLogo from '../assets/LogoImg.png';

const NavBar = () => {
return (

    <div>
        <nav className='flex p-1 items-center place-content-between px-5'>

            <div className='flex items-center gap-2'>
                <img className='w-[50px]' src={calcifyLogo} alt='CalcifyLogo'/>
                <h1 className='text-[35px] font-semibold text-gray-700'>Calcify</h1>
            </div>

            <ul className='flex  text-[25px] items-center gap-3 tabular-nums'>
                <li className='font-medium hover:border-black hover:bg-gray-400 border-2 rounded-lg cursor-pointer p-1 border-transparent'>
                    <NavLink to={'/'}>Calculator</NavLink>
                </li>
                <li className='font-medium hover:border-black hover:bg-gray-400 border-2 rounded-lg cursor-pointer p-1 border-transparent'>
                    <NavLink to={'/conversions'}>Conversions</NavLink>
                </li>
            </ul>

        </nav>
            
        <div className=' flex border-2 border-black'></div>
        
    </div>
  )
}

export default NavBar