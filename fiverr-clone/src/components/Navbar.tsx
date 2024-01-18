/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [dropMenu, setDropMenu] = useState(false);
  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  const isDropMenuActive = () => {
    setDropMenu((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "kaderecat",
    isSeller: true,
  };

  return (
    <div
      className={`flex justify-center sticky top-0 ${
        active || pathname !== "/" ? "bg-white" : "bg-green-900"
      } flex-col items-center ease-in duration-500`}
    >
      <div className="w-[1200px] py-2  flex justify-between items-center">
        <div
          className={
            active || pathname !== "/"
              ? "text-[36px] font-bold text-black"
              : "text-[36px] font-bold text-white"
          }
        >
          <Link to={"/"}>
            <span>fiverr</span>
          </Link>
          <span className="text-green-600">.</span>
        </div>
        <div
          className={`flex justify-center items-center ${
            active || pathname !== "/" ? "text-black" : "text-white"
          } gap-4 px-1 hover:cursor-pointer`}
        >
          <span>Fiverr Bussines</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser && <span>Sing in</span>}
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && (
            <button className="border px-4 py-1 rounded-md hover:bg-green-500 transition-all ease-in-out duration-300 hover:border-green-500">
              Join
            </button>
          )}
          {currentUser && (
            <div
              onClick={() => isDropMenuActive()}
              className="flex justify-center items-center gap-2 relative"
            >
              <img
                className="w-8 h-8 rounded-full object-cover"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                alt=""
              />
              <span>{currentUser.username}</span>
              {dropMenu && (
                <div className="absolute flex flex-col top-[51px] right-[-20px] rounded-md gap-1 p-5 bg-white text-gray-700 w-[225px]">
                  {currentUser?.isSeller ? (
                    <>
                      <Link to={"/gigs"}>
                        <span>Gigs</span>
                      </Link>
                      <Link to={"/add"}>
                        <span>Add New Gig</span>
                      </Link>
                    </>
                  ) : null}
                  <Link to={"/orders"}>
                    <span>Orders</span>
                  </Link>
                  <Link to={"/messages"}>
                    <span>Messages</span>
                  </Link>
                  <Link to={"/logout"}>
                    <span>Logout</span>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active || pathname !== "/" ? (
        <>
          <hr className="w-[100%] h-1 " />
          <div className="text-gray-500 bg-white flex justify-center w-[100%] ">
            <div className="flex justify-between w-[1200px]">
              <Link to={"/"}>
                <span>Graphics & Design</span>
              </Link>
              <Link to={"/"}>
                <span>Video & Animation</span>
              </Link>
              <Link to={"/"}>
                <span>Writing & Translation</span>
              </Link>
              <Link to={"/"}>
                <span>AI Services</span>
              </Link>
              <Link to={"/"}>
                <span>Digital Marketing</span>
              </Link>
              <Link to={"/"}>
                <span>Music & Audio</span>
              </Link>
              <Link to={"/"}>
                <span>Programming & Tech</span>
              </Link>
              <Link to={"/"}>
                <span>Business</span>
              </Link>
              <Link to={"/"}>
                <span>Lifestyle</span>
              </Link>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
