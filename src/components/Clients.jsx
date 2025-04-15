import { brandIcons } from "../dummyData";

export function Clients() {
  return (
    <>
      <div className="flex flex-col mt-40 gap-10 pb-30">
        {brandIcons.map((item, index) => {
          return (
            <div key={index} className="flex gap-4 mb-4">
              <img src={item.src} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
}
