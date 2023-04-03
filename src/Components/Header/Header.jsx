import { useState } from 'react';
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className='bg-[#5ABB98] h-20 w-full fixed top-0 left-0 right-0 z-10'>

      <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
        <div>
          <div className='flex items-center justify-between py-3 md:py-5 md:block'>
            {/*LOGO*/}
            <Link to="#">
              <h1 className='text-2xl text-white'>BOTICA</h1>
            </Link>
            {/*BOTON ABRIR CERRAR*/}
            <div className='md:hidden'>
              <button className="p-2 text-[#262E72] rounded-md outline-none focus:border-[#262E72] focus:border" onClick={() => setNavbar(!navbar)}>
              {navbar ? (
                    <AiOutlineClose className='w-[30px] h-[30px]' />
                  ) : (
                    <GiHamburgerMenu className='focus:border-none active:border-none w-[30px] h-[30px]' />
                  )}
              </button>
            </div>
          </div>
        </div>

        <div>
            <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'}`}>
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className=" text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#5B58D3]  border-[#5B58D3]  md:hover-[#5B58D3] md:hover:bg-transparent">
                  <Link to="#" onClick={() => setNavbar(!navbar)}>
                    Inicio
                  </Link>
                </li>
                <nav className='text-xl text-[#5B58D3] py-2 md:px-6 text-center border-b-2 md:border-b-0 '>|</nav>
                <li className="text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0  hover:bg-[#5B58D3]  border-[#5B58D3]  md:hover:text-[#5B58D3] md:hover:bg-transparent">
                  <Link to="#" onClick={() => setNavbar(!navbar)}>
                    ¿Quienes Somos?
                  </Link>
                </li>
              </ul>
            </div>
          </div>    
      </div>
    </header>
  )
}

export default Header