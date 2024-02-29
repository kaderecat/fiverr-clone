/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from "react";
import "./register.css";
import upload from "../../utils/upload";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    phone: "",
    isSeller: false,
    desc: "",
  });

  const navigate = useNavigate();

  const [file, setFile] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //@ts-ignore
    const url = await upload(file);

    try {
      await newRequest.post("/auth/register", { ...user, img: url });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.files instanceof FileList ? setFile(e.target.files[0]) : null;
  };

  return (
    <div className="flex items-center justify-center">
      <form
        className="w-[960px] py-[100px] flex gap-[120px]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-1 flex-col gap-[10px] justify-between">
          <h1 className="text-gray-500 mb-5 text-3xl font-semibold">
            Create a new account
          </h1>
          <label className="text-gray-500 text-[18px]" htmlFor="">
            Username
          </label>
          <input
            className="p-5 border-2"
            name="username"
            type="text"
            placeholder="johndoe"
            onChange={handleChange}
          />
          <label className="text-gray-500 text-[18px]" htmlFor="">
            Email
          </label>
          <input
            className="p-5 border-2"
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
          />
          <label className="text-gray-500 text-[18px]" htmlFor="">
            Password
          </label>
          <input
            className="p-5 border-2"
            name="password"
            type="password"
            onChange={handleChange}
          />
          <label className="text-gray-500 text-[18px]" htmlFor="">
            Profile Picture
          </label>
          <input className="p-5 border-2" type="file" onChange={handleFile} />
          <label className="text-gray-500 text-[18px]" htmlFor="">
            Country
          </label>
          <input
            className="p-5 border-2"
            name="country"
            type="text"
            placeholder="Usa"
            onChange={handleChange}
          />
          <button
            className="border-none p-5 text-white font-semibold text-[18px] bg-green-500 cursor-pointer rounded-sm"
            type="submit"
          >
            Register
          </button>
        </div>
        <div className="flex flex-1 flex-col gap-[10px] justify-between">
          <h1 className="text-gray-500 mb-5 text-3xl font-semibold">
            I want to become a seller
          </h1>
          <div className="toggle">
            <label className="text-gray-500 text-[18px]" htmlFor="">
              Activate the seller account
            </label>
            <label className="text-gray-500 text-[18px] switch">
              <input
                className="p-5 border-2"
                type="checkbox"
                onChange={handleSeller}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <label className="text-gray-500 text-[18px]" htmlFor="">
            Phone Number
          </label>
          <input
            className="p-5 border-2"
            name="phone"
            type="text"
            placeholder="+1 234 567 89"
            onChange={handleChange}
          />
          <label className="text-gray-500 text-[18px]" htmlFor="">
            Description
          </label>
          <textarea
            className="p-5 border-2"
            placeholder="A short description of yourself"
            name="desc"
            id=""
            cols={30}
            rows={10}
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
};
