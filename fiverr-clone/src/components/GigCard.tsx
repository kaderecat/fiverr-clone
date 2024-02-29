import { Link } from "react-router-dom";
import { Gigs } from "../types/Gigs";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../utils/newRequest";

interface GigProps {
  gigs: Gigs;
}

const GigCard = ({ gigs }: GigProps) => {
  const { isPending, error, data } = useQuery({
    queryKey: [`${gigs.userId}`],
    queryFn:async () =>
    await  newRequest.get(`/users/${gigs.userId}`).then((res) => {
        return res.data;
      }),
  });


  return (
    <Link to={`/gig/${gigs._id}`}>
      <div className="w-[200px] h-[300px] border-2">
        <div className="h-[40%] object-cover overflow-hidden">
          <img className="w-[100%] h-[100%]" src={gigs.cover} alt="" />
        </div>
        <div className="p-5 flex flex-col justify-start gap-1 h-[60%]">
          {isPending ? (
            "loading"
          ) : error ? (
            error.message
          ) : (
            <div className="flex items-center gap-4">
              <div className="w-7 h-7 rounded-full overflow-hidden">
                <img className="w-[100%] h-[100%]" src={data.img} alt="" />
              </div>
              <span className="text-[14px]">{data.username}</span>
            </div>
          )}
          <p className="text-[10px]">{gigs.desc}</p>
          <div className="flex items-center gap-2">
            
            <img className="w-4" src="star.png" alt="" />
            <span>
              {!isNaN(gigs.totalStars / gigs.starNumber) &&
                Math.round(gigs.totalStars / gigs.starNumber)}
            </span>
          </div>
          <hr className="" />
          <div className="flex items-center justify-between">
            <div className="w-4">
              <img src="heart.png" alt="" />
            </div>
            <div>
              <p className="text-gray-500 text-[10px] font-semibold">
                STARTING AT
              </p>
              <p className="font-bold text-gray-500">${gigs.price}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
