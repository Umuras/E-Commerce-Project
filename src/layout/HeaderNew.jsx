import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { items, slides } from "../dummyData";
import {
  Search,
  ShoppingCart,
  MenuIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

export function HeaderNew(args) {
  const [menu, setMenu] = useState(false);
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
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
      {/* w-full: Bu div'in genişliğini ekranın tamamına yayar.
      max-w-3xl: Ekranın belirli bir genişlik sınırına ulaşmasını sağlar (bu sınıfla 3xl boyutunu belirliyoruz).
      mx-auto: Ekranda yatayda ortalamak için kullanılır.
      overflow-hidden: Yalnızca bir slayt görünmesini sağlar, diğer slaytlar kaybolur.
      rounded-lg: Kenarları yuvarlar.
      shadow-lg: Kutunun etrafına gölge ekler. */}
      <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg">
        {/* flex: Slaytları yatayda sıralar.
      transition-transform duration-500: 500ms süresince geçiş animasyonu ekler.
      style={{ transform: translateX(-${current * 100}%) }}: Bu satır, current state'ine bağlı olarak slaytları yatayda kaydırır. 
      current değeri 0 ise, ilk slayt görünür.
      current değeri 1 ise, ikinci slayt görünür. Yani her current değerinde slaytlar 100% kayar.*/}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {items.map((item) => (
            //flex-shrink-0 için
            //     Bu sınıf, bu div'in küçülmesini engeller (flexbox konteyner içindeyse).
            //     Eğer parent’ı bir flex container ise, diğer elemanlar daralırken bu daralmaz.
            //     Özellikle bir carousel veya yatay scroll alanında kullanılır.
            // 📦 Örnek: Resim slider’ı düşün → tüm slide’ların genişliği sabit kalsın diye kullanılır.
            //w-full ile parent ne kadar genişse, bu div de o kadar geniş olur.
            <div key={item.key} className="relative flex-shrink-0 w-full">
              <img src={item.src} alt={item.alt} className="w-full h-full" />
              <label className="absolute bottom-45 left-30 text-white text-2xl font-bold">
                {item.caption}
              </label>
              <label className="absolute bottom-37 left-30 text-white text-2xl font-bold">
                {item.caption2}
              </label>
              <label className="absolute bottom-20 left-25 text-white w-1/2">
                {item.text}
              </label>
              <button className="absolute bottom-8 left-32 px-3 py-2 bg-blue-400 font-bold text-white">
                Start Now
              </button>
            </div>
          ))}
        </div>

        {/* OK butonları */}
        <button
          onClick={prevSlide}
          //top-1/2, parent elementin yüksekliğinin yarısı kadar yukarıdan konumlandırır.
          //-translate-y-1/2 Elemanı kendi yüksekliğinin yarısı kadar yukarı kaydırır
          className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white p-2 rounded-full"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2  text-white p-2 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>
    </header>
  );
}
