import { useEffect } from "react";
import { aboutus, brandIcons, teamMembers, videocard } from "../dummyData";
import { Clients } from "../components/Clients";

export function AboutUsPage({ setIsHomePage }) {
  useEffect(() => {
    setIsHomePage(false);
  });

  return (
    <section className="flex flex-col">
      <div className="flex flex-col ">
        <div className="flex flex-col gap-4 items-center justify-center mb-10">
          <h2 className="!text-[40px] !font-bold !text-[#252B42] !mt-30">
            ABOUT US
          </h2>
          <h4 className="!text-[20px]  !text-[#737373] !text-center mx-[66px] !leading-8">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </h4>
          <button className="bg-[#23A6F0] text-white !text-[14px] !font-bold px-10 py-3.5 !rounded-[5px]">
            Get Quote Now
          </button>
        </div>
        <div>
          <img className="w-[98%]" src={aboutus} alt="" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-20 ">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="!text-[#E74040] !text-[14px] !font-semibold">
            Problems trying
          </p>
          <h3 className="!text-[24px] !font-bold !text-[#252B42] !text-center w-[80%]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met{" "}
            <br />
            sent.
          </h3>
        </div>
        <div className="flex justify-center items-center mt-14">
          <p className="!text-[#737373] !text-[14px] !font-bold !text-start  w-[80%]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-18 my-40">
        <div className="flex flex-col items-center">
          <h1 className="!text-[58px] !font-bold  !text-[#252B42]">15K</h1>
          <h5 className="!text-[16px] !font-bold !text-[#737373]">
            Happy Customers
          </h5>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="!text-[58px] !font-bold  !text-[#252B42]">150K</h1>
          <h5 className="!text-[16px] !font-bold !text-[#737373]">
            Monthly Visitors
          </h5>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="!text-[58px] !font-bold  !text-[#252B42]">15</h1>
          <h5 className="!text-[16px] !font-bold !text-[#737373]">
            Countries WorldWide
          </h5>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="!text-[58px] !font-bold  !text-[#252B42]">100+</h1>
          <h5 className="!text-[16px] !font-bold !text-[#737373]">
            Top Partners
          </h5>
        </div>
      </div>

      <img className="mx-10 my-10" src={videocard} alt="" />

      <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-10 lg:w-full lg:flex-wrap">
        <div className="lg:w-1/2 lg:flex lg:flex-wrap lg:gap-4 items-center justify-center">
          <h2 className="!text-[40px] !font-bold !text-[#252B42] !text-center w-[100%] lg:w-[100%] ">
            Meet Our <br /> Team
          </h2>
          <p className="!text-[#737373] !text-[14px] !font-bold !text-center w-[80%] mx-9 !mb-10">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
          {teamMembers.slice(0, 3).map((item, index) => {
            return (
              <section key={index} className="flex flex-col items-center">
                <img className="w-[18rem] h-[14rem]" src={item.src} alt="" />
                <div className="flex flex-col gap-4 mt-7 mb-14">
                  <h5 className="!text-[16px] !font-bold !text-[#252B42] text-center">
                    {item.title}
                  </h5>
                  <h6 className="text-center !text-[14px] !font-bold !text-[#737373]">
                    {item.profession}
                  </h6>
                  <div className="flex gap-4 items-center justify-center">
                    <img src={item.facebooklogo} alt="" />
                    <img src={item.instagramlogo} alt="" />
                    <img src={item.twitterlogo} alt="" />
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center justify-between">
        <h2 className="!font-bold !text-[40px] !text-[#252B42] !text-center w-[80%] !mb-10">
          Big <br />
          Componies <br />
          Are Here
        </h2>
        <p className="!text-[#737373] !text-[14px] !font-semibold !text-center w-[80%] mx-9 !mb-10">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <div className="flex flex-col lg:flex-row lg:mt-20 lg:items-center lg:gap-8  mt-10 gap-10 pb-30 lg:pb-10  lg:w-[100%] lg:justify-center lg:mx-auto">
          {brandIcons.map((item, index) => {
            return (
              <div key={index} className="flex gap-4 mb-4 lg:mb-0">
                <img className="lg:w-[60%]" src={item.src} alt="" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col items-center gap-4 bg-[#2A7CC7] py-24">
          <h5 className="!text-[16px] !font-bold text-white">WORK WITH US</h5>
          <h2 className="!text-[40px] !text-center w-[70%] !font-bold text-white">
            Now Let's grow Yours
          </h2>
          <p className="!text-[14px] text-white !font-semibold align-middle text-center w-[60%]">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th{" "}
          </p>
          <button className="border-1 border-white !rounded-[5px] text-white !font-semibold !text-[14px] px-9 py-3.5">
            Click Here!
          </button>
        </div>
        <img className="hidden" src="" alt="" />
      </div>
    </section>
  );
}
