import React from 'react';

const Restaurant = () => {
  return (
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
            <span className="bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent">
              Rod's restaurant
            </span>
          </h2>
          <p className="mt-3 text-3xl font-extrabold text-white">
            Treat yourself after a surf session
          </p>
          <p className="mt-5 text-lg text-gray-300">
            Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra
            tristique sem. Ornare feugiat viverra eleifend fusce orci in quis amet. Sit in et vitae
            tortor, massa. Dapibus laoreet amet lacus nibh integer quis. Eu vulputate diam sit
            tellus quis at.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
