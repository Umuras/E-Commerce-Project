import { Link } from "react-router-dom/cjs/react-router-dom";
import { fsquare, tline } from "../dummyData";
import { ProductCardForShopPage } from "./ProductCardForShopPage";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, setSort } from "../store/actions/productAction";

export function ShopPageItemsArea({
  isMobile,
  handleGetProductsForSelectedCategory,
}) {
  const { selectedCategory, filter, sort } = useSelector(
    (state) => state.product
  );

  const dispatch = useDispatch();

  function handleSortChange(event) {
    const selectedValue = event.target.value;
    dispatch(setSort(selectedValue));
    handleGetProductsForSelectedCategory(
      selectedCategory,
      selectedValue,
      filter
    );
  }

  return (
    <section className="flex flex-col items-center justify-center pb-10 !bg-white  pt-10">
      <div className="lg:flex lg:gap-0 lg:items-center lg:justify-between lg:w-[75.5%] lg:ml-20 lg:mr-20 ">
        <h6 className="!text-[14px] !text-[#737373] !font-bold lg:m-0 text-center">
          {isMobile ? "Showing all 4 results" : "Showing all 12 results"}
        </h6>
        <div className="flex gap-3 mt-4 lg:!mt-0  items-center justify-center">
          <h6 className="!text-[14px] !text-[#737373] !font-bold lg:m-0 lg:p-0">
            Views:
          </h6>
          <img className="lg:m-0 lg:p-0" src={fsquare} alt="" />
          <img className="lg:m-0 lg:p-0" src={tline} alt="" />
        </div>
        <div className="flex gap-3 mt-4 items-center justify-center mb-10">
          <input
            type="text"
            className="lg:px-2 lg:py-2.5 w-[70%] py-2.5 bg-[#E0E0E0] rounded-lg text-center"
            placeholder="Renk..."
            onChange={(e) => dispatch(setFilter(e.target.value))}
          />
          <select
            className="px-2 py-2.5 !rounded-lg bg-[#F9F9F9] text-center shadow-sm border border-[#E0E0E0]"
            onChange={handleSortChange}
          >
            <option value="rating:desc">Popüler</option>
            <option value="rating:asc">Az Popüler</option>
            <option value="price:asc">Fiyat-Azdan Çoğa</option>
            <option value="price:desc">Fiyat-Çoktan Aza</option>
          </select>
          <button
            className="bg-[#23A6F0] text-white px-4 py-2.5 !rounded-lg"
            onClick={() =>
              handleGetProductsForSelectedCategory(
                selectedCategory,
                sort,
                filter
              )
            }
          >
            Filter
          </button>
        </div>
      </div>

      <ProductCardForShopPage isMobile={isMobile} />

      <div className="flex my-10 justify-center shadow-sm rounded-lg">
        <Link
          className="!bg-[#F3F3F3] !border-[#BDBDBD] !text-[#BDBDBD] !text-[14px] p-4 border-1 !no-underline !font-bold rounded-l-lg"
          to="#"
        >
          First
        </Link>
        <Link
          className="border-1 px-3 py-6 text-blue-400 !font-bold !no-underline !text-center bg-white !border-[#BDBDBD] cursor-pointer"
          to="#"
        >
          1
        </Link>
        <Link
          className=" border-1 px-3 py-6 text-white !font-bold !no-underline !align-middle bg-[#23A6F0] !border-[#BDBDBD] cursor-pointer"
          to="#"
        >
          2
        </Link>
        <Link
          className=" border-1 px-3 py-6 text-blue-400 !font-bold !no-underline !text-center bg-white !border-[#BDBDBD] cursor-pointer"
          to="#"
        >
          3
        </Link>
        <Link
          className="!bg-white !border-[#BDBDBD] !text-[#23A6F0] !text-[14px] p-4 border-1 !no-underline !font-bold rounded-r-lg cursor-pointer "
          to="#"
        >
          Next
        </Link>
      </div>
    </section>
  );
}
