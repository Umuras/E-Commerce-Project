import { bestSellerProductsDesktop, furniturePhoto } from "../dummyData";
import { buttonLeft, buttonRight } from "../dummyData";
import { bestSellerProducts } from "../dummyData";

export function ProductCardDesktopReverse({ photo, textPhoto }) {
  return (
    <>
      <section className="bg-white flex mt-10  items-start w-[1150px] ml-97  gap-12">
        <section className="flex flex-col justify-between w-[100%] m-0">
          <section className="flex justify-between items-center w-[100%] h-[65px]">
            <h3 className="!text-xl font-bold m-0">BESTSELLER PRODUCTS</h3>
            <nav className="flex gap-8 ">
              <li className="list-none">
                <button className="text-[#23A6F0] font-bold">Men</button>
              </li>
              <li className="list-none">
                {" "}
                <button className="text-[#737373] font-bold">Women</button>
              </li>
              <li className="list-none">
                {" "}
                <button className="text-[#737373] font-bold">
                  Accessories
                </button>
              </li>
            </nav>
            <nav className="flex gap-3">
              <li className="list-none">
                <img src={buttonLeft} alt="" />
              </li>
              <li className="list-none">
                <img src={buttonRight} alt="" />
              </li>
            </nav>
          </section>
          <div className="w-[100%] border-1 border-[#ECECEC] "></div>

          <section className="w-[90%] h-[90%] bg-white flex justify-between">
            {bestSellerProducts.map((item, index) => {
              return (
                <div className="w-[80%] h-[30%] flex flex-col mx-2" key={index}>
                  <img src={item.src} alt="" />
                  <div className="flex flex-col items-center">
                    <h5 className="!font-bold !text-xs !text-[#252B42]">
                      {item.firstText}
                    </h5>
                    <h5 className="!font-bold !text-xs !text-[#737373]">
                      {item.secondText}
                    </h5>
                  </div>

                  <div className="flex gap-2 items-center justify-center mt-2.5">
                    <h5 className="font-bold !text-xs !text-[#BDBDBD]">
                      {item.firstPrice}
                    </h5>
                    <h5 className="font-bold !text-xs !text-[#23856D]">
                      {item.secondPrice}
                    </h5>
                  </div>
                </div>
              );
            })}
          </section>
          <section className="w-[90%] h-[90%] bg-white flex justify-between">
            {bestSellerProducts.map((item, index) => {
              return (
                <div className="w-[80%] h-[30%] flex flex-col mx-2" key={index}>
                  <img src={item.src} alt="" />
                  <div className="flex flex-col items-center">
                    <h5 className="!font-bold !text-xs !text-[#252B42]">
                      {item.firstText}
                    </h5>
                    <h5 className="!font-bold !text-xs !text-[#737373]">
                      {item.secondText}
                    </h5>
                  </div>

                  <div className="flex gap-2 items-center justify-center mt-2.5">
                    <h5 className="font-bold !text-xs !text-[#BDBDBD]">
                      {item.firstPrice}
                    </h5>
                    <h5 className="font-bold !text-xs !text-[#23856D]">
                      {item.secondPrice}
                    </h5>
                  </div>
                </div>
              );
            })}
          </section>
        </section>
        <div className="flex justify-start relative">
          <div className="flex items-center justifty-between">
            <img className="w-full h-[796px]" src={photo} alt="" />
            {!textPhoto && (
              <>
                <h6 className="absolute z-10 top-5 left-8 font-bold text-amber-600">
                  FURNITURE
                </h6>
                <h6 className="absolute z-10 top-12 left-8 text-gray-400">
                  5 Items
                </h6>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
