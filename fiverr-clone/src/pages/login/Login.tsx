/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import { useState } from "react";



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/");
    } catch (error) {
      //@ts-expect-error err
      setErr(error.response.data);
    }
  };

  return (
    <div className="flex justify-center ">
      <div className="w-[1200px] flex justify-center items-center">
        <div className="my-[100px] text-2xl w-[400px]">
          <h1 className="my-5 text-3xl font-semibold text-gray-500">Sign in</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 ">
            <label htmlFor="">Username</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              className="border-2 p-2"
              type="text"
              placeholder="Enter your username"
            />
            <label htmlFor="">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 p-2"
              type="password"
              placeholder="Enter your password"
            />
            <button className="bg-green-500 p-2 text-white">Login</button>
            {err && <p>{err}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
