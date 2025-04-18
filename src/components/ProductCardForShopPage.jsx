import { bestSellerProducts, shopPageItemsForMobile } from "../dummyData";
import { Clients } from "./Clients";

export function ProductCardForShopPage({ isMobile }) {
  return (
    <>
      <section className="bg-white flex flex-col lg:flex-row items-center">
        {shopPageItemsForMobile.map((item, index) => {
          return (
            <div key={index}>
              <img className="lg:w-[80%]" src={item.src} alt="" />
              <div className="flex flex-col items-center lg:w-[80%]">
                <h5 className="!font-bold !text-lg !text-[#252B42]">
                  {item.firstText}
                </h5>
                <h5 className="!font-bold !text-lg !text-[#737373]">
                  {item.secondText}
                </h5>
              </div>

              <div className="flex gap-2 items-center justify-center mt-2.5 lg:w-[80%]">
                <h5 className="font-bold text-xl !text-[#BDBDBD]">
                  {item.firstPrice}
                </h5>
                <h5 className="font-bold text-xl !text-[#23856D]">
                  {item.secondPrice}
                </h5>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
