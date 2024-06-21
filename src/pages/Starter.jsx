import React from "react";
import laptop from "../assets/laptop.png";
import think from "../assets/think.png";
function Starter() {
  return (
    <div>
      <section className="w-full h-1/2  mt-28 xl:px-56 max-md:px-10 max-sm:px-3 max-md:mt-10  ">
        <div className="flex max-lg:flex-col flex-row items-center justify-center   ">
          <div className="mr-6 flex flex-col justify-center">
            <h1 className="text-6xl mb-6 font-primary font-medium max-sm:text-4xl">
              Everyone has a story to tell.{" "}
            </h1>
            <p className="text-2xl font-normal max-sm:text-xl  font-primary">
              Welcome to{" "}
              <span className="font-semibold  font-primary ">Blog</span> this is
              a digital space where we can share our thoughts experiences and
              passions with each others. Whether you like adventures or personal
              growth this is a platform for everyone.
            </p>
          </div>
          <img src={laptop} className="text-center m-20 w-96" />
        </div>
      </section>
      <section className="  mt-10 xl:px-56 max-md:px-10 max-sm:px-3">
        <div className="flex max-lg:flex-col flex-row items-center justify-center  ">
          <img src={think} className="text-center m-20 w-96" />
          <div className="mr-6 flex flex-col justify-center">
            <h1 className="text-6xl mb-6 font-primary font-medium max-sm:text-4xl">
              About us
            </h1>
            <p className="text-2xl font-normal max-sm:text-xl font-primary">
              At "Blog" we believe in the power of words to inspire, motivate,
              and transform. Our blog is dedicated to curating the best quotes
              from thinkers, leaders, and visionaries across time. Whether you
              need a spark of creativity, a moment of reflection, or a boost of
              motivation, you'll find it here.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Starter;
