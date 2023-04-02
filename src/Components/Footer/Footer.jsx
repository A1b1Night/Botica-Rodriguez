const Footer = () => {
return (

<footer class="bg-[#37306B] rounded-lg shadow m-4 dark:bg-[#37306B] w-10/12 mx-auto">
  <div class="w-full mx-auto max-w-screen-xl p-5 md:flex md:items-center md:justify-between">
    <span class="text-xl text-white sm:text-center dark:text-white"> © 2023 <a href="https://flowbite.com/"
        class="hover:underline">Botica™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-mediu  m text-white dark:text-white sm:mt-0">
      <li>
        <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
      </li>
      <li>
        <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
      </li>
      <li>
        <a href="#" class="hover:underline">Contact</a>
      </li>
    </ul>
  </div>
</footer>
)
}
export default Footer