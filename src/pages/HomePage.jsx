import { BlogCard } from "../components/BlogCard";
import { Clients } from "../components/Clients";
import { FourthProductCard } from "../components/FourthProductCard";
import { ProductCard } from "../components/ProductCard";
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

export function HomePage() {
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
        <ProductCard photo={furniturePhoto} textPhoto={false} />
      </section>
      <SecondProductCard />
      <section className="w-full pb-70">
        <ProductCard photo={donutProductPhoto} textPhoto={true} />
      </section>
      <ThirdProductCard />

      <section className="bg-[#FAFAFA] flex flex-col items-center justify-center w-full mt-10">
        <FourthProductCard />
        <Clients />
      </section>

      <BlogCard blogCardItems={blogCardItems} />
    </>
  );
}
