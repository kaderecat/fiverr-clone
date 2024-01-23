const Add = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1200px] mb-[100px] ">
        <h1 className="my-6 text-gray-500 font-semibold text-[20px]">
          Add New Gig
        </h1>
        <form action="" className="flex w-[100%] justify-between gap-[100px]">
          <div className="flex flex-col justify-between  flex-1">
            <label className="text-gray-500 text-[18px]" htmlFor="">
              Title
            </label>
            <input
              className="p-2 border-gray-200 border-[2px] rounded-md"
              type="text"
              placeholder="e.g. I will do something i am really good at."
            />
            <label className="text-gray-500 text-[18px]" htmlFor="">
              Category
            </label>
            <select
              className="p-2 border-gray-200 border-[2px] rounded-md"
              name=""
              id=""
            >
              <option value="">Music</option>
              <option value="">Desing</option>
              <option value="">Web Development</option>
              <option value="">Animation</option>
            </select>
            <label className="text-gray-500 text-[18px]" htmlFor="">
              Cover Image
            </label>
            <input
              className="p-2 border-gray-200 border-[2px] rounded-md"
              type="file"
            />
            <label className="text-gray-500 text-[18px]" htmlFor="">
              Upload images
            </label>
            <input
              className="p-2 border-gray-200 border-[2px] rounded-md"
              type="file"
            />
            <label className="text-gray-500 text-[18px]" htmlFor="">
              Description
            </label>
            <textarea
              className="p-2 border-gray-200 border-[2px] rounded-md"
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Brief description to introduce your service to customers"
            ></textarea>
            <button className="bg-green-500 text-white p-2 rounded-md">
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
              placeholder="e.g. One-page web design"
            />
            <label className="text-gray-500 text-[18px]" htmlFor="">
              Short Description
            </label>
            <textarea
              className="p-2 border-gray-200 border-[2px] rounded-md"
              name=""
              id=""
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
            />
            <label className="text-gray-500 text-[18px]" htmlFor="">
              Revision Number
            </label>
            <input
              className="p-2 border-gray-200 border-[2px] rounded-md"
              type="number"
            />
            <label className="text-gray-500 text-[18px]" htmlFor="">
              Add Features
            </label>
            <input
              className="p-2 border-gray-200 border-[2px] rounded-md"
              type="text"
              placeholder="e.g. page design"
            />
            <input
              className="p-2 border-gray-200 border-[2px] rounded-md"
              type="text"
              placeholder="e.g. file uploading"
            />
            <input
              className="p-2 border-gray-200 border-[2px] rounded-md"
              type="text"
              placeholder="e.g. setting up a domain"
            />
            <input
              className="p-2 border-gray-200 border-[2px] rounded-md"
              type="text"
              placeholder="e.g. hoisting"
            />
            <label className="text-gray-500 text-[18px]" htmlFor="">
              Price
            </label>
            <input
              className="p-2 border-gray-200 border-[2px] rounded-md"
              type="number"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
