import { useQuery } from "@tanstack/react-query";
import newRequest from "../utils/newRequest";

export interface Review {
  desc: string;
  userId: string;
  gigId: string;
  star: number;
}

interface ReviewProps {
  review: Review;
}

const SingleReview = ({ review }: ReviewProps) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["reviewUser", review.userId],
    queryFn: () =>
      newRequest.get(`/users/${review?.userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!review.userId,
  });

  console.log(data);

  return (
    <>
      {isPending ? (
        "Loading..."
      ) : error ? (
        "Something went wrong"
      ) : (
        <>
          <div className="">
            <div className="flex items-center mb-4">
              <img
                className="w-12 h-12 rounded-full"
                src={data.img || "/noavatar.jpg"}
                alt=""
              />
              <div className="">
                <span className="text-[14px] font-semibold">
                  {data.username}
                </span>
                <div className="flex items-center gap-2">
                  <img className="w-5 h-5 rounded-md" src="/flag.webp" alt="" />
                  <span>{data.country}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {data &&
                Array(review.star)
                  .fill()
                  .map((item, i) => (
                    <img className="w-4" src="/star.png" alt="" key={i} />
                  ))}

              <span className="text-yellow-500">{review.star}</span>
            </div>
            <p className="my-4 text-[14px] text-gray-500">{review.desc}</p>
            <div className="font-semibold flex gap-2 items-center">
              <span>Helpful?</span>

              <img className="w-5 h-5" src="/like.png" alt="" />
              <span>Yes</span>

              <img className="w-5 h-5" src="/dislike.png" alt="" />
              <span>No</span>
            </div>
          </div>
          <hr className="my-[20px]" />
        </>
      )}
    </>
  );
};

export default SingleReview;
