import { use, useEffect, useState } from "react";
import { BlogCard } from "../components/BlogCard";
import { Clients } from "../components/Clients";
import { FourthProductCard } from "../components/FourthProductCard";
import { ProductCard } from "../components/ProductCard";
import { ProductCardDesktop } from "../components/ProductCardDesktop";
import { SecondProductCard } from "../components/SecondProductCard";
import { ShopCard } from "../components/ShopCard";
import { ThirdProductCard } from "../components/ThirdProductCard";
import {
  appleProductPhoto,
  bestSellerProducts2,
  blogCardItems,
  blogPhotoFirst,
  brandIcons,
  clockIcon,
  donutProductPhoto,
  downloadIconPhoto,
  graphIcon,
  icecreamPhoto,
  icecreamProductPhoto,
  meatProductPhoto,
  motoGuyPhoto,
  rightIconBlue,
  roastBeefPhoto,
  whaleCardPhoto,
} from "../dummyData";
import { foodItemsFirst } from "../dummyData";
import { furniturePhoto } from "../dummyData";
import { bestSellerProducts } from "../dummyData";
import { SecondProductCardDesktop } from "../components/SecondProductCardDesktop";
import { ProductCardDesktopReverse } from "../components/ProductCardDesktopReverse";
import { BlogCardDesktop } from "../components/BlogCardDesktop";

export function HomePage({ isMobile, setIsContactpage, setIsHomePage }) {
  useEffect(() => {
    setIsContactpage(false);
    setIsHomePage(true);
  });

  const shopCardPhotos = [icecreamPhoto, appleProductPhoto, roastBeefPhoto];
  const productCardPhotos = [
    furniturePhoto,
    icecreamProductPhoto,
    appleProductPhoto,
    roastBeefPhoto,
  ];
  const secondProductCardPhotos = [motoGuyPhoto, meatProductPhoto];
  return (
    <>
      <ShopCard shopCardPhotos={shopCardPhotos} />

      <section className="w-full pb-70">
        {isMobile ? (
          <ProductCard photo={furniturePhoto} textPhoto={false} />
        ) : (
          <ProductCardDesktop photo={furniturePhoto} textPhoto={false} />
        )}
      </section>
      {isMobile ? <SecondProductCard /> : <SecondProductCardDesktop />}

      <section className="w-full pb-70">
        {isMobile ? (
          <ProductCard photo={donutProductPhoto} textPhoto={true} />
        ) : (
          <ProductCardDesktopReverse
            photo={donutProductPhoto}
            textPhoto={true}
          />
        )}
      </section>
      <ThirdProductCard />

      <section className="bg-[#FAFAFA] flex flex-col items-center justify-center w-full mt-10 lg:mb-30">
        <FourthProductCard />
        <Clients />
      </section>

      {isMobile ? (
        <BlogCard blogCardItems={blogCardItems} />
      ) : (
        <BlogCardDesktop blogCardItems={blogCardItems} />
      )}
    </>
  );
}
