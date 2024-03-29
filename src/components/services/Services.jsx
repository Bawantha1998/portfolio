import React from 'react';
import ServicesBox from "./ServicesBox.jsx";

const Services = () => {
  return (
  <>
  <section className="bg-secondary dark:bg-gray-900 dark:text-white py-10">
    <div className="container flex flex-col items-center">
        <h1 className="inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1">Projects</h1>
        <p className="text-slate-500 text-center md:w-[50%] max-auto">
        Visit<a href="https://github.com/Bawantha1998?tab=repositories" className="text-sm 
            text-primary font-bold border-b-2 border-primary p"> GitHub</a> repositories for more information
        </p>
    </div>
    <div>
        {/* services card */}
    </div>
    <div>
        <ServicesBox/>
    </div>
  </section>
  </>
  )
}

export default Services
