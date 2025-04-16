import {
  cashewProductPhoto,
  downloadIconPhoto,
  meatProductPhoto,
  motoGuyPhoto,
  sandwichProductPhoto,
} from "../dummyData";

export function ThirdProductCard() {
  return (
    <section className="flex flex-col lg:flex-row-reverse items-center lg:justify-center">
      <img
        className="lg:w-[674px] lg:h-[784px]"
        src={sandwichProductPhoto}
        alt=""
      />
      <div className="flex flex-col items-center mt-12 lg:mt-0 lg:bg-[#FAFAFA] lg:w-[401px] lg:h-[49rem] lg:justify-center">
        <h3 className="!text-xl !font-bold">MOST POPULAR</h3>
        <p className="!text-[14px] !text-[#737373] w-[65%] font-semibold text-center !mb-16">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <img className="mb-6 lg:bg-white" src={cashewProductPhoto} alt="" />
        <label className="text-[14px] font-bold text-[#252B42] mt-10">
          English Department
        </label>
        <div className="hidden lg:flex lg:gap-2 lg:items-center lg:justify-center lg:mt-4">
          <img className="w-5 h-5" src={downloadIconPhoto} alt="" />
          <label className="text-[14px] font-bold text-[#737373]" htmlFor="">
            15
          </label>
          <label className="text-[14px] font-bold text-[#737373]" htmlFor="">
            Sales
          </label>
        </div>
        <div className="flex gap-2 items-center justify-center mt-4">
          <h5 className="!font-bold !text-[16px] !text-[#BDBDBD]">$6.48</h5>
          <h5 className="!font-bold !text-[16px] !text-[#23856D]">$16.48</h5>
        </div>
      </div>
    </section>
  );
}
