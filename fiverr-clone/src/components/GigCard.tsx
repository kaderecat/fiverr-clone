import { Link } from "react-router-dom";
import { Gigs } from "../types/Gigs";

interface GigProps {
  gigs: Gigs;
}

const GigCard = ({ gigs }: GigProps) => {
  return (
    <Link to={'/gig/123'}>
      <div className="w-[200px] h-[300px] border-2">
        <div className="h-[40%] object-cover overflow-hidden">
          <img src={gigs.img} alt="" />
        </div>
        <div className="p-5 flex flex-col justify-start gap-1 h-[60%]">
          <div className="flex items-center gap-4">
            <div className="w-7 h-7 rounded-full overflow-hidden">
              <img className="w-[100%] h-[100%]" src={gigs.pp} alt="" />
            </div>
            <span className="text-[14px]">{gigs.username}</span>
          </div>
          <p className="text-[10px]">{gigs.desc}</p>
          <div className="flex items-center gap-2">
            <img className="w-4" src="star.png" alt="" />
            <span>{gigs.star}</span>
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
