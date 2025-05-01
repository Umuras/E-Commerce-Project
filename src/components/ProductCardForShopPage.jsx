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
  const { productList } = useSelector((state) => state.product);
  console.log("Product List:", productList);

  const handleAddToCart = () => {
    const token = localStorage.getItem("token");
    if (token || Object.keys(user).length > 0) {
      console.log("Sepete Ekle");
    } else {
      toast.error("Lütfen giriş yapın");
      history.push("/login"); // Navigate to the login page
    }
  };
  const productNumber = isMobile ? 4 : 12;
  if (!productList || productList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-[300px]">
        <div className="inline-block lg:inline-block ml-4 w-20 h-20 border-2 border-[#23A6F0] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-white flex flex-col lg:flex-row items-center lg:flex-wrap lg:w-[77%]">
        {productList.slice(0, productNumber).map((item, index) => {
          return (
            <div
              key={index}
              className="cursor-pointer lg:m-2 lg:w-[350px]  shadow-sm shadow-gray-200 border-gray-400 "
            >
              <section
                className="lg:flex lg:flex-col lg:w-full lg:h-[488px] lg:items-center lg:justify-center mt-4"
                onClick={handleCardClick}
              >
                <img
                  className="lg:w-[400px] lg:object-fill lg:h-[300px]"
                  src={item.images[0].url}
                  alt=""
                />
                <div className="flex flex-col items-center justify-center lg:w-[100%] m-auto p-0">
                  <h5 className="!font-bold !text-lg !text-[#252B42]">
                    {item.name}
                  </h5>
                  <label className="font-bold text-[14px] text-[#737373] lg:w-[100%] lg:text-center">
                    {item.description}
                  </label>
                </div>

                <div className="flex gap-2 items-center justify-center mt-2.5 lg:w-[80%]">
                  <h5 className="font-bold !text-[14px] !text-[#23856D]">
                    Price: {item.price} ₺
                  </h5>
                  <h5 className="font-bold !text-[14px] !text-[#23856D]">
                    Stock: {item.stock}
                  </h5>
                  <h5 className="font-bold !text-[14px] !text-[#23856D]">
                    Rating: {item.rating}
                  </h5>
                </div>
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
