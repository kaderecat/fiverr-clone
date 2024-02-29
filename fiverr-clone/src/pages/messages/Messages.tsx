/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import moment from "moment";
import { CurrentUser } from "../orders/Orders";

interface Conversation {
  buyerId: string;
  createdAt: string;
  id: string;
  readByBuyer: boolean;
  readBySeller: boolean;
  sellerId: string;
  updatedAt: string;
  _id: string;
  lastMessage?: string;
}

const Messages = () => {
  const queryClient = useQueryClient();
  const { isPending, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: () => newRequest.get(`/conversations`).then((res) => res.data),
  });

  const currentUser: CurrentUser = JSON.parse(
    localStorage.getItem("currentUser")!
  );

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.put(`/conversations/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["conversations"] });
    },
  });

  const handleRead = (id) => {
    mutation.mutate(id);
  };

  return (
    <div className="flex justify-center">
      <div className="w-[1200px] my-[20px]">
        <div className="flex justify-between mb-[20px]">
          <h1 className="text-3xl font-bold">Messages</h1>
        </div>
        {isPending ? (
          "'Loading..."
        ) : error ? (
          "Something went wrong"
        ) : (
          <table className="w-[100%] mb-16">
            <thead>
              <tr className="tr2">
                <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
                <th>Last Message</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((c: Conversation, i: number) => (
                <tr
                  className={
                    (currentUser.isSeller && !c.readBySeller) ||
                    (!currentUser.isSeller && !c.readByBuyer)
                      ? "active tr2"
                      : "tr2"
                  }
                  key={i}
                >
                  <td className="font-bold pl-2">John Doe</td>
                  <td>
                    <Link to={`/message/${c.id}`}>
                      {c?.lastMessage?.substring(0, 100)}...
                    </Link>
                  </td>
                  <td>{moment(c.updatedAt).fromNow()}</td>
                  <td>
                    {((currentUser.isSeller && !c.readBySeller) ||
                      (!currentUser.isSeller && !c.readByBuyer)) && (
                      <button
                        onClick={() => handleRead(c.id)}
                        className="text-white bg-green-600 p-2 rounded-sm"
                      >
                        Mark as Read
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Messages;
