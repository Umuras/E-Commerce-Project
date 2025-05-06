import { use, useEffect, useState } from "react";
import {
  basketCircle,
  bestSellerProducts2,
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
import {
  Link,
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../store/actions/productAction";

export function ProductDetailPage({ setIsHomePage, isMobile }) {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const history = useHistory();

  useEffect(() => {
    setIsHomePage(false);
  }, []);

  useEffect(() => {
    console.log("Merhaba");
    dispatch(getProductById(productId));
  }, [dispatch, productId]);

  const { selectedProduct } = useSelector((state) => state.product);

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % 1);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + 1) % 1);
  };

  if (!selectedProduct || Object.keys(selectedProduct).length === 0) {
    console.log(selectedProduct);
    return (
      <div className="flex flex-col items-center justify-center w-full h-[300px]">
        <div className="inline-block lg:inline-block ml-4 w-20 h-20 border-2 border-[#23A6F0] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const { name, price, description, images } = selectedProduct;

  return (
    <section className="bg-[#FAFAFA] flex flex-col ">
      <div className="flex items-center justify-center lg:justify-start lg:ml-60 gap-2">
        <button
          className="bg-[#23A6F0] !rounded-sm text-white font-bold py-2.5 px-4 lg:!mt-4"
          onClick={() => history.goBack()}
        >
          Back Previous Page
        </button>
      </div>
      <div className="flex items-center justify-center lg:justify-start lg:ml-60 gap-2 mt-4">
        <Link
          className="font-bold text-center !text-[#252B42] !no-underline cursor-pointer"
          to="/"
        >
          Home
        </Link>
        <img className="w-1.5 text-[#737373]" src={rightIconBlue} alt="" />
        <Link
          className=" font-bold text-center !text-[#737373] !no-underline cursor-pointer"
          to="/shop"
        >
          Shop
        </Link>
      </div>

      <section className="lg:flex gap-4">
        <div className="lg:flex lg:flex-col">
          <div className="relative lg:max-w-screen mx-auto lg:!ml-60 lg:w-[506px] lg:h-[405px] lg:!mx-0 overflow-hidden shadow-lg w-[348px] h-[277px] mt-24 lg:!mt-8 mb-10">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              <div className="relative flex-shrink-0 w-fit">
                <img
                  src={images[0].url}
                  alt=""
                  className="lg:w-screen lg:object-full w-[348px] h-[277px] lg:h-[405px]"
                />
              </div>
            </div>

            {/* OK butonları */}
            <button
              onClick={prevSlide}
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
          <div className="flex gap-4 items-center justify-start ml-4 mb-10 lg:!ml-60">
            {Array.from({ length: 1 }, (_, index) => {
              return (
                <section key={index}>
                  <div
                    className={`border-4  cursor-pointer ${
                      current === index ? "shadow-xl shadow-amber-800" : ""
                    }`}
                    onClick={() => setCurrent(index)}
                  >
                    <img className="w-24 h-16" src={images[0].url} alt="" />
                  </div>
                </section>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-start justify-start ml-8 w-[74%] mb-10 lg:!mt-14">
          <h4 className="!text-[20px] !text-[#252B42]">{name}</h4>
          <div className="flex items-center justify-center gap-8 mt-2 mb-4">
            <img src={stars} alt="" />
            <h6 className="!text-[18px] !font-bold !text-[#737373] m-0">
              10 Reviews
            </h6>
          </div>
          <h3 className="!text-[#252B42] !font-bold text-[24px]">{price}₺</h3>
          <div className="flex gap-2">
            <h6 className="!text-[#737373] !text-[20px]">Availability : </h6>
            <h6 className="!text-[#23A6F0] !text-[20px]">In Stock</h6>
          </div>
          <p className="!text-[14px] !text-[#858585] my-4 !font-bold w-[220px] text-left lg:w-[464px]">
            {description}
          </p>
          <div className="border-1 w-full text-[#BDBDBD] lg:w-[464px]"></div>
          <div className="flex gap-2 mt-10">
            <button className="!rounded-[4px] !bg-[#23A6F0] !text-white py-2 px-3 !font-bold !text-[14px]">
              Sepete Ekle
            </button>
            <img src={likeCircle} alt="" />
            <img src={basketCircle} alt="" />
            <img src={moreCircle} alt="" />
          </div>
        </div>
      </section>

      <section className="bg-white pt-4">
        <section className="flex flex-col items-start justify-start  lg:!ml-0  ml-8 w-[88%] mb-10 lg:w-full ">
          <nav className="flex gap-2 lg:justify-center lg:w-full lg:!gap-20">
            <li className="list-none">
              <a
                className="!text-[#737373] !text-[14px] !font-bold lg:!no-underline "
                href="#"
              >
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
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10 lg:justify-center lg:mx-0  lg:w-[80%] items-start justify-start mt-4">
            <img
              className="my-5 lg:!mt-18 lg:w-[400px]"
              src={cardItemPhoto}
              alt=""
            />
            <div className="flex flex-col lg:w-[20%] ">
              <h3 className="!mb-10 !font-bold !text-[24px] !text-[#252B42] lg:!mt-14">
                the quick fox jumps over
              </h3>
              <div className="lg:flex lg:flex-col lg:w-[100%]">
                <h6 className="!text-[14px] !text-[#737373] !font-semibold mb-4 w-[90%]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </h6>
                <h6 className="!text-[14px] !text-[#737373] !font-semibold mb-4 w-[90%]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </h6>
                <h6 className="!text-[14px] !text-[#737373] !font-semibold mb-4 w-[90%]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </h6>
              </div>
            </div>

            <div className="flex flex-col">
              {Array.from({ length: 2 }).map((_, index) => {
                return (
                  <section key={index}>
                    <h3 className="!mb-6 !font-bold !text-[24px] !text-[#252B42] !mt-4 ">
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
          {!isMobile && (
            <div className="lg:flex lg:gap-10">
              {bestSellerProducts2.map((item, index) => {
                return (
                  <div key={index}>
                    <img className="mb-4 lg:w-[239px]" src={item.src} alt="" />
                    <div className="flex flex-col gap-2.5 ml-4 lg:items-start">
                      <h5 className="!font-bold !text-[16px] !text-[#252B42]">
                        {item.firstText}
                      </h5>
                      <h5 className="!font-bold !text-[14px] !text-[#737373]">
                        {item.secondText}
                      </h5>
                    </div>

                    <div className="flex gap-2 ml-6 mt-2.5 mb-16 lg:items-start lg:justify-start">
                      <h5 className="font-bold !text-[16px] !text-[#BDBDBD]">
                        {item.firstPrice}
                      </h5>
                      <h5 className="font-bold !text-[16px] !text-[#23856D]">
                        {item.secondPrice}
                      </h5>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <Clients />
        </div>
      </section>
    </section>
  );
}
