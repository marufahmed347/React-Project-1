import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import {ArrowForward} from '@mui/icons-material'

function WorkPage() {
  return (
    <>
      <section className="gap-24 py-16 px-6 lg:px-16 max-w-[1400px] mx-auto">

        {/* section 1 */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">

          {/* left side */}
          <div className="flex-1 items-start">
            <img className="w-full h-auto max-w-lg" src="/cake 1.png" alt="" />
          </div>

          {/* right side */}
          <div className="flex flex-1 flex-col gap-4">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold max-w-lg">
              Make more time for the work
            </h1>
            <p className="text-black text-lg">
              <CheckCircleOutlineIcon className="text-green-600 me-2" />
              <span>Simply explained with illustrations</span>
            </p>
            <p className="text-black text-lg">
              <CheckCircleOutlineIcon className="text-green-600 me-2" />
              <span>Make more time for the work</span>
            </p>
            <p className="text-black text-lg">
              <CheckCircleOutlineIcon className="text-green-600 me-2" />
              <span>Many ways to use illustrations in design</span>
            </p>
            <div className="gap-3 mb-10">
              <button className="bg-indigo-500 text-white font-semibold px-6 py-3 transition duration-300 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-700 mx-auto lg:mx-0 ">
              Learn more
                <ArrowForward sx={{ fontSize: 24 }} />
              </button>
            </div>
          </div>
        </div>

        {/* section 2 */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between mt-24">

          {/* left side */}
          <div className="flex flex-1 flex-col gap-4">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold max-w-lg">
              Make more time for the work
            </h1>
            <p className="text-black text-lg">
              <CheckCircleOutlineIcon className="text-green-600 me-2" />
              <span>Simply explained with illustrations</span>
            </p>
            <p className="text-black text-lg">
              <CheckCircleOutlineIcon className="text-green-600 me-2" />
              <span>Make more time for the work</span>
            </p>
            <p className="text-black text-lg">
              <CheckCircleOutlineIcon className="text-green-600 me-2" />
              <span>Many ways to use illustrations in design</span>
            </p>
            <div className="gap-3 mb-10">
              <button className="bg-indigo-100 text-[#5F62E2] font-semibold px-6 py-3 transition duration-300 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-500 hover:text-white mx-auto lg:mx-0 ">
              Learn more
                <ArrowForward sx={{ fontSize: 24 }} />
              </button>
            </div>
          </div>

          {/* right side */}
          <div className="flex-1 items-start">
            <img className="w-full h-auto max-w-lg" src="/cake 2.png" alt="" />
          </div>
        </div>

      </section>
    </>
  );
}

export default WorkPage;
