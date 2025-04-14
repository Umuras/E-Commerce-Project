import { foodItemsFirst } from "../dummyData";

export function ShopCard() {
  //Shopcarda homepage üzerinden foodItemsFirst arrayini alır ve map ile döngüye sokar.
  return (
    <>
      <section className="bg-[#FAFAFA] flex flex-col items-center py-20">
        {foodItemsFirst.map((item, index) => {
          return (
            <div key={index}>
              <div className="w-[332px] h-[232px]  mt-2.5  bg-white">
                <div className="flex">
                  <div className="flex flex-col gap-4 mt-4 ml-6">
                    <h6 className="text-xl !text-[#737373]">
                      {item.firstText}
                    </h6>
                    <h2 className="font-extrabold">{item.secondText}</h2>
                    <h6 className="text-xl !text-[#252B42]">
                      {item.thirdText}
                    </h6>
                  </div>
                  <img src={item.src} alt="" className="w-50.5 h-50.5 mt-2.5" />
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
