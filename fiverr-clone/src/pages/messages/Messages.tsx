import { Link } from "react-router-dom";

const Messages = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1200px] my-[20px]">
        <div className="flex justify-between mb-[20px]">
          <h1 className="text-3xl font-bold">Gigs</h1>
        </div>
        <table className="w-[100%] mb-16">
          <tr className="tr2">
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="tr2 active">
            <td className="font-bold pl-2">John Doe</td>
            <td>
              <Link to={"/message/123"}>
                vitae. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Id,
              </Link>
            </td>
            <td>1 hour ago</td>
            <td>
              <button className="text-white bg-green-600 p-2 rounded-sm">
                Mark as Read
              </button>
            </td>
          </tr>
          <tr className="tr2 active">
            <td className="font-bold pl-2">John Doe</td>
            <td>
            <Link to={"/message/123"}>
                vitae. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Id,
              </Link>
            </td>
            <td>1 hour ago</td>
            <td>
              <button className="text-white bg-green-600 p-2 rounded-sm">
                Mark as Read
              </button>
            </td>
          </tr>
          <tr className="tr2 active">
            <td className="font-bold pl-2">John Doe</td>
            <td>
            <Link to={"/message/123"}>
                vitae. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Id,
              </Link>
            </td>
            <td>1 hour ago</td>
            <td>
              <button className="text-white bg-green-600 p-2 rounded-sm">
                Mark as Read
              </button>
            </td>
          </tr>
          <tr className="tr2">
            <td className="font-bold pl-2">John Doe</td>
            <td>
            <Link to={"/message/123"}>
                vitae. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Id,
              </Link>
            </td>
            <td>1 hour ago</td>
            <td></td>
          </tr>
          <tr className="tr2">
            <td className="font-bold pl-2">John Doe</td>
            <td>
            <Link to={"/message/123"}>
                vitae. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Id,
              </Link>
            </td>
            <td>1 hour ago</td>
            <td></td>
          </tr>
          <tr className="tr2">
            <td className="font-bold pl-2">John Doe</td>
            <td>
            <Link to={"/message/123"}>
                vitae. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Id,
              </Link>
            </td>
            <td>1 hour ago</td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
