import React from 'react';

function Header() {
  return (
    <header className="p-4 mx-auto shadow-md bg-pink-600">
      <nav className="container mx-auto flex justify-between">
        <a href="/" className="md:text-xl text-white uppercase font-black">BLOG</a>

        <ul className="flex text-white">
          <li className="flex-auto cursor-pointer mx-2 sm:mx-4">
            <a href="/">Lien 1</a>
          </li>
          <li className="flex-auto cursor-pointer mx-2 sm:mx-4">
            <a href="/">Lien 2</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;