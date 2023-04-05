
import { Link } from 'react-router-dom'

const Footer = () => {
return (

<footer class="bg-[#37306B] rounded-lg shadow m-4 dark:bg-[#37306B] w-10/12 mx-auto">
  <div class="w-full mx-auto max-w-screen-xl p-5 md:flex md:items-center md:justify-between">
    <span class="text-xl text-white sm:text-center dark:text-white"> © 2023 <a href="https://flowbite.com/"
        class="hover:underline">Botica™</a>. Todos los derechos reservados.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-mediu  m text-white dark:text-white sm:mt-0">
      <li>
        <Link to="#" class="mr-4 hover:underline md:mr-6 ">¿Quienes somos?</Link>
      </li>
      <li>
        <Link to="#" class="mr-4 hover:underline md:mr-6">Licenciamiento</Link>
      </li>
      <li>
        <Link to="#" class="hover:underline">Contactos</Link>
      </li>
    </ul>
  </div>
</footer>
)
}
export default Footer