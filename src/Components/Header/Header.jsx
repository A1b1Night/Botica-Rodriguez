import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'


const Header = () => {


  return (
    <div className='bg-[#5ABB98] h-20 w-full fixed'>

      <input type='checkbox' id='check' hidden />
      <label htmlFor="check" className='float-right text-white text-3xl leading-[80px] mr-10 lg:hidden'>
        <GiHamburgerMenu />
      </label>

      <label className='text-white leading-[80px] md:leading-[80px] pl-12 md:pl-24 md:text-4xl text-3xl'>BOTICA</label>

      <ul className='float-right mr-10 flex leading-[80px] space-x-4 text-white uppercase rounded fixed lg:relative h-[100vh] lg:h-0 w-[100%] lg:w-fit top-20 lg:top-0 left-[-100%] lg:left-0 transition-all duration-300 lg:transition-none text-center bg-[#5ABB98]'>
        <Link to="#">Inicio</Link>
        <nav className='text-[#262E72]'>|</nav>
        <Link to="#">¿Quienes Somos?</Link>
      </ul>
      
    </div>
  )
}

export default Header