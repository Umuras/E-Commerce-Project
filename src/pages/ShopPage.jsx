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

export function ShopPage({ isMobile, setIsHomePage }) {
  useEffect(() => {
    setIsHomePage(false);
  });
  return (
    <>
      <section className="flex flex-col bg-[#FAFAFA]">
        <ShopPageHeader />

        <ShopPageCategoryCards isMobile={isMobile} />

        <ShopPageItemsArea isMobile={isMobile} />

        <section className="bg-[#FAFAFA] w-full flex items-center justify-center">
          <Clients />
        </section>
      </section>
    </>
  );
}
