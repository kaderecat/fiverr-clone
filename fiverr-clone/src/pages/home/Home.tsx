import Featured from "../../components/Featured";
import TrustedBy from "../../components/TrustedBy";
import Slide from "../../components/Slide";
import { cards } from "../../data.ts";
import CatCard from "../../components/CatCard";
import { Card } from "../../types/Card.js";
import { projects } from "../../data.ts";
import { Project } from "../../types/Projects.js";
import ProjectCard from "../../components/ProjectCard.tsx";

const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slide arrowsScroll={4} slidesToShow={4}>
        {cards.map((items: Card) => (
          <CatCard cards={items} key={items.id} />
        ))}
      </Slide>
      <div className="flex justify-center bg-gray-50 pb-[100px]">
        <div className="w-[1200px] flex">
          <div className="w-[50%] px-10">
            <h1 className="text-3xl font-bold mb-4">
              A whole world of freelance talent at your fingertips
            </h1>
            <div>
              <div className="flex justify-start items-center gap-2 my-2">
                <img className="w-6" src="../../../public/check.png" alt="" />
                <span className="font-bold text-gray-500">
                  The best for every budget
                </span>
              </div>
              <p className="text-lg text-gray-400">
                Find high-quality services at evey price point.No hourly rates,
                just project-based pricing.
              </p>
            </div>
            <div>
              <div className="flex justify-start items-center gap-2 my-2">
                <img className="w-6" src="../../../public/check.png" alt="" />
                <span className="font-bold text-gray-500">
                  Quality work done quickly
                </span>
              </div>
              <p className="text-lg text-gray-400">
                Find the right freelancer to begin working on your project
                within minutes.
              </p>
            </div>
            <div>
              <div className="flex justify-start items-center gap-2 my-2">
                <img className="w-6" src="../../../public/check.png" alt="" />
                <span className="font-bold text-gray-500">
                  Protected payments, every time
                </span>
              </div>
              <p className="text-lg text-gray-400 ">
                Always know what you'll pay upfront. Your payment isn't released
                until you approve the work.
              </p>
            </div>
            <div>
              <div className="flex justify-start items-center gap-2 my-2">
                <img className="w-6" src="../../../public/check.png" alt="" />
                <span className="font-bold text-gray-500">24/7 support</span>
              </div>
              <p className="text-lg text-gray-400">
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </p>
            </div>
          </div>
          <div className="w-[50%] flex flex-col justify-center items-center">
            <video src="../../../public/video.mp4" controls></video>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#0d084d] text-white rounded-lg">
        <div className="w-[1200px] flex py-[100px]">
          <div className="w-[50%] ">
            <h1 className="text-[35px] font-bold mb-4">
              fiverr<span className="text-green-600">.</span>
              <span className="text-[24px] font-light">Business Solutions</span>
            </h1>
            <h1 className="text-[35px] font-semibold mb-4">
              Advanced solutions and professional talent for businesses
            </h1>
            <div className="flex justify-start items-center gap-4">
              <img
                className="w-[30px] h-[30px]"
                src="../../../public/greencheck.png"
                alt=""
              />
              <div className="flex flex-col gap-2 my-2">
                <span className="font-bold">Fiverr Pro</span>
                <p className="text-lg ">
                  Access top freelancers and professional business tools for any
                  project
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-4">
              <img
                className="w-[30px] h-[30px]"
                src="../../../public/greencheck.png"
                alt=""
              />
              <div className="flex flex-col gap-2 my-2">
                <span className="font-bold">Fiverr Certified</span>
                <p className="text-lg ">
                  Build your own branded marketplace of certified experts
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-4">
              <img
                className="w-[30px] h-[30px]"
                src="../../../public/greencheck.png"
                alt=""
              />
              <div className="flex flex-col gap-2 my-2">
                <span className="font-bold">Fiverr Enterprise</span>
                <p className="text-lg ">
                  Manage your freelance workforce and onboard additional talent
                  with an end-to-end SaaS solution
                </p>
              </div>
            </div>
            <button className="bg-white text-gray-500 p-2 rounded-md mt-3 text-center font-bold hover:text-gray-700">
              Learn more
            </button>
          </div>
          <div className="w-[50%] flex flex-col justify-center items-center p-5">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[100px]">
        <div className="w-[1200px] flex justify-start">
          <h1 className="font-semibold text-gray-800 text-3xl">
            Inspiring work made on Fiverr
          </h1>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((items: Project) => (
          <ProjectCard projects={items} key={items.id} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
