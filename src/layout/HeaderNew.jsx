import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  basket,
  downArrow,
  items,
  like,
  search,
  userPhoto,
} from "../dummyData";
import {
  Search,
  ShoppingCart,
  MenuIcon,
  ChevronLeft,
  ChevronRight,
  MoveRight,
  PanelBottomIcon,
} from "lucide-react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import {
  Link,
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom";
import Gravatar from "react-gravatar";
import { useDispatch, useSelector } from "react-redux";
import { set } from "react-hook-form";
import { setUser } from "../store/actions/clientAction";
import CartDropdown from "../components/CartDropdown";

export function HeaderNew({
  isMobile,
  isHomePage,
  isContactpage,
  setIsContactPage,
}) {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  function goToSignup() {
    history.push("/signup", { state: { from: location.pathname } });
  }

  const [menu, setMenu] = useState(false);
  const [current, setCurrent] = useState(0);
  const [loginLayout, setLoginLayout] = useState(false);
  const [shopDropdown, setShopDropdown] = useState(false);
  const [cartDropdown, setCartDropdown] = useState(false);

  const { user } = useSelector((state) => state.client);
  //console.log("user", user);
  const { categories } = useSelector((state) => state.product);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  };

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(setUser({}));
    setLoginLayout(false);
  };

  return (
    <header>
      <div className="flex justify-between mx-8 mt-8 items-center lg:mx-60  mb-7">
        <label className="text-xl font-bold">Bandage</label>
        <nav className="hidden lg:flex gap-6 lg:items-center lg:justify-center ">
          <li className="list-none">
            <Link className="!text-[#737373] !no-underline !font-bold" to="/">
              Home
            </Link>
          </li>
          <li className="list-none">
            <div className="flex gap-2 items-center justify-center relative">
              <Link className="!text-[#252B42] !no-underline" to="/shop">
                Shop
              </Link>
              <img
                src={downArrow}
                className="!text-black cursor-pointer"
                alt=""
                onClick={() => setShopDropdown(!shopDropdown)}
              />
            </div>

            {shopDropdown && (
              <div className="lg:absolute hidden lg:block lg:bg-[#FAFAFA] lg:text-black lg:w-[396px]  mt-2 pb-2 lg:z-10">
                <div className="lg:flex ml-8">
                  <div className="flex flex-col gap-4 items-start justify-start w-full h-full mt-1.5">
                    <Link className="!no-underline !font-bold !text-[#252B42]">
                      Kadın
                    </Link>
                    {Array.from({ length: 8 }, (_, index) => {
                      return (
                        <Link
                          key={index}
                          className="!no-underline !font-bold !text-[#737373]"
                          to={`/shop/${categories[index]?.gender}/${categories[index]?.code}/${categories[index]?.id}`}
                        >
                          {categories[index]?.title}
                        </Link>
                      );
                    })}
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-center w-full h-full mt-1.5">
                    <Link className="!no-underline !font-bold !text-[#252B42]">
                      Erkek
                    </Link>
                    {/*Bu şekilde categoriesin ilk 8 elemanını alıp onları map ile dönüyoruz*/}
                    {categories.slice(8).map((item, index) => {
                      return (
                        <Link
                          key={index}
                          className="!no-underline !font-bold !text-[#737373]"
                          to={`/shop/${item.gender}/${item.code}/${item.id}`}
                        >
                          {item.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </li>
          <li className="list-none">
            <Link
              className="!text-[#737373] !no-underline !font-bold"
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="list-none">
            <Link
              className="!text-[#737373] !no-underline !font-bold"
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li className="list-none">
            <Link
              className="!text-[#737373] !no-underline !font-bold"
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li className="list-none">
            <Link
              className="!text-[#737373] !no-underline !font-bold"
              to="/team"
            >
              Team
            </Link>
          </li>
          <li className="list-none">
            <Link
              className="!text-[#737373] !no-underline !font-bold"
              to="/pricing"
            >
              Pricing
            </Link>
          </li>
        </nav>

        <div className="flex gap-4 lg:!gap-1 items-center justify-center">
          <div className="flex flex-col relative">
            {Object.keys(user).length !== 0 && (
              <Gravatar
                email={user.email}
                className="cursor-pointer rounded-3xl w-[50%] m-auto"
                onClick={() => setLoginLayout(!loginLayout)}
              />
            )}

            {loginLayout && (
              <div className="flex flex-col bg-gray-100 pr-4 absolute top-10 z-10">
                <ul>
                  <li className="list-none">
                    <h2
                      htmlFor=""
                      className="!font-bold !text-xs !text-[#737373] !mt-3"
                    >
                      {user.email}
                    </h2>
                  </li>
                  <li className="list-none">
                    <button
                      className="font-bold text-xs text-[#737373]"
                      onClick={() => logout()}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Search className="lg:hidden" />
          <ShoppingCart className="lg:hidden" />
          <MenuIcon className="lg:hidden" onClick={() => setMenu(!menu)} />
          {Object.keys(user).length === 0 && (
            <div className="hidden lg:flex lg:gap-1 lg:items-center">
              {!isContactpage && (
                <img
                  className="hidden lg:block lg:w-5"
                  src={userPhoto}
                  alt=""
                />
              )}
              <Link
                className="m-0 !no-underline !font-bold !text-[#23A6F0]"
                to="/login"
                state={{ from: location.pathname }}
              >
                Login
              </Link>
              {isContactpage ? (
                <button
                  className="!ml-10 w-[214px] !px-4 !py-4 !rounded-[5px] !text-white bg-[#23A6F0] !text-[14px] flex gap-4 items-center justify-center"
                  onClick={goToSignup}
                >
                  Become a member
                  <MoveRight className="w-4 !font-bold" />
                </button>
              ) : (
                <div>
                  <span>/</span>
                  <Link
                    className="!no-underline !font-bold !text-[#23A6F0]"
                    to="/signup"
                    state={{ from: location.pathname }}
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          )}
          {!isContactpage && (
            <div className="hidden lg:flex lg:gap-3 lg:items-center lg:justify-center">
              <img src={search} alt="" />
              <div className="hidden lg:flex lg:gap-1">
                <img
                  className="cursor-pointer"
                  src={basket}
                  alt=""
                  onClick={() => setCartDropdown(!cartDropdown)}
                />
                {cartDropdown && <CartDropdown />}

                <label className="text-[#23A6F0]" htmlFor=""></label>
              </div>

              <div className="hidden lg:flex lg:gap-1">
                <img src={like} alt="" />
                <label className="text-[#23A6F0]" htmlFor=""></label>
              </div>
            </div>
          )}
        </div>
      </div>
      {menu && (
        <div className="lg:hidden flex flex-col items-center gap-4 mt-16 mb-10">
          <Link
            className="font-montserrat text-xl !no-underline !text-[#737373]"
            to="/"
            onClick={() => {
              setMenu(false);
            }}
          >
            Home
          </Link>
          <Link
            className="font-montserrat text-xl !no-underline !text-[#737373]"
            to="/shop"
            onClick={() => {
              setMenu(false);
            }}
          >
            Shop
          </Link>
          <Link
            className="font-montserrat text-xl !no-underline !text-[#737373]"
            to="/about"
            onClick={() => {
              setMenu(false);
            }}
          >
            About
          </Link>
          <Link
            className="font-montserrat text-xl !no-underline !text-[#737373]"
            to="/blog"
            onClick={() => {
              setMenu(false);
            }}
          >
            Blog
          </Link>
          <Link
            className="font-montserrat text-xl !no-underline !text-[#737373]"
            to="/contact"
            onClick={() => {
              setMenu(false);
            }}
          >
            Contact
          </Link>
          <Link
            className="font-montserrat text-xl !no-underline !text-[#737373]"
            to="/team"
            onClick={() => {
              setMenu(false);
            }}
          >
            Team
          </Link>
          <Link
            className="font-montserrat text-xl !no-underline !text-[#737373]"
            to="/pricing"
            onClick={() => {
              setMenu(false);
            }}
          >
            Pricing
          </Link>

          {Object.keys(user).length === 0 && (
            <div className=" flex gap-1 items-center">
              <img className="block w-5" src={user} alt="" />
              <Link
                className="!m-0 !no-underline !font-semibold !text-[#23A6F0] !text-2xl"
                to={{ pathname: "/login", state: { from: location.pathname } }}
                onClick={() => {
                  setMenu(false);
                }}
              >
                Login
              </Link>
              <span>/</span>
              <Link
                className="!no-underline !font-semibold !text-[#23A6F0] !text-2xl !m-0"
                to={{ pathname: "/signup", state: { from: location.pathname } }}
                onClick={() => {
                  setMenu(false);
                }}
              >
                Register
              </Link>
            </div>
          )}
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
