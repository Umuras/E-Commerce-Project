import { useEffect } from "react";
import {
  facebookbottomteamIcon,
  instragrambottomteamIcon,
  linkedinteamIcon,
  redbgwomanPhoto,
  redbgwomantestphoto,
  rightIconBlue,
  teamMembers,
  teamPagePhotos,
  twitterbottomteamIcon,
} from "../dummyData";
import { Link } from "react-router-dom/cjs/react-router-dom";

export function TeamPage({ setIsHomePage, setIsContactpage }) {
  useEffect(() => {
    setIsHomePage(false);
    setIsContactpage(true);
  });
  return (
    <section className="flex flex-col">
      <div className="flex flex-col bg-[#F6F6F6] items-center">
        <h5 className="!text-[16px] !font-bold !text-[#737373] my-4">
          WHAT WE DO
        </h5>
        <h2 className="!text-[40px] lg:!text-[58px] !font-bold !text-[#252B42] !text-center w-[80%]">
          Innovation tailored for you
        </h2>
        <div className="flex gap-4 my-4">
          <Link
            className="font-bold text-center !text-[#252B42] !no-underline"
            to="/"
          >
            Home
          </Link>
          <img className="w-1.5 !text-[#737373]" src={rightIconBlue} alt="" />
          <Link
            className=" font-bold text-center !text-[#737373] !no-underline"
            to="/team"
          >
            Team
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:flex-grow  lg:justify-between">
        <div className="lg:w-[700px] lg:h-[530px] lg:flex-grow">
          <img
            className="lg:w-full lg:h-full lg:object-cover lg:object-center"
            src={redbgwomanPhoto}
            alt=""
          />
        </div>

        <div className="flex flex-wrap lg:w-[50%] lg:items-center">
          {teamPagePhotos.map((item, index) => {
            return (
              <div
                className="w-1/2 lg:h-[265.2px] flex justify-center  px-0.5 py-1.5 lg:px-1 lg:py-0 lg:gap-2"
                key={index}
              >
                <img
                  className="w-[204px] lg:w-full lg:object-center lg:object-cover"
                  src={item.src}
                  alt={item.altText}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-10 lg:w-full lg:flex-wrap">
        <div className="lg:w-1/2 lg:flex lg:flex-wrap lg:gap-4 items-center justify-center">
          <h2 className="!text-[40px] !font-bold !text-[#252B42] !text-center w-[99%] lg:w-[100%] py-20">
            Meet Our Team
          </h2>
          {teamMembers.map((item, index) => {
            return (
              <section key={index} className="">
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

      <div className="flex flex-col items-center gap-4 mt-20">
        <h2 className="!text-[2.5rem] !font-bold text-center !text-[#252B42] w-[100%]">
          Start your <br />
          14 days free trial
        </h2>
        <p className="!text-[14px] !font-bold !text-[#737373] text-center w-[80%] lg:w-[20%]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <button className="text-white bg-[#23A6F0] px-10 py-3.5 !rounded-[5px] !font-bold">
          Try it free now
        </button>
        <div className="flex gap-[36px] mt-4 mb-20">
          <img src={twitterbottomteamIcon} alt="" />
          <img src={facebookbottomteamIcon} alt="" />
          <img src={instragrambottomteamIcon} alt="" />
          <img src={linkedinteamIcon} alt="" />
        </div>
      </div>
    </section>
  );
}
