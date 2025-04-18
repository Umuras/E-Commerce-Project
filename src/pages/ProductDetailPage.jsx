import { use, useEffect, useState } from "react";
import {
  basketCircle,
  cardItemPhoto,
  items,
  likeCircle,
  moreCircle,
  productDetailsItems,
  rightIconBlue,
  stars,
} from "../dummyData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FourthProductCard } from "../components/FourthProductCard";
import { Clients } from "../components/Clients";

export function ProductDetailPage({ setIsHomePage, isMobile }) {
  useEffect(() => {
    setIsHomePage(false);
  });

  const [menu, setMenu] = useState(false);
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section className="bg-[#FAFAFA] flex flex-col">
      <div className="flex items-center justify-center gap-2 mt-4">
        <a
          className="font-bold text-center !text-[#252B42] !no-underline cursor-pointer"
          href="/home"
        >
          Home
        </a>
        <img className="w-1.5 text-[#737373]" src={rightIconBlue} alt="" />
        <a
          className=" font-bold text-center !text-[#737373] !no-underline cursor-pointer"
          href="/shop"
        >
          Shop
        </a>
      </div>
      {/* w-full: Bu div'in genişliğini ekranın tamamına yayar.
      max-w-3xl: Ekranın belirli bir genişlik sınırına ulaşmasını sağlar (bu sınıfla 3xl boyutunu belirliyoruz).
      mx-auto: Ekranda yatayda ortalamak için kullanılır.
      overflow-hidden: Yalnızca bir slayt görünmesini sağlar, diğer slaytlar kaybolur.
      rounded-lg: Kenarları yuvarlar.
      shadow-lg: Kutunun etrafına gölge ekler. */}
      <div className="relative lg:max-w-screen mx-auto overflow-hidden shadow-lg w-[348px] h-[277px] mt-24 mb-10">
        {/* flex: Slaytları yatayda sıralar.
      transition-transform duration-500: 500ms süresince geçiş animasyonu ekler.
      style={{ transform: translateX(-${current * 100}%) }}: Bu satır, current state'ine bağlı olarak slaytları yatayda kaydırır. 
      current değeri 0 ise, ilk slayt görünür.
      current değeri 1 ise, ikinci slayt görünür. Yani her current değerinde slaytlar 100% kayar.*/}
        <div
          className="flex transition-transform duration-500  "
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {productDetailsItems.map((item, index) => (
            //flex-shrink-0 için
            //     Bu sınıf, bu div'in küçülmesini engeller (flexbox konteyner içindeyse).
            //     Eğer parent’ı bir flex container ise, diğer elemanlar daralırken bu daralmaz.
            //     Özellikle bir carousel veya yatay scroll alanında kullanılır.
            // 📦 Örnek: Resim slider’ı düşün → tüm slide’ların genişliği sabit kalsın diye kullanılır.
            //w-full ile parent ne kadar genişse, bu div de o kadar geniş olur.
            <div key={index} className="relative flex-shrink-0 w-fit">
              <picture>
                <source srcSet={item.srcDesktop} media="(min-width: 1024px)" />
                <img
                  src={item.src}
                  alt={item.alt}
                  className="lg:w-screen lg:object-fill w-[348px] h-[277px]"
                />
              </picture>
              {/* <img src={item.src} alt={item.alt} className="w-full h-full lg:w-screen lg:h-screen" /> */}
            </div>
          ))}
        </div>

        {/* OK butonları */}
        <button
          onClick={prevSlide}
          //top-1/2, parent elementin yüksekliğinin yarısı kadar yukarıdan konumlandırır.
          //-translate-y-1/2 Elemanı kendi yüksekliğinin yarısı kadar yukarı kaydırır
          className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white p-4 rounded-full"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2  text-white p-4 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>
      <div className="flex gap-4 items-center justify-start ml-4 mb-10">
        {productDetailsItems.map((item, index) => {
          return (
            <section key={index}>
              <div
                className={`border-4  cursor-pointer ${
                  current === index ? "shadow-xl shadow-amber-800" : ""
                }`}
                onClick={() => setCurrent(index)}
              >
                <img className="w-24 h-16" src={item.src} alt="" />
              </div>
            </section>
          );
        })}
      </div>

      <div className="flex flex-col items-start justify-start ml-8 w-[74%] mb-10">
        <h4 className="!text-[20px] !text-[#252B42]">Hamburger</h4>
        <div className="flex items-center justify-center gap-8 mt-2 mb-4">
          <img src={stars} alt="" />
          <h6 className="!text-[18px] !font-bold !text-[#737373] m-0">
            10 Reviews
          </h6>
        </div>
        <h3 className="!text-[#252B42] !font-bold text-[24px]">$15</h3>
        <div className="flex gap-2">
          <h6 className="!text-[#737373] !text-[20px]">Availability : </h6>
          <h6 className="!text-[#23A6F0] !text-[20px]">In Stock</h6>
        </div>
        <p className="!text-[14px] !text-[#858585] my-4 !font-bold w-[220px] text-left">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
        <div className="border-1 w-full text-[#BDBDBD]"></div>
        <div className="flex gap-2 mt-10">
          <button className="!rounded-[4px] !bg-[#23A6F0] !text-white py-2 px-3 !font-bold !text-[14px]">
            Select Options
          </button>
          <img src={likeCircle} alt="" />
          <img src={basketCircle} alt="" />
          <img src={moreCircle} alt="" />
        </div>
      </div>

      <section className="bg-white pt-4">
        <section className="flex flex-col items-start justify-start ml-8 w-[88%] mb-10">
          <nav className="flex gap-2">
            <li className="list-none">
              <a className="!text-[#737373] !text-[14px] !font-bold " href="#">
                Description
              </a>
            </li>
            <li className="list-none">
              <a
                className="!text-[#737373] !text-[14px] !font-bold !no-underline "
                href="#"
              >
                Additional Information
              </a>
            </li>
            <li className="list-none">
              <a
                className="!text-[#737373] !text-[14px] !font-bold !no-underline "
                href="#"
              >
                Reviews (0)
              </a>
            </li>
          </nav>
          <div className="flex flex-col items-start justify-start mt-4">
            <img className="my-5" src={cardItemPhoto} alt="" />
            <div className="flex flex-col">
              <h3 className="!mb-10 !font-bold !text-[24px] !text-[#252B42]">
                the quick fox jumps over
              </h3>
              <h6 className="!text-[14px] !text-[#737373] !font-semibold mb-4 w-[90%]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met. <br /> <br />
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met. <br /> <br /> Met
                minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                RELIT official consequent door ENIM RELIT Mollie. Excitation
                venial consequent sent nostrum met.
              </h6>
            </div>

            <div className="flex flex-col">
              {Array.from({ length: 2 }).map((_, index) => {
                return (
                  <section key={index}>
                    <h3 className="!mb-6 !font-bold !text-[24px] !text-[#252B42] !mt-4">
                      the quick fox jumps over
                    </h3>
                    <div className="flex flex-col gap-3 items-center justify-center ">
                      {Array.from({ length: 4 }).map((_, index) => {
                        return (
                          <div
                            key={index}
                            className="flex  items-center justify-center gap-2"
                          >
                            <img
                              className="text-[#737373]"
                              src={rightIconBlue}
                              alt=""
                            />

                            <h6 className="!text-[14px] !text-[#737373] !font-bold m-0 ">
                              the quick fox jumps over the lazy dog
                            </h6>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </section>
      </section>

      <section>
        <div className="flex flex-col items-center justify-center">
          <FourthProductCard />
          <Clients />
        </div>
      </section>
    </section>
  );
}
