import { ArrowRight } from "lucide-react";
import { fsquare, rightIconBlue, shopCardItems, tline } from "../dummyData";
import { ShopCard } from "../components/ShopCard";
import { ProductCard } from "../components/ProductCard";
import { ProductCardForShopPage } from "../components/ProductCardForShopPage";
import { Clients } from "../components/Clients";
import { ShopPageHeader } from "../components/ShopPageHeader";
import { ShopPageCategoryCards } from "../components/ShopPageCategoryCards";
import { ShopPageItemsArea } from "../components/ShopPageItemsArea";
import { useEffect } from "react";
import { getProducts } from "../store/actions/productAction";
import { useDispatch } from "react-redux";

export function ShopPage({ isMobile, setIsHomePage, setIsContactpage }) {
  useEffect(() => {
    setIsHomePage(false);
    setIsContactpage(false);
  });

  const dispatchEvent = useDispatch();

  function handleGetProductsForSelectedCategory(
    categoryId,
    sort,
    filter,
    offset,
    limit
  ) {
    dispatchEvent(getProducts({ categoryId, sort, filter, offset, limit }));
  }
  return (
    <>
      <section className="flex flex-col bg-[#FAFAFA]">
        <ShopPageHeader />

        <ShopPageCategoryCards
          isMobile={isMobile}
          handleGetProductsForSelectedCategory={
            handleGetProductsForSelectedCategory
          }
        />

        <ShopPageItemsArea
          isMobile={isMobile}
          handleGetProductsForSelectedCategory={
            handleGetProductsForSelectedCategory
          }
        />

        <section className="bg-[#FAFAFA] w-full flex items-center justify-center">
          <Clients />
        </section>
      </section>
    </>
  );
}
