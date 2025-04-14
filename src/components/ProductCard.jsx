import { furniturePhoto } from "../dummyData";
import { buttonLeft, buttonRight } from "../dummyData";
import { bestSellerProducts } from "../dummyData";

export function ProductCard({ photo, textPhoto }) {
  return (
    <>
      <section className="bg-white flex flex-col mt-10 pb-12">
        <div className="flex justify-center relative">
          <div className="flex flex-col w-[94%] items-center">
            <img className="w-full" src={photo} alt="" />
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

      <section className="bg-white flex flex-col mt-10 items-center">
        <h3 className="text-2xl font-bold">BESTSELLER PRODUCTS</h3>
        <nav className="flex gap-8 p-4">
          <li className="list-none">
            <button className="text-[#23A6F0] font-bold">Men</button>
          </li>
          <li className="list-none">
            {" "}
            <button className="text-[#737373] font-bold">Women</button>
          </li>
          <li className="list-none">
            {" "}
            <button className="text-[#737373] font-bold">Accessories</button>
          </li>
        </nav>
        <nav className="flex gap-3 mb-4">
          <li className="list-none">
            <img src={buttonLeft} alt="" />
          </li>
          <li className="list-none">
            <img src={buttonRight} alt="" />
          </li>
        </nav>
        <div className="w-[94%] border-1 border-[#ECECEC] mb-4"></div>
      </section>
      <section className="bg-white flex flex-col items-center">
        {bestSellerProducts.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.src} alt="" />
              <div className="flex flex-col items-center">
                <h5 className="!font-bold !text-lg !text-[#252B42]">
                  {item.firstText}
                </h5>
                <h5 className="!font-bold !text-lg !text-[#737373]">
                  {item.secondText}
                </h5>
              </div>

              <div className="flex gap-2 items-center justify-center mt-2.5">
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
