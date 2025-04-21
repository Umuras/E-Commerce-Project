import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { basket, items, like, search, slides, user } from "../dummyData";
import {
  Search,
  ShoppingCart,
  MenuIcon,
  ChevronLeft,
  ChevronRight,
  MoveRight,
} from "lucide-react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

export function HeaderNew({
  isMobile,
  isHomePage,
  isContactpage,
  setIsContactPage,
}) {
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
      <div className="flex justify-between mx-8 mt-8 items-center lg:mx-60  mb-7">
        <label className="text-xl font-bold">Bandage</label>
        <nav className="hidden lg:flex gap-6 lg:items-center lg:justify-center ">
          <li className="list-none">
            <a className="!text-[#737373] !no-underline !font-bold" href="/">
              Home
            </a>
          </li>
          <li className="list-none">
            <a className="!text-[#252B42] !no-underline" href="/shop">
              Shop
            </a>
          </li>
          <li className="list-none">
            <a
              className="!text-[#737373] !no-underline !font-bold"
              href="/about"
            >
              About
            </a>
          </li>
          <li className="list-none">
            <a className="!text-[#737373] !no-underline !font-bold" href="">
              Blog
            </a>
          </li>
          <li className="list-none">
            <a
              className="!text-[#737373] !no-underline !font-bold"
              href="/contact"
            >
              Contact
            </a>
          </li>
          <li className="list-none">
            <a
              className="!text-[#737373] !no-underline !font-bold"
              href="/team"
            >
              Team
            </a>
          </li>
        </nav>
        <div className="flex gap-8">
          <Search className="lg:hidden" />
          <ShoppingCart className="lg:hidden" />
          <MenuIcon className="lg:hidden" onClick={() => setMenu(!menu)} />
          <div className="hidden lg:flex lg:gap-1 lg:items-center">
            {!isContactpage && (
              <img className="hidden lg:block lg:w-5" src={user} alt="" />
            )}
            <a className="m-0 !no-underline !font-bold !text-[#23A6F0]" href="">
              Login
            </a>
            {isContactpage ? (
              <button className="!ml-10 w-[214px] !px-4 !py-4 !rounded-[5px] !text-white bg-[#23A6F0] !text-[14px] flex gap-4 items-center justify-center">
                Become a member
                <MoveRight className="w-4 !font-bold" />
              </button>
            ) : (
              <div>
                <span>/</span>
                <a className="!no-underline !font-bold !text-[#23A6F0]" href="">
                  Register
                </a>
              </div>
            )}
          </div>
          {!isContactpage && (
            <div className="hidden lg:flex lg:gap-3 lg:items-center lg:justify-center">
              <img src={search} alt="" />
              <div className="hidden lg:flex lg:gap-1">
                <img src={basket} alt="" />
                <label className="text-[#23A6F0]" htmlFor="">
                  1
                </label>
              </div>

              <div className="hidden lg:flex lg:gap-1">
                <img src={like} alt="" />
                <label className="text-[#23A6F0]" htmlFor="">
                  1
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
      {menu && (
        <div className="flex flex-col items-center gap-4 mt-16 mb-10">
          <a
            className="font-montserrat text-xl !no-underline !text-[#737373]"
            href="/"
          >
            Home
          </a>
          <a
            className="font-montserrat text-xl !no-underline !text-[#737373]"
            href="/shop"
          >
            Shop
          </a>
          <a
            className="font-montserrat text-xl !no-underline !text-[#737373]"
            href="/about"
          >
            About
          </a>
          <a className="font-montserrat text-xl !no-underline !text-[#737373]">
            Blog
          </a>
          <a
            className="font-montserrat text-xl !no-underline !text-[#737373]"
            href="/contact"
          >
            Contact
          </a>
          <a
            className="font-montserrat text-xl !no-underline !text-[#737373]"
            href="/team"
          >
            Team
          </a>

          <div className=" flex gap-1 items-center">
            <img className="block w-5" src={user} alt="" />
            <a
              className="!m-0 !no-underline !font-semibold !text-[#23A6F0] !text-2xl"
              href=""
            >
              Login
            </a>
            <span>/</span>
            <a
              className="!no-underline !font-semibold !text-[#23A6F0] !text-2xl !m-0"
              href=""
            >
              Register
            </a>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="w-20 mr-3" src={search} alt="" />
            <div className="flex flex-col gap-4">
              <div className="flex gap-1">
                <img className="w-7" src={basket} alt="" />
                <label className="text-[#23A6F0]" htmlFor="">
                  1
                </label>
              </div>

              <div className="flex gap-1">
                <img className="w-7" src={like} alt="" />
                <label className="text-[#23A6F0]" htmlFor="">
                  1
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* w-full: Bu div'in genişliğini ekranın tamamına yayar.
      max-w-3xl: Ekranın belirli bir genişlik sınırına ulaşmasını sağlar (bu sınıfla 3xl boyutunu belirliyoruz).
      mx-auto: Ekranda yatayda ortalamak için kullanılır.
      overflow-hidden: Yalnızca bir slayt görünmesini sağlar, diğer slaytlar kaybolur.
      rounded-lg: Kenarları yuvarlar.
      shadow-lg: Kutunun etrafına gölge ekler. */}
      {isHomePage && (
        <div className="relative w-full max-w-3xl lg:max-w-screen mx-auto overflow-hidden shadow-lg">
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
                <picture>
                  <source
                    srcSet={item.srcDesktop}
                    media="(min-width: 1024px)"
                  />
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="lg:w-screen h-full lg:object-fill"
                  />
                </picture>
                {/* <img src={item.src} alt={item.alt} className="w-full h-full lg:w-screen lg:h-screen" /> */}
                <label
                  className="absolute bottom-45 left-30 text-white text-2xl font-bold 
              lg:text-7xl lg:bottom-130 lg:left-0 lg:translate-x-[33rem] "
                >
                  {item.caption}
                </label>
                <label
                  className="absolute bottom-37 left-30 text-white text-2xl font-bold 
              lg:text-7xl lg:bottom-130 lg:left-0 lg:translate-x-[58rem]"
                >
                  {item.caption2}
                </label>
                {/* <label className="lg:hidden absolute bottom-20 left-24 text-white w-1/2 ">
                {window.innerWidth <= 1024 ? item.text : ""}
              </label> */}
                <label
                  className="hidden absolute bottom-20 left-24 text-white w-1/2 
              lg:text-3xl lg:bottom-105 lg:translate-x-[35.75rem] lg:left-0 lg:text-center lg:w-[34%]"
                >
                  {isMobile
                    ? item.text
                    : item.text + " just do not act that way."}
                </label>
                <button
                  className="absolute bottom-8 left-32 px-3 py-2 bg-blue-400 font-bold text-white
              lg:bottom-80 lg:left-0 lg:translate-x-[50rem] lg:!px-14 lg:!py-4 lg:!rounded-[5px]"
                >
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
      )}
    </header>
  );
}
