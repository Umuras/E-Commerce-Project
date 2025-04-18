import { fsquare, tline } from "../dummyData";
import { ProductCardForShopPage } from "./ProductCardForShopPage";

export function ShopPageItemsArea({ isMobile }) {
  return (
    <section className="flex flex-col items-center justify-center pb-10 !bg-white  pt-10">
      <div className="lg:flex lg:gap-0 lg:items-center lg:justify-between lg:w-[65%] lg:mr-20">
        <h6 className="!text-[14px] !text-[#737373] !font-bold lg:m-0">
          Showing all 12 results
        </h6>
        <div className="flex gap-3 mt-4 lg:!mt-0  items-center justify-center">
          <h6 className="!text-[14px] !text-[#737373] !font-bold lg:m-0 lg:p-0">
            Views:
          </h6>
          <img className="lg:m-0 lg:p-0" src={fsquare} alt="" />
          <img className="lg:m-0 lg:p-0" src={tline} alt="" />
        </div>
        <div className="flex gap-3 mt-4 items-center justify-center mb-10">
          {/* <select className="px-2 py-2.5 !rounded-lg bg-[#F9F9F9] text-center"> */}
          <select className="px-2 py-2.5 !rounded-lg bg-[#F9F9F9] text-center shadow-sm border border-[#E0E0E0]">
            <option value="popular">Populer</option>
            <option value="all">Tumu</option>
            <option value="hamburger">Hamburger</option>
            <option value="meat">Et</option>
            <option value="chicken">Tavuk</option>
            <option value="desert">Tatli</option>
          </select>
          <button className="bg-[#23A6F0] text-white px-4 py-2.5 !rounded-lg">
            Filter
          </button>
        </div>
      </div>

      {isMobile ? (
        <ProductCardForShopPage isMobile={isMobile} />
      ) : (
        Array.from({ length: 3 }, (_, index) => {
          return <ProductCardForShopPage isMobile={isMobile} />;
        })
      )}

      <div className="flex my-10 justify-center shadow-sm rounded-lg">
        <a
          className="!bg-[#F3F3F3] !border-[#BDBDBD] !text-[#BDBDBD] !text-[14px] p-4 border-1 !no-underline !font-bold rounded-l-lg"
          href="#"
        >
          First
        </a>
        <a
          className="border-1 px-3 py-6 text-blue-400 !font-bold !no-underline !text-center bg-white !border-[#BDBDBD] cursor-pointer"
          href="#"
        >
          1
        </a>
        <a
          className=" border-1 px-3 py-6 text-white !font-bold !no-underline !align-middle bg-[#23A6F0] !border-[#BDBDBD] cursor-pointer"
          href="#"
        >
          2
        </a>
        <a
          className=" border-1 px-3 py-6 text-blue-400 !font-bold !no-underline !text-center bg-white !border-[#BDBDBD] cursor-pointer"
          href="#"
        >
          3
        </a>
        <a
          className="!bg-white !border-[#BDBDBD] !text-[#23A6F0] !text-[14px] p-4 border-1 !no-underline !font-bold rounded-r-lg cursor-pointer "
          href="#"
        >
          Next
        </a>
      </div>
    </section>
  );
}
