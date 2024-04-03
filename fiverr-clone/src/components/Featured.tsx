import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`/gigs?search=${input}`);
  };

  return (
    <div className="flex justify-center bg-green-900 text-white h-[100vh]">
      <div className="w-[1200px] flex justify-center ">
        <div className="flex flex-col justify-center gap-3 ">
          <h1 className="text-5xl font-bold text-">
            Find the perfect <i className="font-thin">freelance</i> services for
            your business.
          </h1>
          <div className="flex justify-between bg-white rounded-md">
            <div className="flex w-[100%] m-2">
              <img className=" " src="../public/search.png" alt="" />
              <input
                className="outline-none border-none text-black w-[100%]"
                type="text"
                placeholder='Try "building mobile app"'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button
              onClick={handleSearch}
              className="border-none rounded-r-md w-[100px] h-[50px] bg-green-600 cursor-pointer "
            >
              Search
            </button>
          </div>
          <div className="flex justify-start items-center gap-2">
            <span>Popular:</span>
            <button className="border-2 rounded-xl px-2 py-[1px] cursor-pointer ">
              Web Design
            </button>
            <button className="border-2 rounded-xl px-2 py-[1px] cursor-pointer ">
              WordPress
            </button>
            <button className="border-2 rounded-xl px-2 py-[1px] cursor-pointer ">
              Logo Design
            </button>
            <button className="border-2 rounded-xl px-2 py-[1px] cursor-pointer ">
              AI Services
            </button>
          </div>
        </div>
        <div>
          <img src="../public/man.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
