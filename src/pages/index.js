import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { FEATURES, FOOTER_NAVIGATION } from '../data/customer-data';
import GradiantButton from '../components/GradiantButton';
import Contact from '../components/contact/Contact';

export default function Example() {
  return (
    <div className="bg-white">
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

      <main>
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1475706997440-9f2a24435b83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3689&q=80&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80" //&sat=-100"
                  alt="People working on laptops"
                />
                {/* // DON'T WORK */}
                {/* <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" /> */}
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Rod's surf</span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
                  Learn to surf, equip yourself or shape your own surfboard at Rod's surf carcans
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-500 bg-white hover:bg-blue-50 sm:px-8"
                    >
                      Book online
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                    >
                      Shape a board
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alternating Feature Sections */}
        <div className="relative pt-16 pb-32 overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
          />
          <div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Come live a new experience, share sensations and create new memories
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum
                      malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis.
                      In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare
                      pharetra.
                    </p>
                    <div className="mt-6">
                      <GradiantButton text="learn to surf" />
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <blockquote>
                    <div>
                      <p className="text-base text-gray-500">
                        &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci
                        risus aenean curabitur donec aliquet. Mi venenatis in euismod ut.&rdquo;
                      </p>
                    </div>
                    <footer className="mt-3">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <img
                            className="h-6 w-6 rounded-full"
                            src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                            alt=""
                          />
                        </div>
                        <div className="text-base font-medium text-gray-700">
                          Marcia Hill and her family
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://images.unsplash.com/photo-1495819427834-1954f20ebb97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3750&q=80"
                    alt="surfboards"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Shape your own board
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum
                      malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis.
                      In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare
                      pharetra.
                    </p>
                    <div className="mt-6">
                      <GradiantButton text="Discover our workshop" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://images.unsplash.com/photo-1537519646099-335112f03225?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3750&q=80"
                    alt="Surf workshop"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Feature Section */}
        <div className="bg-gradient-to-r from-teal-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Find all the gear you need
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-purple-200">
              Specialist in board sports for 38 years, Rod's offers you the best brands of
              boardsports:
            </p>
            <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
              {FEATURES.map((feature) => (
                <div key={feature.name}>
                  <div>
                    <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                      <feature.icon className="h-6 w-6 text-indigo-700" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                    <p className="mt-2 text-base text-purple-200">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="relative bg-gray-900">
          <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
            <div className="h-full w-full xl:grid xl:grid-cols-2">
              <div className="h-full xl:relative xl:col-start-2">
                <img
                  className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                  src="https://images.unsplash.com/photo-1575623811814-dfbb2c13e4ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3750&q=80&sat=-100"
                  alt="People working on laptops"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
            <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
              <h2 className="text-sm font-semibold tracking-wide uppercase">
                <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                  Rod's restaurant
                </span>
              </h2>
              <p className="mt-3 text-3xl font-extrabold text-white">
                Treat yourself after a surf session
              </p>
              <p className="mt-5 text-lg text-gray-300">
                Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra
                tristique sem. Ornare feugiat viverra eleifend fusce orci in quis amet. Sit in et
                vitae tortor, massa. Dapibus laoreet amet lacus nibh integer quis. Eu vulputate diam
                sit tellus quis at.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}

        <Contact />
      </main>

      <footer className="bg-gray-50" aria-labelledby="footerHeading">
        <h2 id="footerHeading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:pt-24 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Shape
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {FOOTER_NAVIGATION.shape.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    School
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {FOOTER_NAVIGATION.school.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Shop
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {FOOTER_NAVIGATION.shop.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Compagny
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {FOOTER_NAVIGATION.compagny.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 xl:mt-0">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Subscribe to our newsletter
              </h3>
              <p className="mt-4 text-base text-gray-500">
                The latest news, articles, and resources, sent to your inbox weekly.
              </p>
              <form className="mt-4 sm:flex sm:max-w-md">
                <label htmlFor="emailAddress" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="emailAddress"
                  id="emailAddress"
                  autoComplete="email"
                  required
                  className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16">
            <div className="flex space-x-6 md:order-2">
              {FOOTER_NAVIGATION.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; 2021 Rod's, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
