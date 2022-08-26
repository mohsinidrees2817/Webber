import React from "react";

const Overview = () => {
  return (
    <div className="bg-[#A5F3FC]/[.2]">
      <h1 className="text-5xl font-extrabold text-center md:text-7xl lg:8xl">
        DEPLOY YOUR <br /> FRONT-END
      </h1>
      <div className="flex  flex-col justify-center items-center mt-20 sm:flex-row ">
        <button className="w-40  h-12 text-[#FFFFFF]  bg-gradient-to-r from-[#06B6D4] to-[#0284C7] m-5">
          Get Started
        </button>
        <button className="w-40  h-12 bg-gradient-to-r bg-[#CFFAFE] text-[#0E7490] m-5">
          Learn More
        </button>
      </div>
      <div className="flex justify-center items-center mt-20 flex-col mx-auto max-w-[88rem]">
        <div className=" w-4/5 h-48 bg-gradient-to-r from-[#06B6D4] to-[#0284C7]"></div>
        <div className=" w-3/5 h-[20rem] bg-white -mt-28 rounded-lg relative border-slate-300 border-2 flex flex-col md:h-[32rem]">
          <div className="flex justify-start items-center mt-2">
            <button className="w-2.5 h-2.5 border-slate-300 border-2 rounded-full m-2 "></button>
            <button className="w-2.5 h-2.5 border-slate-300 border-2 rounded-full m-2"></button>
            <button className="w-2.5 h-2.5 border-slate-300 border-2 rounded-full m-2"></button>
            <input
              type="link"
              className="border-slate-300 border-2 w-4/5 rounded-lg m-2 "
            />
          </div>
          <div className="w-full h-[16rem] flex justify-center items-center border-slate-300 absolute bottom-0 border-2 md:h-[28rem]"></div>
          <div></div>
        </div>
      </div>
      <div className=" mx-auto max-w-[88rem]">
        <h1 className="text-center text-bold text-5xl font-black mt-40 md:text-6xl md:font-extrabold">
          Tailor-made features
        </h1>
        <div className="flex justify-center items-center gap-8 px-auto py-8 flex-col md:flex-row">
          <div className="flex justify-center items-center flex-col">
            <img src="./images/01.png" alt="logo" />
            <h3 className="font-semibold mt-4">Robust workflow</h3>
            <p className="text-center pt-4 px-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              et.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src="./images/01.png" alt="logo" />
            <h3 className="font-semibold mt-4">Robust workflow</h3>
            <p className="text-center pt-4 px-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              et.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src="./images/01.png" alt="logo" />
            <h3 className="font-semibold mt-4">Robust workflow</h3>
            <p className="text-center pt-4 px-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              et.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-8 px-auto mt-8 flex-col md:flex-row ">
          <div className="flex justify-center items-center flex-col">
            <img src="./images/01.png" alt="logo" />
            <h3 className="font-semibold mt-4">Robust workflow</h3>
            <p className="text-center pt-4 px-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              et.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src="./images/01.png" alt="logo" />
            <h3 className="font-semibold mt-4">Robust workflow</h3>
            <p className="text-center pt-4 px-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              et.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src="./images/01.png" alt="logo" />
            <h3 className="font-semibold mt-4">Robust workflow</h3>
            <p className="text-center pt-4 px-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              et.
            </p>
          </div>
        </div>
      </div>
      <div className=" px-4   md:px-16 mx-auto max-w-[88rem]">
        <h1 className="text-center text-extrabold text-5xl font-black mt-40 md:text-7xl">
          How it works
        </h1>
        
          <div className="flex mt-28 gap-12 md:flex-row  flex-col-reverse px-8 justify-center items-center">
            <div className=" w-3/4 flex justify-center items-center flex-col">
              <h2 className="text-3xl font-bold px-auto text-center md:text-left md:text-5xl">
                Sign Up
              </h2>
              <p className="mt-8 px-auto text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
                vitae a consectetur dolor. Elementum habitant urna, ac quis
                laoreet urna purus. Aliquam at est vel auctor rhoncus et. Sit ac
                enim, malesuada mattis. Dignissim nibh augue posuer
              </p>

              <div className="w-full flex justify-center items-center flex-col gap-4 md:flex-row md:justify-between">
                <div className="">
                  <button className="w-40  h-12 text-[#FFFFFF]  bg-gradient-to-r from-[#06B6D4] to-[#0284C7] mt-5">
                    Get Started
                  </button>
                </div>
                <div className="">
                  <button className=" w-12 h-[3rem] text-center rounded-full p-4">
                    <img src="./images/Arrow4.png" alt="" />
                  </button>
                  <button className=" w-12 h-[3rem] text-center bg-gradient-to-r from-[#06B6D4] to-[#0284C7] rounded-full p-4">
                    <img src="./images/Arrow3.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="px-auto">
              <img src="./images/Groupiph.png" alt="iphone" />
            </div>
          
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-[#0050b9] to-[#0284C7] mt-40 flex flex-col justify-center items-center md:flex-row lg:items-end py-8 gap-8 px-8 lg:justify-end mx-auto max-w-[88rem]">
        <div className="flex justify-center items-center flex-col md:flex-row">
          <div className="p-2">
            <img src="./images/picture.png" alt="" />
          </div>
          <div className="text-[#FFFFFF]">
            <h2 className=" text-xl">Jenny Wilson</h2>
            <p>Vice President</p>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col w-3/4 text-[#FFFFFF] pt-8 px-auto">
          <p className="text-center px-auto">
            Eos enim quo est necessitatibus nobis consectetur rerum qui dolores.
            Quia commodi similique est sed aut.{" "}
            <br className="hidden md:block" /> Aspernatur voluptas nisi tenetur
            voluptates iusto debitis ex voluptatem odit. Repudiandae et et{" "}
            <br className="hidden md:block" />
            quod et. Enim sit delectus numquam. Molestiae aut voluptatem. Quia
            commodi similique est sed aut.
            <br className="hidden md:block" /> Aspernatur voluptas nisi tenetur
            voluptates iusto debitis.
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-center text-5xl font-extrabold mt-32 md:font-black md:text-6xl">
          Brands using our services
        </h1>
      </div>
      <div className="mt-12">
        <div className="flex justify-center mt-4 flex-wrap">
          <img src="./images/Microsoft.png" alt="" />
          <img src="./images/OYO.png" alt="" />
          <img src="./images/Walmart.png" alt="" />
          <img src="./images/airbnb.png" alt="" />
        </div>
        <div className="flex justify-center flex-wrap md:mt-4">
          <img src="./images/FedEx.png" alt="" />
          <img src="./images/BookMyShow.png" alt="" />
          <img src="./images/Amazon.png" alt="" />
          <img src="./images/Google.png" alt="" />
        </div>
      </div>
      <div className="w-full h-80 bg-gradient-to-r from-[#0050b9] to-[#0284C7] mt-40 mx-auto max-w-[88rem]">
        <h1 className="text-center text-extrabold text-5xl font-black text-[#FFFFFF] pt-16">
          By the numbers
        </h1>
        <p className="text-center text-[#FFFFFF] p-4">
          5 years, consistent quality and you get results. No matter what
        </p>
      </div>
      <div className="flex justify-center gap-8 flex-wrap items-center -mt-16 md:-mt-28">
        <div className="w-60 h-[12rem] bg-white p-12 rounded-lg">
          <h1 className="text-6xl font-bold text-center">40+</h1>
          <p className="text-[#52525B] text-center p-2">Happy Clients</p>
        </div>
        <div className="w-60 h-[12rem] bg-white p-12 rounded-lg">
          <h1 className="text-6xl font-bold text-center">540+</h1>
          <p className="text-[#52525B] text-center p-2">Projects Completed</p>
        </div>
        <div className="w-60 h-[12rem] bg-white p-12 rounded-lg">
          <h1 className="text-6xl font-bold text-center">300</h1>
          <p className="text-[#52525B] text-center p-2">Dedicated Members</p>
        </div>
        <div className="w-60 h-[12rem] bg-white p-12 rounded-lg">
          <h1 className="text-6xl font-bold text-center">25+</h1>
          <p className="text-[#52525B] text-center p-2">Awards Won</p>
        </div>
      </div>
      <div className="mt-40 flex flex-col justify-center items-center pb-24">
        <h1 className="text-center text-bold md:text-extrabold text-4xl font-black text-black px-4 md:text-6xl">
          Build the next big thing and ship <br className="hidden md:block" /> to market faster{" "}
        </h1>
        <button className="w-40  h-12 text-[#FFFFFF] bg-gradient-to-r from-[#06B6D4] to-[#0284C7] mt-20">
          Download Now
        </button>
      </div>
    </div>
  );
};

export default Overview;
