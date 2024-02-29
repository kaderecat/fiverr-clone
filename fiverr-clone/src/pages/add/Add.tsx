/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useReducer, useState } from "react";
import { gigReducer, INITIAL_STATE } from "../../reducers/gigReducer";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import upload from "../../utils/upload";

const Add = () => {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const handleChange = (e: React.ChangeEvent) => {
    dispatch({
      type: "CHANGE_INPUT",
      //@ts-ignore
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleFeature = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      //@ts-ignore
      payload: e.target[0].value,
    });
    //@ts-ignore
    e.target[0].value = "";
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      //@ts-ignore
      const cover = await upload(singleFile);

      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
    } catch (err) {
      console.log(err);
    }
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (gig) => {
      
      return newRequest.post("/gigs", gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myGigs"] });
    },
  });

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    
    console.log(state);
    
    mutation.mutate(state);
  };

  return (
    <div className="flex justify-center">
      <div className="w-[1200px] mb-[100px] ">
        <h1 className="my-6 text-gray-500 font-semibold text-[20px]">
          Add New Gig
        </h1>
        <div className="flex w-[100%] justify-between gap-[100px]">
          <div className="flex flex-col justify-between  flex-1">
            <label className="text-gray-500 text-[18px]" htmlFor="">
              Title
            </label>
            <input
              className="p-2 border-gray-200 border-[2px] rounded-md"
              name="title"
              onChange={handleChange}
              type="text"
              placeholder="e.g. I will do something i am really good at."
            />
            <label className="text-gray-500 text-[18px]" htmlFor="">
              Category
            </label>
            <select
              className="p-2 border-gray-200 border-[2px] rounded-md"
              name="cat"
              onChange={handleChange}
              id=""
            >
              <option value="music">Music</option>
              <option value="design">Desing</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
            </select>
            <div className="flex items-center gap-5">
              <div className="flex flex-col gap-5">
                <label className="text-gray-500 text-[18px]" htmlFor="">
                  Cover Image
                </label>
                <input
                  className="p-2 border-gray-200 border-[2px] rounded-md"
                  type="file"
                  onChange={(e) => setSingleFile(e.target.files[0])}
                />
                <label className="text-gray-500 text-[18px]" htmlFor="">
                  Upload images
                </label>
                <input
                  className="p-2 border-gray-200 border-[2px] rounded-md"
                  type="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>
              <button
                className="bg-green-600 text-white p-2"
                onClick={handleUpload}
              >
                {uploading ? "uploading" : "Upload"}
              </button>
            </div>
            <label className="text-gray-500 text-[18px]" htmlFor="">
              Description
            </label>
            <textarea
              className="p-2 border-gray-200 border-[2px] rounded-md"
              name="desc"
              cols={30}
              rows={10}
              onChange={handleChange}
              placeholder="Brief description to introduce your service to customers"
            ></textarea>
            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white p-2 rounded-md"
            >
              Create
            </button>
          </div>
          <div className="flex flex-col gap-3 justify-between flex-1">
            <label className="text-gray-500 text-[18px]" htmlFor="">
              Service Title
            </label>
            <input
              className="p-2 border-gray-200 border-[2px] rounded-md"
              type="text"
              name="shortTitle"
              placeholder="e.g. One-page web design"
              onChange={handleChange}
            />
            <label className="text-gray-500 text-[18px]" htmlFor="">
              Short Description
            </label>
            <textarea
              className="p-2 border-gray-200 border-[2px] rounded-md"
              name="shortDesc"
              onChange={handleChange}
              placeholder="Short description of your service"
              cols={30}
              rows={10}
            ></textarea>
            <label className="text-gray-500 text-[18px]" htmlFor="">
              Delivery time
            </label>
            <input
              className="p-2 border-gray-200 border-[2px] rounded-md"
              type="number"
              name="deliveryTime"
              onChange={handleChange}
            />
            <label className="text-gray-500 text-[18px]" htmlFor="">
              Revision Number
            </label>
            <input
              className="p-2 border-gray-200 border-[2px] rounded-md"
              type="number"
              onChange={handleChange}
              name="revisionsNumber"
            />
            <label className="text-gray-500 text-[18px]" htmlFor="">
              Add Features
            </label>
            <form className="flex justify-center" onSubmit={handleFeature}>
              <input
                className="p-2 border-gray-200 border-[2px] rounded-md"
                type="text"
                placeholder="e.g. page design"
              />
              <button
                className="border-none p-5 text-white font-semibold text-lg bg-green-600 cursor-pointer"
                type="submit"
              >
                Add
              </button>
            </form>
            <div className="flex gap-5">
              {state?.features?.map((f) => (
                <div className="item" key={f}>
                  <button
                    className="h-7 p-2 text-[12px] font-semibold bg-transparent text-red-500 border-red-100 flex items-center gap-5"
                    onClick={() =>
                      dispatch({ type: "REMOVE_FEATURE", payload: f })
                    }
                  >
                    {f}
                    <span>X</span>
                  </button>
                </div>
              ))}
            </div>

            <label className="text-gray-500 text-[18px]" htmlFor="">
              Price
            </label>
            <input
              className="p-2 border-gray-200 border-[2px] rounded-md"
              type="number"
              onChange={handleChange}
              name="price"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
