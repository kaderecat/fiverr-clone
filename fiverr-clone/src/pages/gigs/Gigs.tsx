import { useEffect, useRef, useState } from "react";
import GigCard from "../../components/GigCard";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { Gigs as gigsType } from "../../types/Gigs";
import { useLocation } from "react-router-dom";

const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const minRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);

  const { search } = useLocation();

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest.get(
        `/gigs${search}&min=${minRef.current?.value}&max=${maxRef.current?.value}&sort=${sort}`
      ),
  });

  useEffect(() => {
    refetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);

  const handleSalesSort = () => {
    setSort("sales");
    setOpen(false);
  };

  const handleTimedSort = () => {
    setSort("createdAt");
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const apply = () => {
    refetch();
  };

  return (
    <div className="flex justify-center items-center my-[30px] ">
      <div className="w-[1200px]  flex flex-wrap gap-12">
        <div className="mt-10">
          <div className="text-gray-500 text-[12px] flex flex-col gap-2 mb-5">
            <span>FIVERR - GRAPHICS & DESIGN </span>
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
                type="number"
                placeholder="min"
                ref={minRef}
              />
              <input
                className="border-2 pl-2"
                type="number"
                placeholder="max"
                ref={maxRef}
              />
              <button
                onClick={apply}
                className="bg-green-600 text-white text-[12px] p-1 rounded-lg w-12 font-semibold"
              >
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
                    onClick={handleOpen}
                    className="w-5"
                    src="down.png"
                    alt=""
                  />
                  {open && (
                    <div className=" absolute bg-white w-[120px] border-2  cursor-pointer ">
                      <p
                        onClick={handleSalesSort}
                        className="hover:bg-gray-300 p-1"
                      >
                        Best Selling
                      </p>
                      <p
                        onClick={handleTimedSort}
                        className="hover:bg-gray-300 p-1 "
                      >
                        Newest
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-12">
          {isPending && <div>Loading..</div>}
          {error && <div>{error.message}</div>}
          {data?.data.map((item: gigsType) => (
            <GigCard gigs={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
