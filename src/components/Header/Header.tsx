import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

function Header() {
  return (
    <header>
      <Popover className="relative bg-white">
        {({ open }) => (
          <>
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                  <span className="sr-only">Surf</span>
                  {/* // added */}
                  <div className="h-8  sm:h-10  flex justify-center items-center">
                    <span className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                      {`<logo rod's surf>`}
                    </span>
                  </div>
                  {/* <img
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
                    alt=""
                  /> */}
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Shape
                </a>
                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  School
                </a>
                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Shop
                </a>
              </Popover.Group>
            </div>
            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div className="h-8 w-auto">
                        <span className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                          {`<logo rod's surf>`}
                        </span>
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="py-6 px-5">
                    <div className="grid grid-cols-2 gap-4">
                      <a
                        href="#"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Shape
                      </a>
                      <a
                        href="#"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        School
                      </a>
                      <a
                        href="#"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Shop
                      </a>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </header>
  );
}

export default Header;
