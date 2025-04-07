import {
  Search,
  ShoppingCart,
  MenuIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { slides } from "../dummyData";

export function Header({ children }) {
  const [menu, setMenu] = useState(false);
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const nextSlide = () => {
    if (current === slides.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <header>
      <div className="flex justify-between mx-8 mt-8 items-center">
        <label className="text-xl font-bold">BrandName</label>
        <div className="flex gap-8">
          <Search />
          <ShoppingCart />
          <MenuIcon onClick={() => setMenu(!menu)} />
        </div>
      </div>

      {menu && (
        <div className="flex flex-col items-center gap-4 mt-16 mb-10">
          <label className="font-montserrat text-xl text-[#737373]">Home</label>
          <label className="font-montserrat text-xl text-[#737373]">
            Product
          </label>
          <label className="font-montserrat text-xl text-[#737373]">
            Pricing
          </label>
          <label className="font-montserrat text-xl text-[#737373]">
            Contact
          </label>
        </div>
      )}

      <div className="overflow-hidden relative">
        <div
          className={`flex transition ease-out duration-300`}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((item, index) => {
            return <img src={item} key={index} />;
          })}
          <div className="flex flex-col absolute ml-32 mt-16">
            <label className=" font-bold text-2xl text-white" htmlFor="">
              GROSERIES
            </label>
            <label className=" font-bold text-2xl text-white " htmlFor="">
              DELIVERY
            </label>
          </div>
          <p className="font-bold absolute text-white ml-26 mt-32 w-[57%]">
            We know how large objects will act, but things on a small scale
          </p>

          <button className="absolute bg-blue-500 font-bold text-white p-2 rounded-md mx-34 my-51 cursor-pointer">
            Start Now
          </button>
        </div>

        <div className="absolute top-0 h-full w-full flex justify-between items-center text-white px-2 text-3xl">
          <button onClick={previousSlide}>
            <ChevronLeft />
          </button>
          <button onClick={nextSlide}>
            <ChevronRight />
          </button>
        </div>

        <div className="absolute bottom-0 py-4 flex justify-center w-full">
          {slides.map((item, index) => {
            return (
              <div
                className={`w-10 h-1 ${
                  current === index ? "bg-blue-500" : "bg-white"
                }`}
                key={index}
              ></div>
            );
          })}
        </div>
      </div>
    </header>
  );
}
