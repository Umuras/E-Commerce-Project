import { useEffect } from "react";
import {
  blogCardItems,
  cardItemPhoto,
  hamburgerProductPhoto,
  headerFoodPhoto,
} from "../dummyData";
import { BlogCard } from "../components/BlogCard";

export function BlogPage({ setIsHomePage }) {
  useEffect(() => {
    setIsHomePage(false);
  });
  return (
    <section className="flex flex-col pb-20 bg-[#FAFAFA] pt-5">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="!text-[40px] !font-bold !text-[#252B42] !text-center !mb-8">
          It's Burger Time!
        </h1>
        <img src={hamburgerProductPhoto} alt="" />

        <div className="flex flex-col w-[80%] py-10">
          <h4 className="!text-[20px] !font-bold !text-[#737373] !text-start !mb-8">
            In today’s post, I’ll be sharing how to make a delicious burger.
          </h4>
          <p className="!text-[16px] !font-bold !text-[#252B42]">
            📝 First, the required ingredients:
          </p>
          <li className="!text-[16px] !font-bold !text-[#737373]">
            300 g ground beef (rib cut)
          </li>
          <li className="!text-[16px] !font-bold !text-[#737373]">Lettuce</li>
          <li className="!text-[16px] !font-bold !text-[#737373]">
            Cheddar cheese
          </li>
          <li className="!text-[16px] !font-bold !text-[#737373]">
            Pickled cucumbers
          </li>
          <li className="!text-[16px] !font-bold !text-[#737373]">
            Special hamburger buns
          </li>
          <li className="!text-[16px] !font-bold !text-[#737373]">
            Ketchup, Mayonnaise
          </li>
        </div>

        <div className="flex flex-col w-[80%]">
          <h1>👩‍🍳 Preparation:</h1>
          <p className="!text-[16px] !font-bold !text-[#737373]">
            <span className="!text-[16px] !font-bold !text-[#252B42] block">
              1. Prepare the Meat:
            </span>{" "}
            Place the ground beef in a bowl. Optionally, add some salt and black
            pepper. You can cook it without seasoning too since rib meat is
            fatty and flavorful. Divide it into two equal portions and form
            burger patties without overmixing.
          </p>
          <p className="!text-[16px] !font-bold !text-[#737373]">
            <span className="!text-[16px] !font-bold !text-[#252B42] block">
              2. Cook the Patties:
            </span>{" "}
            Heat the pan thoroughly. No need to add oil — the beef’s fat is
            enough. Cook each side for 3–4 minutes on high heat, then flip and
            immediately place a slice of cheddar so it melts.
          </p>
          <p className="!text-[16px] !font-bold !text-[#737373]">
            <span className="!text-[16px] !font-bold !text-[#252B42] block">
              3. Toast the Buns:
            </span>{" "}
            Cut the hamburger buns in half. Toast the inner sides in a pan with
            a little butter — this makes them crispy and helps prevent
            sogginess.
          </p>
          <p className="!text-[16px] !font-bold !text-[#737373]">
            <span className="!text-[16px] !font-bold !text-[#252B42] block">
              4. Assemble the Burger:
            </span>{" "}
            Bottom bun → a leaf of lettuce → patty + melted cheddar → pickled
            cucumber slices → ketchup + mayo → top bun. Optionally, add another
            layer of lettuce for extra freshness.
          </p>
          <p className="!text-[16px] !font-bold !text-[#737373]">
            <span className="!text-[16px] !font-bold !text-[#252B42] block">
              5. Serve It Up:
            </span>{" "}
            Serve with fries or a cold drink on the side. And... Enjoy! 😋
          </p>
        </div>
      </div>
    </section>
  );
}
