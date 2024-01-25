import './register.css'


export const Register = () => {
  return (
    <div className="flex items-center justify-center">
      <form className="w-[960px] py-[100px] flex gap-[120px]">
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
          />
          <label className="text-gray-500 text-[18px]" htmlFor="">
            Email
          </label>
          <input
            className="p-5 border-2"
            name="email"
            type="email"
            placeholder="email"
          />
          <label className="text-gray-500 text-[18px]" htmlFor="">
            Password
          </label>
          <input className="p-5 border-2" name="password" type="password" />
          <label className="text-gray-500 text-[18px]" htmlFor="">
            Profile Picture
          </label>
          <input className="p-5 border-2" type="file" />
          <label className="text-gray-500 text-[18px]" htmlFor="">
            Country
          </label>
          <input
            className="p-5 border-2"
            name="country"
            type="text"
            placeholder="Usa"
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
              <input className="p-5 border-2" type="checkbox" />
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
          ></textarea>
        </div>
      </form>
    </div>
  );
};
