import { shopCardItems } from "../dummyData";

export function ShopPageCategoryCards() {
  return (
    <>
      <div className="relative flex flex-col lg:flex-row gap-2 items-center justify-center mb-10">
        {shopCardItems.map((item, index) => {
          return (
            <section
              className="flex flex-col items-center justify-center"
              key={index}
            >
              <div className="flex flex-col items-center justify-center relative">
                <img className="w-[332px] h-[300px]" src={item.src} alt="" />

                <label
                  className="text-white font-semibold absolute top-25"
                  htmlFor=""
                >
                  {item.title}
                </label>
                <label className="text-white font-semibold absolute" htmlFor="">
                  {item.info}
                </label>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
