import { bestSellerProducts2 } from "../dummyData";

export function FourthProductCard() {
  return (
    <>
      <div className="w-full flex justify-center mt-10 mb-10">
        <h3 className="w-full h-8 !font-bold !text-2xl text-center">
          BESTSELLER PRODUCTS
        </h3>
      </div>
      <div>
        {bestSellerProducts2.map((item, index) => {
          return (
            <div key={index}>
              <img className="mb-4" src={item.src} alt="" />
              <div className="flex flex-col gap-2.5 ml-4">
                <h5 className="!font-bold !text-[16px] !text-[#252B42]">
                  {item.firstText}
                </h5>
                <h5 className="!font-bold !text-[14px] !text-[#737373]">
                  {item.secondText}
                </h5>
              </div>

              <div className="flex gap-2 ml-6 mt-2.5 mb-16">
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
