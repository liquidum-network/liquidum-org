import React from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline';
import { Link, useLocation } from 'react-router-dom';
/** type imports */
// import type { AppDispatch } from 'src/app/store';
// import type { FirebaseAuthUser } from 'types';


const navigation: { name: string; to: string }[] = [
  { name: 'Home', to: '/' },
  // { name: 'FAQ', to: '/faq' },
  { name: 'About', to: '/about' },
  { name: 'White Paper', to: '/whitepaper' },
];


const TopBar: React.FC = () => {
  const location = useLocation();
  return (
    <Popover as="header" className="relative">
      {({ open }) => (
        <React.Fragment>
          <div className="bg-gray-900 pt-3 pb-3">
            <nav
              className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
              aria-label="Global"
            >
              <div className="flex items-center flex-1">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Link to="/">
                    <span className="sr-only">Workflow</span>
                    <img width="60.1" height="60.1"
                      className="h-8 w-auto sm:h-10"
                      src="logo.svg"
                      alt="Liquidum logo"
                    />
                  </Link>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="hidden space-x-8 md:flex md:ml-10">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className={`text-base p-2 rounded font-medium text-white hover:text-gray-300 ${location.pathname === item.to ? 'bg-cyan-600' : ''}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              {/* <div className="hidden md:flex md:items-center md:space-x-6">
                    <a href="#" className="text-base font-medium text-white hover:text-gray-300">
                      Log in
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
                    >
                      Start free trial
                    </a>
                  </div> */}
            </nav>
          </div>

          <Transition
            show={open}
            as={React.Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="logo.svg"
                      alt="Small Liquidum logo"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="pt-5 pb-6">
                  <div className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={`block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-cyan-50 ${location.pathname === item.to ? 'bg-cyan-600 text-gray-50' : ''} `}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  {/* <div className="mt-6 px-5">
                        <a
                          href="#"
                          className="block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700"
                        >
                          Start free trial
                        </a>
                      </div>
                      <div className="mt-6 px-5">
                        <p className="text-center text-base font-medium text-gray-500">
                          Existing customer?{' '}
                          <a href="#" className="text-gray-900 hover:underline">
                            Login
                          </a>
                        </p>
                      </div> */}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </React.Fragment>
      )}
    </Popover>
  );
};

export default TopBar;
