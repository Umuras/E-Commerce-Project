import { bestSellerProducts2 } from "../dummyData";

export function FourthProductCard() {
  return (
    <>
      <div className="w-full flex lg:flex-col lg:items-center justify-center mt-10 mb-10">
        <h3 className="w-full h-8 !font-bold !text-2xl text-center lg:!text-start lg:w-[56.5%]">
          BESTSELLER PRODUCTS
        </h3>
        <div className="lg:border-2 lg:border-[#ECECEC] lg:w-[56.5%] lg:mt-2"></div>
      </div>
      <div className="lg:flex lg:gap-10">
        {bestSellerProducts2.map((item, index) => {
          return (
            <div key={index}>
              <img className="mb-4 lg:w-[239px]" src={item.src} alt="" />
              <div className="flex flex-col gap-2.5 ml-4 lg:items-start">
                <h5 className="!font-bold !text-[16px] !text-[#252B42]">
                  {item.firstText}
                </h5>
                <h5 className="!font-bold !text-[14px] !text-[#737373]">
                  {item.secondText}
                </h5>
              </div>

              <div className="flex gap-2 ml-6 mt-2.5 mb-16 lg:items-start lg:justify-start">
                <h5 className="font-bold !text-[16px] !text-[#BDBDBD]">
                  {item.firstPrice}
                </h5>
                <h5 className="font-bold !text-[16px] !text-[#23856D]">
                  {item.secondPrice}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
