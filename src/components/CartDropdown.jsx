import { useSelector } from "react-redux";

export default function CartDropdown() {
  console.log("CartDropdown Rendered");
  const cart = useSelector((state) => state.shoppingCart.cart);
  console.log("Cart Items:", cart);

  return (
    <div className="lg:w-80 lg:h-96  lg:absolute lg:z-10 lg:mt-10 lg:right-60 lg:rounded-lg lg:bg-white lg:shadow-2xl">
      <p className="lg:text-black lg:px-4 lg:font-medium">
        Basket ({cart.length} {cart.length > 1 ? "items" : "item"})
      </p>
      <div className="lg:h-72 lg:overflow-y-auto">
        {cart.length === 0 ? (
          <p className="lg:text-black lg:px-4 lg:font-bold lg:text-2xl ">
            Your basket is empty.
          </p>
        ) : (
          cart.map((item, index) => (
            <section key={index} className="lg:flex lg:flex-col">
              <div className="lg:flex lg:gap-4 lg:px-4">
                <img
                  className="lg:w-24 lg:h-24 lg:rounded-2xl lg:shadow-md lg:border-gray-200 lg:border-1"
                  src={item.product.images[0].url}
                  alt=""
                />
                <div className="lg:flex lg:flex-col lg:justify-between">
                  <span className="lg:text-black lg:text-sm lg:mb-0 mb-2 lg:line-clamp-3">
                    <span className="lg:font-bold lg:m-0 lg:p-0 lg:text-sm">
                      {item.product.name}
                    </span>{" "}
                    {item.product.description}
                  </span>
                  <span className="lg:text-gray-500 lg:text-sm lg:m-0 lg:p-0">
                    Quantity: {item.count}{" "}
                    <span className="lg:text-orange-400 lg:text-sm">
                      Price: {item.product.price} ₺
                    </span>
                  </span>
                </div>
              </div>
              <div className="lg:border-1 lg:w-full lg:text-[#E0E0E0] lg:my-4"></div>
            </section>
          ))
        )}
      </div>
      <div className="lg:flex lg:gap-4 lg:px-4 lg:flex-1">
        <button className="lg:bg-gray-300 lg:text-black lg:w-full lg:h-12 lg:!rounded-lg">
          View Cart
        </button>
        <button className="lg:font-bold lg:bg-orange-400 lg:text-white lg:w-full lg:h-12 !rounded-lg">
          Checkout
        </button>
      </div>
    </div>
  );
}
