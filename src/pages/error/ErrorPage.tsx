import React from "react";
const ErrorPage = () => {
  return (
    <section className='bg-gray-50 text-white text-center'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              404
            </h1>
            <h3>Sorry, Page Is not Found</h3>
          </div>
          <button onClick={() => (location.href = "/")}>Back To Home</button>
          <div className='mb-10'></div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
