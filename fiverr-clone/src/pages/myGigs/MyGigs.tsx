import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";

interface Gig {
  _id : string,
  cover : string,
  title : string,
  sales : number,
  price : number
}

const MyGigs = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser")!);
  const queryClient = useQueryClient();

  const { isPending, error, data } = useQuery({
    queryKey: [`myGigs`],
    queryFn: () =>
      newRequest.get(`/gigs?userId=${currentUser._id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/gigs/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myGigs"] });
    },
  });

  return (
    <div className="flex justify-center">
      <div className="w-[1200px] my-[20px]">
        <div className="flex justify-between mb-[20px]">
          <h1 className="text-3xl font-bold">Gigs</h1>
          <Link to={"/api/gigs/add"}>
            <button className="bg-green-500 text-white p-2 rounded-md font-semibold">
              Add New Gig
            </button>
          </Link>
        </div>
        <table className="w-[100%] mb-16">
          <thead>
            <tr className="tr1">
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Orders</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isPending
              ? "Loading"
              : error
              ? "Something went wrong"
              : data &&
                data.map((gig : Gig) => (
                  <tr className="tr1" key={gig._id}>
                    <td>
                      <img className="w-5" src={gig.cover} alt="" />
                    </td>
                    <td>{gig.title}</td>
                    <td>{gig.price}</td>
                    <td>{gig.sales}</td>
                    <td>
                      <img
                        className="w-5 cursor-pointer"
                        src="/delete.png"
                        alt=""
                        onClick={() => mutation.mutate(gig._id)}
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

export default MyGigs;
