import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logoSagraSfondo from '../assets/logoSagraSfondo.png'

export default function Navbar() {


  return (
    <nav className="bg-gray-900 sticky w-full z-20 top-0 start-0 border-b  border-gray-600">
      <div className="max-w-screen-xl flex items-center mx-auto p-4 relative">
        {/* Logo a sinistra */}
        <img
          src={logoSagraSfondo}
          className="h-20 rounded-full"
          alt="LogoSagra"
        />
        
        {/* Titolo centrato */}
        <span className="text-2xl font-semibold text-white font-abril absolute left-1/2 transform -translate-x-1/2 text-center">
          Menù Sagra di Ligugnana
        </span>

        {/* Menu */}
        <div
          className="items-center justify-between w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
        </div>
      </div>
    </nav>
  );
}