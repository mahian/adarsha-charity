import Link from 'next/link';
import React from 'react';

const Nav = () => {
    return (
        <div className="">
            <nav className="border-gray-200 py-2">
                <div className="container mx-auto px-5 flex flex-wrap items-center justify-between">
                    <Link href="#" className="flex">
                        <span className="self-center text-lg font-semibold whitespace-nowrap">Adarsha team</span>
                    </Link>
                    <button data-collapse-toggle="mobile-menu" type="button" className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
                        <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <a href="#" className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded focus:outline-none" aria-current="page">Home</a>
                            </li>
                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto">Dropdown <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                                <div id="dropdownNavbar" className="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44">
                                    <ul className="py-1" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Earnings</a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Sign out</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Services</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;