/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Link, useParams } from "react-router-dom";
import { CurrentUser } from "../orders/Orders";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

interface messageI {
  desc : string
  userId : string
}

const SingleMessage = () => {
  const currentUser: CurrentUser = JSON.parse(
    localStorage.getItem("currentUser")!
  );
  const queryClient = useQueryClient();

  const { id } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["messages"] });
    },
  });

  const handleSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //@ts-ignore

    mutation.mutate({ conversationId: id, desc: e.target[0].value });
    //@ts-ignore

    e.target[0].value = "";
  };

  return (
    <div className="flex justify-center">
      <div className="w-[1000px]">
        <h2 className="my-5 text-[14px]">
          <Link to={"/messages"}>MESSAGES</Link>-JOHN DOE
        </h2>
        {isPending ? (
          "Loading..."
        ) : error ? (
          "Something went wrong!"
        ) : (
          <div className="flex flex-col gap-5 my-[30px] h-[500px] overflow-scroll overflow-x-hidden">
            {data &&
              data.map((m : messageI, i : number) => (
                <div
                  className={
                    currentUser._id === m.userId
                      ? "owner flex gap-3 mb-4 w-[450px]"
                      : "flex gap-3 mb-4 w-[450px]"
                  }
                  key={i}
                >
                  <img
                    className="h-[32px] w-[32px] object-cover rounded-full"
                    src="/man.png"
                    alt=""
                  />
                  <p className="bg-gray-200 p-2 rounded-lg rounded-tl-none">
                    {m.desc}
                  </p>
                </div>
              ))}
          </div>
        )}
        <hr className=" border-2 mb-5" />
        <form
          className="flex items-center justify-between mb-10"
          onSubmit={handleSubmit}
        >
          <textarea
            className="w-[80%] h-[100px] p-2 border-2 rounded-lg"
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="write a message"
          ></textarea>
          <button
            type="submit"
            className="text-white bg-green-600 p-2 rounded-lg"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleMessage;
