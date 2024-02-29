/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useQuery } from "@tanstack/react-query";
import Slide from "../../components/Slide";
import newRequest from "../../utils/newRequest";
import { Link, useParams } from "react-router-dom";
import { Gigs } from "../../types/Gigs";
import Reviews from "../../components/Reviews";

const Gig = () => {
  const { id } = useParams();

  const { isPending, error, data } = useQuery<unknown, unknown, Gigs>({
    queryKey: [`gig`],
    queryFn:  () =>
       newRequest.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });


  const {
    isPending: isLoadingUser,
    error: isError,
    data: userData,
  } = useQuery({
    queryKey: [`user`, data?.userId],
    queryFn:  () =>
       newRequest.get(`/users/${data?.userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!data?.userId,
  });

  console.log(userData);

  return (
    <div className="flex justify-center">
      <div className="w-[1200px] flex gap-[100px] ">
        {isPending ? (
          "Loading..."
        ) : error ? (
          "Something went wrong!"
        ) : (
          <div className="w-[600px]">
            <p className="my-3 text-[12px] font-semibold text-gray-500">
              FIVERR {">"} GRAPHICS & DESIGN
            </p>
            <h1 className="my-3 font-bold text-2xl">{data?.title}</h1>
            {isLoadingUser ? (
              "Loading"
            ) : isError ? (
              "Something went wrong!"
            ) : (
              <div className="flex gap-3 items-center">
                <img
                  className="w-[32px] h-[32px] rounded-full"
                  src={userData?.img}
                  alt=""
                />
                <span>{userData?.username}</span>
                <div className="flex items-center gap-1">
                  {data && data?.totalStars > 0 ? (
                    Array(Math.round(data.totalStars / data.starNumber))
                      //@ts-ignore
                      .fill()
                      //@ts-ignore
                      .map((item, i) => (
                        <img className="w-4" src="/star.png" alt="" key={i} />
                      ))
                  ) : (
                    <img className="w-4" src="/star.png" alt="" />
                  )}

                  <span className="text-yellow-500">
                    {data &&
                      !isNaN(data.totalStars / data.starNumber) &&
                      Math.round(data.totalStars / data.starNumber)}
                  </span>
                </div>
              </div>
            )}
            {data && (
              <Slide arrowsScroll={1} slidesToShow={1}>
                {data?.images.map((itme) => (
                  <img src={itme} alt="" key={itme} />
                ))}
              </Slide>
            )}
            <h2 className="font-bold text-2xl my-5">About this gig</h2>
            <p className="my-3 text-[16px]  text-gray-500">{data?.desc}</p>
            <div>
              <h2 className="font-bold text-2xl my-5">About the seller</h2>
              <div className="flex items-center mb-5">
                <img
                  className="w-20 h-20 rounded-full"
                  src={userData?.img}
                  alt=""
                />
                <div>
                  <span>{userData?.username}</span>
                  <div className="flex items-center gap-2">
                    {data && data?.totalStars > 0 ? (
                      Array(Math.round(data.totalStars / data.starNumber))
                        //@ts-ignore
                        .fill()
                        //@ts-ignore

                        .map((item, i) => (
                          <img className="w-4" src="/star.png" alt="" key={i} />
                        ))
                    ) : (
                      <img className="w-4" src="/star.png" alt="" />
                    )}
                    <span className="text-yellow-500">
                      {data &&
                        !isNaN(data?.totalStars / data?.starNumber) &&
                        Math.round(data?.totalStars / data?.starNumber)}
                    </span>
                  </div>
                  <button className="mt-2 border-[1px] border-black p-[6px] rounded-md font-semibold">
                    Contact Me
                  </button>
                </div>
              </div>
              <div className="border-[1px] p-4 rounded-md">
                <div className="flex flex-wrap justify-between">
                  <div className="flex w-[200px] flex-col gap-1 mb-[30px] font-semibold">
                    <span>From</span>
                    <span>USA</span>
                  </div>
                  <div className="flex w-[200px] flex-col gap-1 mb-[30px] font-semibold">
                    <span>Avg.response time</span>
                    <span>4 hours</span>
                  </div>
                  <div className="flex w-[200px] flex-col gap-1 mb-[30px] font-semibold">
                    <span>Language</span>
                    <span>English</span>
                  </div>
                  <div className="flex w-[200px] flex-col gap-1 mb-[30px] font-semibold">
                    <span>Member since</span>
                    <span>Aug 2022</span>
                  </div>
                  <div className="flex w-[200px] flex-col gap-1 mb-[30px] font-semibold">
                    <span>Last delivery</span>
                    <span>1 day</span>
                  </div>
                </div>
                <hr className="mb-[20px] border-2" />
                <div>
                  <p className="text-gray-500">{data?.shortDesc}</p>
                </div>
              </div>
            </div>
            <Reviews gigId={data?._id} />
          </div>
        )}

        <div className="w-[400px] h-[350px] border-2 p-4 sticky top-[150px] right-2 rounded-md">
          <div className="flex justify-between mb-3">
            <h1 className="font-bold">{data?.shortTitle}</h1>
            <span className="text-2xl">$ {data?.price}</span>
          </div>
          <p className="text-gray-500 my-3 text-[14px]">{data?.shortDesc}</p>
          <div className="flex justify-between mb-3">
            <div className="flex items-center gap-2">
              <img className="w-5 h-5" src="/clock.png" alt="" />
              <span>{data?.deliveryTime} days delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-5 h-5" src="/recycle.png" alt="" />
              <span>{data?.revisionsNumber} Revisions</span>
            </div>
          </div>
          <div className="mb-3">
            {data?.features.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-green-600 font-light"
              >
                <img className="w-4 h-4" src="/greencheck.png" alt="" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <Link to={`/pay/${id}`}>
          <button className="bg-green-600 text-white p-2 w-[100%] rounded-md font-semibold">
            Continue
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gig;
