import { brandIcons } from "../dummyData";

export function Clients() {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:mt-20 lg:items-center lg:gap-8  mt-40 gap-10 pb-30 lg:pb-10  lg:w-[100%] lg:justify-center lg:mx-auto">
        {brandIcons.map((item, index) => {
          return (
            <div key={index} className="flex gap-4 mb-4 lg:mb-0">
              <img className="lg:w-[60%]" src={item.src} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
}
