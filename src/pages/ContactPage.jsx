import { useEffect } from "react";
import {
  circulararrowIcon,
  contactCardInfo,
  contactLogos,
  contactPhotoImage,
} from "../dummyData";

export function ContactPage({ isMobile, setIsHomePage }) {
  useEffect(() => {
    setIsHomePage(false);
  });
  return (
    <>
      <section className="flex flex-col items-center mt-10 bg-[#F6F6F6] ">
        <h5 className="!text-[#252B42] !font-bold !text-[16px] !my-10">
          CONTACT US
        </h5>
        <h2 className="!text-[40px] !font-bold !text-[#252B42] w-[80%] !text-center !mb-10">
          Get in touch today!
        </h2>
        <h4 className="!text-[#737373] !text-[20px] w-[65%] !text-center !mb-10">
          We know how large objects will act, but things on a small scale just
          do not act that way.
        </h4>
        <h3 className="!font-bold !text-[24px] !text-[#252B42] ">
          Phone : +451 215 215
        </h3>
        <h3 className="!font-bold !text-[24px] !text-[#252B42] mt-4">
          Fax : +451 215 215
        </h3>
        <div className="flex gap-10 mt-16 mb-10">
          {contactLogos.map((item, index) => {
            return (
              <section key={index}>
                <img src={item.src} alt={item.alt} />
              </section>
            );
          })}
        </div>
        <img src={contactPhotoImage} alt="" />

        <div className="flex flex-col items-center mt-10 mb-10">
          <h6 className="!text-[#252B42] !text-[14px] !font-bold">
            VISIT OUR OFFICE
          </h6>
          <h2 className="!text-[#252B42] !text-[40px] !text-center !font-bold w-[75%]">
            We help small businesses with big ideas
          </h2>
          <div className="flex flex-col items-center justify-center mb-10">
            {contactCardInfo.map((item, index) => {
              return (
                <section
                  className={`w-[329px] h-[350px] ${item.bg} my-3`}
                  key={index}
                >
                  <div className="flex flex-col items-center justify-center mt-14">
                    <img
                      className="mb-6 w-[62px]"
                      src={item.src}
                      alt={item.alt}
                    />
                    <h6 className={`${item.textColor} !text-[14px] !font-bold`}>
                      {item.email1}
                    </h6>
                    <h6 className={`${item.textColor} !text-[14px] !font-bold`}>
                      {item.email2}
                    </h6>
                    <h5
                      className={`${item.textColor} !text-[16px] !font-bold !my-4`}
                    >
                      {item.text}
                    </h5>
                    <button className="border-2 border-[#23A6F0] !text-[#23A6F0] !px-1 w-[50%] py-2.5 !rounded-[5px]">
                      {item.buttonText}
                    </button>
                  </div>
                </section>
              );
            })}
          </div>
        </div>

        <div className="bg-white flex flex-col items-center justify-center w-full gap-2 pt-10 pb-20">
          <img className="w-[72px]" src={circulararrowIcon} alt="" />
          <h5 className="!text-[16px] !font-bold !text-[#252B42]">
            WE Can't WAIT TO MEET YOU
          </h5>
          <h1 className="!text-[58px] !font-bold !text-[#252B42] mt-4">
            Let's Talk
          </h1>
          <button className="!text-white bg-[#23A6F0] !text-[14px] px-10 py-3.5 !rounded-[5px] mt-4">
            Try it free now
          </button>
        </div>
      </section>
    </>
  );
}
