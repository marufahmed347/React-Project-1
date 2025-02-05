import React from "react";

function BoomArea() {
  return (
    <>
      <section className="bg-indigo-500 w-full h-auto mb-5">
        <div className="flex flex-col lg:flex-row items-center justify-between mt-24 max-w-[1400px] mx-auto px-10">
          <div className="flex-1 flex flex-col gap-8 p-5 mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 text-white text-center md:text-start">The quickest way to create awesome presentation</h1>

            <div className="flex gap-3 flex-wrap mb-10">
                <button className="bg-green-500 font-semibold py-3 px-6 rounded-lg transition duration-300 text-white flex items-center justify-center gap-2 hover:bg-green-400 hover:text-black mx-auto sm:mx-0">
                    Get Started
                </button>
                <button className="bg-indigo-400 font-semibold py-3 px-6 rounded-lg transition duration-300 text-white flex items-center justify-center gap-2 hover:bg-green-400 hover:text-black mx-auto sm:mx-0">
                    Learn More
                </button>
            </div>
          </div>

          <div className="flex-1 md:mt-6">
            <img src="boom.png" className="w-full h-auto md:h-[300px] md:ms-[-100px]"/>
          </div>

        </div>
      </section>
    </>
  );
}

export default BoomArea;
