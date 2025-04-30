import { useDispatch, useSelector } from "react-redux";
import { shopCardItems } from "../dummyData";
import { useEffect } from "react";
import { getCategories } from "../store/actions/productAction";
import { Link } from "react-router-dom/cjs/react-router-dom";

export function ShopPageCategoryCards() {
  const womanCategory = [];
  const slicingWomanCategory = [];

  const { categories } = useSelector((state) => state.product);
  console.log(categories);

  if (categories.length === 0) {
    return (
      <section className="flex items-center justify-center w-full h-[300px] bg-[#FAFAFA]">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </section>
    );
  }

  if (categories.length > 0) {
    for (let index = 0; index < categories.length; index++) {
      if (categories[index].gender === "k") {
        womanCategory.push(categories[index]);
      }
    }

    womanCategory.sort((a, b) => b.rating - a.rating);
    slicingWomanCategory.push(...womanCategory.slice(0, 5));
  }

  return (
    <>
      <div className="relative flex flex-col lg:flex-row gap-2 items-center justify-center mb-10 ">
        {slicingWomanCategory.map((item, index) => {
          return (
            <Link
              className="flex flex-col items-center justify-center cursor-pointer"
              key={index}
              to={`/shop/${item.gender}/${item.code}/${item.id}`}
            >
              <div className="flex flex-col items-center justify-center relative">
                <img
                  className="w-[332px] lg:w-[280px] h-[300px]"
                  src={item.img}
                  alt=""
                />

                <label
                  className="text-white font-semibold absolute top-25 text-2xl"
                  htmlFor=""
                >
                  {item.title}
                </label>
                {/* <label className="text-white font-semibold absolute" htmlFor="">
                  {item.info}
                </label> */}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
