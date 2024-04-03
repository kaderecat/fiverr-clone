import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

export interface CurrentUser {
  isSeller: boolean;
  _id: string;
}

interface Order {
  img: string;
  title: string;
  price: number;
  buyerId: string;
  sellerId: string;
}

export const Orders = () => {
  const navigate = useNavigate();

  const { isPending, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      newRequest.get(`/orders`).then((res) => {
        return res.data;
      }),
  });

  const currentUser: CurrentUser = JSON.parse(
    localStorage.getItem("currentUser")!
  );

  const handleConv = async (order: Order) => {
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const id = sellerId + buyerId;

    try {
      const res = await newRequest.get(`/conversations/${id}`);

      navigate(`/message/${res.data.id}`);
    } catch (error: any) {
      console.log(error);

      if (error.response.status === 404) {
        const res = await newRequest.post(`/conversations/`, {
          to: currentUser.isSeller ? buyerId : sellerId,
        });
        navigate(`/message/${res.data.id}`);
      }
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-[1200px] my-[20px]">
        <div className="flex justify-between mb-[20px]">
          <h1 className="text-3xl font-bold">Orders</h1>
        </div>
        <table className="w-[100%] mb-16">
          <thead>
            <tr className="tr1">
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>{currentUser.isSeller ? "Buyer" : "Seller"} Contact</th>
            </tr>
          </thead>
          <tbody>
            {isPending
              ? "Loading..."
              : error
              ? "Something went wrong"
              : data.map((order: Order, i: number) => (
                  <tr className="tr1" key={i}>
                    <td>
                      <img className="w-5" src={order.img} alt="" />
                    </td>
                    <td>{order.title}</td>
                    <td>{order.price}</td>
                    <td>
                      <img
                        className="w-5 cursor-pointer"
                        src="/message.png"
                        alt=""
                        onClick={() => handleConv(order)}
                      />
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
