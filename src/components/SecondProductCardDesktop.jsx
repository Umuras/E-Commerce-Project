import {
  downloadIconPhoto,
  meatProductPhoto,
  motoGuyPhoto,
} from "../dummyData";

export function SecondProductCardDesktop() {
  return (
    <section className="flex flex-col items-center  mr-24">
      <div className="flex items-center">
        <img className="w-[720px] h-[649px]" src={motoGuyPhoto} alt="" />
        <div className="flex flex-col items-center  bg-[#FAFAFA] w-[401px] h-[649px] py-20">
          <h3 className="!text-xl !font-bold">MOST POPULAR</h3>
          <p className="!text-[14px] !text-[#737373] w-[65%] font-semibold text-center">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
          <img className="" src={meatProductPhoto} alt="" />
          <label className="text-[14px] font-bold text-[#252B42] mt-10">
            English Department
          </label>
          <div className="flex gap-2 items-center justify-center mt-4">
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
      </div>
      <div className="mt-10 pb-20 w-[59%] flex  justify-center items-center gap-20 ">
        {Array.from({ length: 4 }).map((_, index) => {
          return (
            <div key={index} className="flex mt-4 justify-center w-[80%]">
              <h2 className="!text-red-500 !font-bold !text-[40px]">
                {index + 1}.
              </h2>
              <div className="flex flex-col items-start ml-4">
                <h6>Easy to use</h6>
                <p className="w-[85%] text-[12px] text-[#737373] font-semibold">
                  Things on a very small that you have any direct
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
