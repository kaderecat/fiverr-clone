/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import SingleReview, { Review } from "./SingleReview";
import newRequest from "../utils/newRequest";
import { useRef } from "react";

interface ReviewsProps {
  gigId?: string;
}



const Reviews = ({ gigId }: ReviewsProps) => {
  const queryClient = useQueryClient();
  const inputRef = useRef<HTMLInputElement|null>(null)
  const selectRef = useRef<HTMLSelectElement|null>(null)

  const { isPending, error, data } = useQuery({
    queryKey: ["review", gigId],
    queryFn: async () =>
      await newRequest.get(`/reviews/${gigId}`).then((res) => {
        return res.data;
      }),
    enabled: !!gigId,
  });

  const mutation = useMutation({
    mutationFn: (review) => {
      return newRequest.post("/reviews", review);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey : ["review"]});
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>
    ) => {
    e.preventDefault();

    const desc = inputRef.current?.value
    

    const star = selectRef.current?.value
//@ts-ignore
    mutation.mutate( {gigId, desc, star} );
  };

  return (
    <div className="my-10">
      <h2 className="font-bold text-2xl mb-5">Reviews</h2>
      {isPending
        ? "Loading..."
        : error
        ? "Something went wrong"
        : data.map((item: Review) => (
            <SingleReview key={item.userId} review={item} />
          ))}
      <div className="mt-5 flex flex-col gap-5">
        <h3>Add a review</h3>
        
        <form
          action=""
          className="flex flex-col gap-5 border"
          onSubmit={handleSubmit}
        >
          <input type="text" ref={inputRef} placeholder="write your opinion" className="p-5" />
          <select name="" ref={selectRef} id="" className="w-[200px] p-5 self-end">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button className="self-end w-[100px] border-none p-[10px] text-white bg-green-600 cursor-pointer">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
