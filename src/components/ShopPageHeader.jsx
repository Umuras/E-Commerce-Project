import { rightIconBlue } from "../dummyData";

export function ShopPageHeader() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:mx-60 py-6">
        <h3 className="!text-[1.5rem] !text-center">Shop</h3>
        <div className="flex gap-2 mt-4">
          <label className="font-bold text-center text-[#252B42]" htmlFor="">
            Home
          </label>
          <img className="w-1.5 text-[#737373]" src={rightIconBlue} alt="" />
          <label className=" font-bold text-center text-[#737373]" htmlFor="">
            Shop
          </label>
        </div>
      </div>
    </>
  );
}
