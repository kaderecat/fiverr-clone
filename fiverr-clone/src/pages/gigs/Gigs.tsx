import { useState } from "react";
import GigCard from "../../components/GigCard";
import { gigs } from "../../data";

const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const handleSalesSort = () => {
    setSort('sales');
    setOpen(false)
  }

  const handleTimedSort = () => {
    setSort('createdAt');
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center my-[30px] ">
      <div className="w-[1200px]  flex flex-wrap gap-12">
        <div className="mt-10">
          <div className="text-gray-500 text-[12px] flex flex-col gap-2 mb-5">
            <span>FIVERR / GRAPHICS & DESIGN</span>
            <p className="text-black text-3xl font-bold">AI Artists</p>
            <p>
              Explore the boundaries of art and technology with Fiverr's AI
              artist
            </p>
          </div>
          <div className="w-[1200px] flex justify-between items-center">
            <div className="flex gap-2">
              <span>Budget</span>
              <input
                className="border-2 pl-2"
                type="text"
                placeholder="min"
                name=""
                id=""
              />
              <input
                className="border-2 pl-2"
                type="text"
                placeholder="max"
                name=""
                id=""
              />
              <button className="bg-green-600 text-white text-[12px] p-1 rounded-lg w-12 font-semibold">
                Apply
              </button>
            </div>
            <div className="flex">
              <div className="flex items-center gap-2">
                <span>Sort by</span>
                <span className="font-bold">
                  {sort === "sales" ? "Best Selling" : "Newest"}
                </span>
                <div className="relative">
                  <img
                    onClick={(handleOpen)}
                    className="w-5"
                    src="down.png"
                    alt=""
                  />
                  {open && (
                    <div className=" absolute bg-white w-[120px] border-2 p-2">
                      <p onClick={handleSalesSort}>Best Selling</p>
                      <p onClick={handleTimedSort}>Newest</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-12">
          {gigs.map((item) => (
            <GigCard gigs={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
