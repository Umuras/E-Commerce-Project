import { toast } from "react-toastify";
import { bestSellerProducts, shopPageItemsForMobile } from "../dummyData";
import { Clients } from "./Clients";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useSelector } from "react-redux";

export function ProductCardForShopPage({ isMobile }) {
  const history = useHistory();
  const handleCardClick = () => {
    history.push("/product"); // Navigate to the product detail page
  };

  const { user } = useSelector((state) => state.client);

  const handleAddToCart = () => {
    const token = localStorage.getItem("token");
    if (token || Object.keys(user).length > 0) {
      console.log("Sepete Ekle");
    } else {
      toast.error("Lütfen giriş yapın");
      history.push("/login"); // Navigate to the login page
    }
  };

  return (
    <>
      <section className="bg-white flex flex-col lg:flex-row items-center">
        {shopPageItemsForMobile.map((item, index) => {
          return (
            <div
              key={index}
              className="cursor-pointer lg:m-2 shadow-sm shadow-gray-200 border-gray-400"
            >
              <section
                className="lg:flex lg:flex-col lg:items-center  mt-4"
                onClick={handleCardClick}
              >
                <img className="lg:w-[80%]" src={item.src} alt="" />
                <div className="flex flex-col items-center lg:w-[80%]">
                  <h5 className="!font-bold !text-lg !text-[#252B42]">
                    {item.firstText}
                  </h5>
                  <h5 className="!font-bold !text-lg !text-[#737373]">
                    {item.secondText}
                  </h5>
                </div>

                <div className="flex gap-2 items-center justify-center mt-2.5 lg:w-[80%]">
                  <h5 className="font-bold text-xl !text-[#BDBDBD]">
                    {item.firstPrice}
                  </h5>
                  <h5 className="font-bold text-xl !text-[#23856D]">
                    {item.secondPrice}
                  </h5>
                </div>
                <div className="flex flex-col"></div>
              </section>
              <button
                className="bg-blue-400 text-white text-lg font-bold rounded-lg px-4 py-2 w-full"
                onClick={handleAddToCart}
              >
                Sepete Ekle
              </button>
            </div>
          );
        })}
      </section>
    </>
  );
}
