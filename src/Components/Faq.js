import React from "react";

const Faq = () => {
  return (
    <div className="bg-[#A5F3FC]/[.2]">
      <div className="flex justify-center items-center flex-col md:flex-row">
        <div className=" md:w-3/4 flex flex-col justify-center items-center md:items-start relative text-[#27272A] px-8 md:ml-8">
          <p>Kanban Software</p>
          <h2 className="text-5xl font-bold text-center sm:text-start">Trello x Webber</h2>

          <p className="mt-4 md:pr-16 text-center  sm:text-start">
            Learn how Trello has leveraged Webber to consolidate it’s diverse
            range of services software
          </p>
          <div className="mt-4 text-center  md:text-start">
            <p className="px-4 sm:inline">Industry: Technology </p>
            <p className="px-4 sm:inline">Use case: Developer operations</p>
          </div>
          <div className="mt-4 text-center md:text-start">
            <p className="px-4 sm:inline">Since: 2018 </p>
            <p className="px-4 sm:inline">Package: Enterprise+</p>
          </div>
        </div>
        <div className="w-3/4 md:w-2/4 mt-4">
          <img src="./images/Projectcover.png" alt="iphone" />
        </div>
      </div>
      <div className="flex flex-col px-8 mt-16 md:flex-row md:ml-8">
        <div className=" w-3/4 flex flex-col justify-center items-start relative">
          <h2 className="text-2xl font-bold">The details</h2>

          <p className="mt-4 md:pr-16 text-[#27272A]">
            It is a long established fact that a reader will be distracted by
            the readable. There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered alteration in some form,
            by injected humour, or randomised words which don't look even
            slightly believable. If you are going to use a passage of Lorem
            Ipsum, you need to be sure there isn't anything embarrassing hidden
            in the middle of text. All the Lorem Ipsum generators on the
            Internet tend to repeat predefined chunks as necessary, making this
            the first true generator on the Internet. It uses a dictionary of
            over 200 Latin words, combined with a handful of model sentence
            structures, to generate Lorem Ipsum which looks reasonable. The
            generated Lorem Ipsum is therefore always free from repetition,
            injected humour, or non-characteristic words etc.
          </p>
          <img src="./images/projectcover2.png" className="pt-8" />
          <p className="pt-4 font-medium">Breakdown of milestones</p>
          <p className="pt-4 text-[#27272A]">
            - Mauris ullamcorper neque sed mauris gravida, vel mollis
            velitmolestie. <br />
            - Donec iaculis erat in vulputate venenatis. - Vestib ulumet velit
            et metus commodo iaculis. <br />
            - Sed et urna a felis accumsan commodo vel vel nibh. <br />
            - Praesent sollicitudin nulla non sollicitudin varius. - Integer
            convallis orci sed diam volutpat feugiat. <br />
            - Donec posuere arcu non semper maximus. <br />
          </p>
          <img src="./images/projectcover3.png" className="pt-8" />
          <p className="pt-4 pb-20 text-[#27272A]">
            It is a long established fact that a reader will be distracted by
            the readable. There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered alteration in some form,
            by injected humour, or randomised words which don't look even
            slightly believable. If you are going to use a passage of Lorem
            Ipsum, you need to be sure there isn't anything embarrassing hidden
            in the middle of text. All the Lorem Ipsum generators on the
            Internet tend to repeat predefined chunks as necessary, making this
            the first true generator on the Internet. It uses a dictionary of
            over 200 Latin words, combined with a handful of model sentence
            structures, to generate Lorem Ipsum which looks reasonable. The
            generated Lorem Ipsum is therefore always free from repetition,
            injected humour, or non-characteristic words etc.
          </p>
        </div>
        <div className=" md:w-2/4 md:h-2/4 bg-gradient-to-r from-[#017489] to-[#0284C7] p-12 box-brder">
        <h1 className="  font-medium text-[#FFFFFF] font-mulish">
        Get Webber for your organization
        </h1>
        <p className="pt-4 font-normal text-[#FFFFFF] font-mulish text-sm">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.
        </p>
        <div className="flex justify-start pt-8 ">
          <button className="w-40  h-12  bg-[#ffffff] text-[#0E7490]">
            Start Trial
          </button>
          <button className="w-40  h-12 text-[#ffffff] border border-white  ml-4">
            Contact Sales
          </button>
        </div>
        </div>
      </div>
      <div className="w-100 bg-[#F3F3F8] box-border pb-16">
        <h1 className=" text-extrabold text-2xl font-bold pb-12 text-center pt-12">
          More case studies
        </h1>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <div className=" overflow-hidden">
            <img src="./images/Cover11.png" />
            <p className="text-[#52525B] mt-2 mb-1">Technology - SaaS</p>
            <h2 className="font-bold font-mulish text-2xl">
            Swiss Airline
            </h2>
            <p className="text-[#52525B] mt-2 mb-2 text-sm">
              Learn how Adobe has leveraged <br /> Webber to consolidate its diverse{" "}
              <br /> range of services software
            </p>
            <p className="text-[#0E7490] cursor-pointer underline">
              Read story <img src="./images/Icon2.png" className="inline" />
            </p>
          </div>
          <div className=" overflow-hidden">
            <img src="./images/Cover22.png" />
            <p className="text-[#52525B] mt-2 mb-1">Kanban Software</p>
            <h2 className="font-bold text-2xl">Kling and Sons</h2>
            <p className="text-[#52525B] mt-2 mb-2 text-sm">
              Learn how Adobe has leveraged <br /> Webber to consolidate its diverse{" "}
              <br /> range of services software
            </p>
            <p className="text-[#0E7490] cursor-pointer underline">
              Read story <img src="./images/Icon2.png" className="inline" />
            </p>
          </div>
          <div className=" overflow-hidden">
            <img src="./images/Cover33.png" />
            <p className="text-[#52525B] mt-2 mb-1">Technology - SaaS</p>
            <h2 className="font-bold font-mulish text-2xl">
            Cassin - Zemlak
            </h2>
            <p className="text-[#52525B] mt-2 mb-2 text-sm">
              Learn how Adobe has leveraged <br /> Webber to consolidate its diverse{" "}
              <br /> range of services software
            </p>
            <p className="text-[#0E7490] cursor-pointer underline">
              Read story <img src="./images/Icon2.png" className="inline" />
            </p>
          </div>

          <div className=" overflow-hidden">
            <img src="./images/Cover44.png" />
            <p className="text-[#52525B] mt-2 mb-1">Airline</p>
            <h2 className="font-bold text-2xl">
            Russel - Kertzmann
            </h2>
            <p className="text-[#52525B] mt-2 mb-2 text-sm">
              Learn how Adobe has leveraged <br /> Webber to consolidate its diverse{" "}
              <br /> range of services software
            </p>
            <p className="text-[#0E7490] cursor-pointer underline">
              Read story <img src="./images/Icon2.png" className="inline" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
