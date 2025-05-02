import { Link } from "react-router-dom/cjs/react-router-dom";
import { fsquare, tline } from "../dummyData";
import { ProductCardForShopPage } from "./ProductCardForShopPage";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, setOffset, setSort } from "../store/actions/productAction";
import { current } from "@reduxjs/toolkit";

export function ShopPageItemsArea({
  isMobile,
  handleGetProductsForSelectedCategory,
}) {
  const { selectedCategory, filter, sort } = useSelector(
    (state) => state.product
  );

  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { total, limit, offset } = useSelector((state) => state.product);

  const totalPagesCount = Math.ceil(total / limit);

  function handleSortChange(event) {
    const selectedValue = event.target.value;
    dispatch(setSort(selectedValue));
    handleGetProductsForSelectedCategory(
      selectedCategory,
      selectedValue,
      filter
    );
  }

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
    const offset = (pageNumber - 1) * limit;
    dispatch(setOffset(offset));
    handleGetProductsForSelectedCategory(
      selectedCategory,
      sort,
      filter,
      offset,
      limit
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
        <button
          className={` !border-[#BDBDBD] !text-[#BDBDBD] !text-[14px] p-4 border-1 !no-underline !font-bold !rounded-l-lg ${
            currentPage === 1 ? "!bg-[#F3F3F3]" : "!bg-white"
          }`}
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          First
        </button>
        {Array.from({ length: totalPagesCount }, (_, index) => (
          <Link
            key={index}
            className={` !border-[#BDBDBD] !text-[#23A6F0] !text-[14px] p-4 border-1 !no-underline !font-bold ${
              currentPage === index + 1
                ? "  !text-white !bg-[#23A6F0]"
                : "!text-[#23A6F0] !bg-white"
            }`}
            to="#"
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Link>
        ))}

        <button
          className={` !border-[#BDBDBD] !text-[#23A6F0] !text-[14px] p-4 border-1 !no-underline !font-bold !rounded-r-lg cursor-pointer 
            ${currentPage === totalPagesCount ? "!bg-[#F3F3F3]" : "!bg-white"}`}
          to="#"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPagesCount}
        >
          Next
        </button>
      </div>
    </section>
  );
}
