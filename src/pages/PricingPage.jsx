import { useEffect } from "react";
import {
  brandIcons,
  checkinput,
  circlegrayIcon,
  circlegreenIcon,
  facebookbottomteamIcon,
  instragrambottomteamIcon,
  linkedinteamIcon,
  rightIconBlue,
  twitterbottomteamIcon,
} from "../dummyData";
import { Clients } from "../components/Clients";

export function PricingPage({ setIsHomePage, setIsContactpage }) {
  useEffect(() => {
    setIsHomePage(false);
    setIsContactpage(true);
  });
  return (
    <section className="flex flex-col">
      <div className="flex flex-col items-center justify-center  py-20 lg:py-5 lg:mt-14">
        <h5 className="!text-[#737373] !text-[16px] !font-bold !text-center">
          PRICING
        </h5>
        <h2 className="!text-[40px] !font-bold !text-[#252B42] !text-center  lg:!text-[58px]">
          Simple Pricing
        </h2>
        <div className="flex gap-4 my-4">
          <a
            className="font-bold text-center !text-[#252B42] !no-underline"
            href="/home"
          >
            Home
          </a>
          <img className="w-1.5 !text-[#737373]" src={rightIconBlue} alt="" />
          <a
            className=" font-bold text-center !text-[#737373] !no-underline"
            href="/pricing"
          >
            Pricing
          </a>
        </div>
      </div>

      <div className="flex flex-col bg-[#F6F6F6] items-center justify-center py-10">
        <h2 className="!text-[40px] !font-bold !text-[#252B42] lg:!mt-20">
          Pricing
        </h2>
        <p className="!text-[#737373] !text-[14px] !font-semibold !text-center w-[80%] mx-9 !mb-10">
          <span className="md:block">
            Problems trying to resolve the conflict between
          </span>
          <span className="md:block">
            the two major realms of Classical physics: Newtonian mechanics{" "}
          </span>
        </p>
        <div className="flex items-center justify-center gap-2 lg:!gap-3">
          <h5 className="!text-[16px] !font-bold !text-[#252B42] ">Monthly</h5>
          <img className="" src={checkinput} alt="" />
          <h5 className="!text-[16px] !font-bold !text-[#252B42] ">Yearly</h5>
          <button className="!text-[#23A6F0] !text-[14px] !font-bold px-3 py-2.5 !rounded-[37px] bg-[#B2E3FF]">
            Save 25%
          </button>
        </div>

        <div className="lg:flex lg:flex-row w-full lg:items-end lg:justify-center flex flex-col items-center justify-center">
          <div className="flex flex-col w-[80%] lg:w-[22%] items-center justify-center bg-white py-10 mt-10 border-1 border-[#23A6F0] lg:!rounded-[10px]">
            <h3 className="!text-[24px] !text-[#252B42] !font-bold">FREE</h3>
            <h5 className="!text-[16px] !text-[#737373] !font-bold !text-center !mt-10">
              Organize across all <br /> apps by hand
            </h5>
            <div className="flex items-center justify-center gap-2 my-10">
              <h2 className="!text-[40px] !font-bold !text-[#23A6F0]">0</h2>
              <div className="flex flex-col">
                <h3 className="!text-[24px] !font-bold !text-[#23A6F0] !m-0">
                  $
                </h3>
                <h6 className="!text-[14px] !font-semibold !text-[#8EC2F2]">
                  Per Month
                </h6>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-3.5">
              <div className="flex gap-2">
                <img src={circlegreenIcon} alt="" />
                <h6 className="!text-[14px] !font-bold !text-[#252B42]">
                  Unlimited product updates
                </h6>
              </div>
              <div className="flex gap-2">
                <img src={circlegreenIcon} alt="" />
                <h6 className="!text-[14px] !font-bold !text-[#252B42]">
                  Unlimited product updates
                </h6>
              </div>
              <div className="flex gap-2">
                <img src={circlegreenIcon} alt="" />
                <h6 className="!text-[14px] !font-bold !text-[#252B42]">
                  Unlimited product updates
                </h6>
              </div>
              <div className="flex gap-2 items-center w-[220px]">
                <img src={circlegrayIcon} alt="" />
                <h6 className="!text-[14px] !font-bold !text-[#252B42]">
                  1GB Cloud storage
                </h6>
              </div>
              <div className="flex gap-2  items-center w-[220px]">
                <img src={circlegrayIcon} alt="" />
                <h6 className="!text-[14px] !font-bold !text-[#252B42]">
                  Email and community support
                </h6>
              </div>
              <button className="!text-[14px] !font-bold px-19 py-3.5 !rounded-[5px] !bg-[#23A6F0] text-white mt-4">
                Try for free
              </button>
            </div>
          </div>

          <div className="flex flex-col w-[80%] lg:w-[22%] h-[700px] lg:!rounded-[10px] items-center justify-center bg-[#252B42] py-10 mt-10 border-1 border-[#23A6F0]">
            <h3 className="!text-[24px] text-white !font-bold">STANDARD</h3>
            <h5 className="!text-[16px] text-white !font-bold !text-center !mt-10">
              Organize across all <br /> apps by hand
            </h5>
            <div className="flex items-center justify-center gap-2 my-10">
              <h2 className="!text-[40px] !font-bold !text-[#23A6F0]">9.99</h2>
              <div className="flex flex-col">
                <h3 className="!text-[24px] !font-bold !text-[#23A6F0] !m-0">
                  $
                </h3>
                <h6 className="!text-[14px] !font-semibold !text-[#8EC2F2]">
                  Per Month
                </h6>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-3.5">
              <div className="flex gap-2">
                <img src={circlegreenIcon} alt="" />
                <h6 className="!text-[14px] !font-bold text-white">
                  Unlimited product updates
                </h6>
              </div>
              <div className="flex gap-2">
                <img src={circlegreenIcon} alt="" />
                <h6 className="!text-[14px] !font-bold text-white">
                  Unlimited product updates
                </h6>
              </div>
              <div className="flex gap-2">
                <img src={circlegreenIcon} alt="" />
                <h6 className="!text-[14px] !font-bold text-white">
                  Unlimited product updates
                </h6>
              </div>
              <div className="flex gap-2 items-center w-[220px]">
                <img src={circlegrayIcon} alt="" />
                <h6 className="!text-[14px] !font-bold text-white">
                  1GB Cloud storage
                </h6>
              </div>
              <div className="flex gap-2  items-center w-[220px]">
                <img src={circlegrayIcon} alt="" />
                <h6 className="!text-[14px] !font-bold text-white">
                  Email and community support
                </h6>
              </div>
              <button className="!text-[14px] !font-bold px-19 py-3.5 !rounded-[5px] !bg-[#23A6F0] text-white mt-4">
                Try for free
              </button>
            </div>
          </div>

          <div className="flex flex-col w-[80%] lg:w-[22%] items-center justify-center lg:!rounded-[10px] bg-white py-10 mt-10 border-1 border-[#23A6F0]">
            <h3 className="!text-[24px] !text-[#252B42] !font-bold">PREMIUM</h3>
            <h5 className="!text-[16px] !text-[#737373] !font-bold !text-center !mt-10">
              Organize across all <br /> apps by hand
            </h5>
            <div className="flex items-center justify-center gap-2 my-10">
              <h2 className="!text-[40px] !font-bold !text-[#23A6F0]">19.99</h2>
              <div className="flex flex-col">
                <h3 className="!text-[24px] !font-bold !text-[#23A6F0] !m-0">
                  $
                </h3>
                <h6 className="!text-[14px] !font-semibold !text-[#8EC2F2]">
                  Per Month
                </h6>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-3.5">
              <div className="flex gap-2">
                <img src={circlegreenIcon} alt="" />
                <h6 className="!text-[14px] !font-bold !text-[#252B42]">
                  Unlimited product updates
                </h6>
              </div>
              <div className="flex gap-2">
                <img src={circlegreenIcon} alt="" />
                <h6 className="!text-[14px] !font-bold !text-[#252B42]">
                  Unlimited product updates
                </h6>
              </div>
              <div className="flex gap-2">
                <img src={circlegreenIcon} alt="" />
                <h6 className="!text-[14px] !font-bold !text-[#252B42]">
                  Unlimited product updates
                </h6>
              </div>
              <div className="flex gap-2 items-center w-[220px]">
                <img src={circlegrayIcon} alt="" />
                <h6 className="!text-[14px] !font-bold !text-[#252B42]">
                  1GB Cloud storage
                </h6>
              </div>
              <div className="flex gap-2  items-center w-[220px]">
                <img src={circlegrayIcon} alt="" />
                <h6 className="!text-[14px] !font-bold !text-[#252B42]">
                  Email and community support
                </h6>
              </div>
              <button className="!text-[14px] !font-bold px-19 py-3.5 !rounded-[5px] !bg-[#23A6F0] text-white mt-4">
                Try for free
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-40">
          <h4 className="!text-[20px] !font-semibold !text-[#252B42] !text-center">
            <span className="block md:inline-block">Trusted By Over 4000</span>{" "}
            <span className="block md:inline-block">Big Componies</span>
          </h4>
          <div className="flex flex-col lg:flex-row lg:mt-20 lg:items-center lg:gap-8  mt-20 gap-10 pb-30 lg:pb-10  lg:w-[100%] lg:justify-center lg:mx-auto">
            {brandIcons.map((item, index) => {
              return (
                <div key={index} className="flex gap-4 mb-4 lg:mb-0">
                  <img className="lg:w-[60%]" src={item.src} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col my-20 items-center justify-center ">
        <div className="flex flex-col items-center justify-center gap-3">
          <h2 className="!text-[40px] !font-bold">Pricing FAQs</h2>
          <p className="!text-[14px] !font-semibold !text-center lg:hidden">
            <span className="block md:inline-block">
              We focus on ergonomics and meeting
            </span>
            <span className="block md:inline-block">
              you where you work. It's only
            </span>
            <span className="block md:inline-block">a keystroke away.</span>
          </p>
          <h4 className="hidden lg:block lg:!text-[20px] lg:!text-center lg:!text-[#737373]">
            <span className="block">
              Problems trying to resolve the conflict between
            </span>{" "}
            <span>the two major realms of Classical physics</span>
          </h4>
        </div>

        <div className="lg:hidden flex flex-col items-center justify-center w-[80%] gap-5 mt-14">
          <div className="flex flex-col items-start gap-4">
            <h5 className="!text-[16px] !font-bold !text-[#252B42]">
              Work better together
            </h5>
            <p className="!text-[14px] !font-semibold !text-[#737373]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <h5 className="!text-[16px] !font-bold !text-[#252B42]">
              OpenType features and Variable fonts
            </h5>
            <p className="!text-[14px] !font-semibold !text-[#737373]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <h5 className="!text-[16px] !font-bold !text-[#252B42]">
              Start working faster today
            </h5>
            <p className="!text-[14px] !font-semibold !text-[#737373]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <h5 className="!text-[16px] !font-bold !text-[#252B42]">
              Work at the speed of thought.
            </h5>
            <p className="!text-[14px] !font-semibold !text-[#737373]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <h5 className="!text-[16px] !font-bold !text-[#252B42]">
              The Fastest way to organize
            </h5>
            <p className="!text-[14px] !font-semibold !text-[#737373]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <h5 className="!text-[16px] !font-bold !text-[#252B42]">
              The Fastest way to organize
            </h5>
            <p className="!text-[14px] !font-semibold !text-[#737373]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
        </div>

        <div className="hidden lg:items-center lg:flex lg:flex-col lg:w-[54%] ml-30 mt-20">
          <div className="flex justify-between w-full">
            <div className="lg:flex lg:flex-col lg:w-[50%] hidden">
              <div className="lg:flex gap-4 lg:items-center mt-10">
                <img className="text-[#737373]" src={rightIconBlue} alt="" />
                <h5 className="!font-bold !text-[16px] !text-[#252B42] ">
                  the quick fox jumps over the lazy dog
                </h5>
              </div>

              <div className="lg:flex lg:flex-col lg:w-[100%] ml-8">
                <h6 className="!text-[14px] !text-[#737373] !font-semibold mb-4 w-[90%] !leading-5">
                  <span className="block">
                    Met minim Mollie non desert Alamo est sit cliquey
                  </span>
                  <span className="block">
                    dolor do met sent. RELIT official consequent door ENIM
                  </span>
                  <span className="block">
                    RELIT Mollie. Excitation venial consequent sent{" "}
                  </span>
                  <span className="block">nostrum met.</span>
                </h6>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:w-[50%] hidden">
              <div className="lg:flex gap-4 lg:items-center mt-10">
                <img className="text-[#737373]" src={rightIconBlue} alt="" />
                <h5 className="!font-bold !text-[16px] !text-[#252B42] ">
                  the quick fox jumps over the lazy dog
                </h5>
              </div>

              <div className="lg:flex lg:flex-col lg:w-[100%] ml-8">
                <h6 className="!text-[14px] !text-[#737373] !font-semibold mb-4 w-[90%] !leading-5">
                  <span className="block">
                    Met minim Mollie non desert Alamo est sit cliquey
                  </span>
                  <span className="block">
                    dolor do met sent. RELIT official consequent door ENIM
                  </span>
                  <span className="block">
                    RELIT Mollie. Excitation venial consequent sent nostrum met.{" "}
                  </span>
                </h6>
              </div>
            </div>
          </div>

          <div className="flex justify-between w-full">
            <div className="lg:flex lg:flex-col lg:w-[50%] hidden">
              <div className="lg:flex gap-4 lg:items-center mt-10">
                <img className="text-[#737373]" src={rightIconBlue} alt="" />
                <h5 className="!font-bold !text-[16px] !text-[#252B42] ">
                  the quick fox jumps over the lazy dog
                </h5>
              </div>

              <div className="lg:flex lg:flex-col lg:w-[100%] ml-8">
                <h6 className="!text-[14px] !text-[#737373] !font-semibold mb-4 w-[90%] !leading-5">
                  <span className="block">
                    Met minim Mollie non desert Alamo est sit cliquey
                  </span>
                  <span className="block">
                    dolor do met sent. RELIT official consequent door ENIM
                  </span>
                  <span className="block">
                    RELIT Mollie. Excitation venial consequent sent{" "}
                  </span>
                  <span className="block">nostrum met.</span>
                </h6>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:w-[50%] hidden">
              <div className="lg:flex gap-4 lg:items-center mt-10">
                <img className="text-[#737373]" src={rightIconBlue} alt="" />
                <h5 className="!font-bold !text-[16px] !text-[#252B42] ">
                  the quick fox jumps over the lazy dog
                </h5>
              </div>

              <div className="lg:flex lg:flex-col lg:w-[100%] ml-8">
                <h6 className="!text-[14px] !text-[#737373] !font-semibold mb-4 w-[90%] !leading-5">
                  <span className="block">
                    Met minim Mollie non desert Alamo est sit cliquey
                  </span>
                  <span className="block">
                    dolor do met sent. RELIT official consequent door ENIM
                  </span>
                  <span className="block">
                    RELIT Mollie. Excitation venial consequent sent nostrum met.{" "}
                  </span>
                </h6>
              </div>
            </div>
          </div>

          <div className="flex justify-between w-full">
            <div className="lg:flex lg:flex-col lg:w-[50%] hidden">
              <div className="lg:flex gap-4 lg:items-center mt-10">
                <img className="text-[#737373]" src={rightIconBlue} alt="" />
                <h5 className="!font-bold !text-[16px] !text-[#252B42] ">
                  the quick fox jumps over the lazy dog
                </h5>
              </div>

              <div className="lg:flex lg:flex-col lg:w-[100%] ml-8">
                <h6 className="!text-[14px] !text-[#737373] !font-semibold mb-4 w-[90%] !leading-5">
                  <span className="block">
                    Met minim Mollie non desert Alamo est sit cliquey
                  </span>
                  <span className="block">
                    dolor do met sent. RELIT official consequent door ENIM
                  </span>
                  <span className="block">
                    RELIT Mollie. Excitation venial consequent sent{" "}
                  </span>
                  <span className="block">nostrum met.</span>
                </h6>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:w-[50%] hidden">
              <div className="lg:flex gap-4 lg:items-center mt-10">
                <img className="text-[#737373]" src={rightIconBlue} alt="" />
                <h5 className="!font-bold !text-[16px] !text-[#252B42] ">
                  the quick fox jumps over the lazy dog
                </h5>
              </div>

              <div className="lg:flex lg:flex-col lg:w-[100%] ml-8">
                <h6 className="!text-[14px] !text-[#737373] !font-semibold mb-4 w-[90%] !leading-5">
                  <span className="block">
                    Met minim Mollie non desert Alamo est sit cliquey
                  </span>
                  <span className="block">
                    dolor do met sent. RELIT official consequent door ENIM
                  </span>
                  <span className="block">
                    RELIT Mollie. Excitation venial consequent sent nostrum met.{" "}
                  </span>
                </h6>
              </div>
            </div>
          </div>
        </div>

        <h4 className="!text-[20px] !font-semibold !text-[#737373] !text-center !mt-20">
          <span className="block md:inline-block">
            Haven’t got your answer?
          </span>{" "}
          <span className="block md:inline-block">Contact our support</span>
        </h4>
      </div>

      <div className="flex flex-col items-center gap-4 mt-20">
        <h2 className="!text-[2.5rem] !font-bold text-center !text-[#252B42] w-[100%]">
          <span className="block lg:inline-block">Start your</span>{" "}
          <span className="block lg:inline-block">14 days free trial</span>
        </h2>
        <p className="!text-[14px] !font-bold !text-[#737373] text-center w-[80%] lg:w-[20%] lg:!font-semibold">
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
