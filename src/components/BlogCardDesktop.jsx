import {
  blogPhotoFirst,
  clockIcon,
  graphIcon,
  rightIconBlue,
} from "../dummyData";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export function BlogCardDesktop(props) {
  const { blogCardItems } = props;

  const history = useHistory();

  const moveToBlogPage = () => {
    history.push("/blog");
  };

  return (
    <section className="bg-white flex flex-col items-center justify-center pb-10">
      <div className="flex flex-col justify-center items-center mb-20">
        <h6 className="!font-bold !text-[14px] !text-[#23A6F0]">
          Practice Advice
        </h6>
        <h2 className="!font-bold !text-[2.5rem]  text-center text-[#252B42]">
          Featured Posts
        </h2>
      </div>
      <div className="flex gap-2 ">
        {blogCardItems.map((item, index) => {
          return (
            <section
              className="w-[348px] h-[606px] shadow cursor-pointer"
              key={index}
              onClick={moveToBlogPage}
            >
              <div className="relative flex flex-col">
                <img className="" src={item.src} alt="" />
                <button className="absolute bg-[#E74040] top-5 left-5 !rounded-[3px] px-2.5 text-white">
                  NEW
                </button>
              </div>

              <div className="flex flex-col  justify-center mt-4 ml-8  w-[75%] ">
                <div className="flex gap-4">
                  <label className="text-sm text-[#8EC2F2]" htmlFor="">
                    Google
                  </label>
                  <label className="text-sm text-[#737373]" htmlFor="">
                    Trending
                  </label>
                  <label className="text-sm text-[#737373]" htmlFor="">
                    New
                  </label>
                </div>

                <h4 className="mt-1 !text-[20px] !leading-7 ">
                  Loudest à la Madison #1 (L'integral)
                </h4>

                <p className="!text-[14px] !leading-5 text-[#737373] w-[90%]">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>

                <div className="flex justify-between mt-3 mr-3">
                  <div className="flex gap-2">
                    <img className="w-4 h-4" src={item.clockIcon} alt="" />
                    <label className="text-[12px] text-[#737373]" htmlFor="">
                      22 April 2021
                    </label>
                  </div>

                  <div className="flex gap-2">
                    <img className="w-4 h-4" src={item.graphIcon} alt="" />
                    <label className="text-[12px] text-[#737373]" htmlFor="">
                      10 comments
                    </label>
                  </div>
                </div>
                <div className="flex gap-2 items-center mt-4 mb-15">
                  <h6
                    className="!font-bold !text-[14px] m-0 !text-[#737373]"
                    htmlFor=""
                  >
                    Learn More
                  </h6>
                  <img className="w-3 h-3" src={item.rightIconBlue} alt="" />
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
