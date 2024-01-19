import { Link } from "react-router-dom";

const SingleMessage = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1000px]">
        <h2 className="my-5 text-[14px]">
          <Link to={"/messages"}>MESSAGES</Link>-JOHN DOE
        </h2>
        <div className="flex flex-col gap-5 my-[30px] h-[500px] overflow-scroll overflow-x-hidden">
          <div className="flex gap-3 mb-4 w-[450px]">
            <img
              className="h-[32px] w-[32px] object-cover rounded-full"
              src="/man.png"
              alt=""
            />
            <p className="bg-gray-200 p-2 rounded-lg rounded-tl-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              deleniti eveniet natus repellendus eos consectetur, maiores
              nesciunt. Voluptate alias officiis magni sint, accusamus beatae
              doloribus perspiciatis natus ea nihil quae.
            </p>
          </div>
          <div className="flex gap-3 owner max-w-[450px]">
            <img
              className="h-[32px] w-[32px] object-cover rounded-full"
              src="/man.png"
              alt=""
            />
            <p className="bg-gray-200 p-2 rounded-lg rounded-tl-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              deleniti eveniet natus repellendus eos consectetur, maiores
              nesciunt. Voluptate alias officiis magni sint, accusamus beatae
              doloribus perspiciatis natus ea nihil quae.
            </p>
          </div>
          <div className="flex gap-3 mb-4 w-[450px]">
            <img
              className="h-[32px] w-[32px] object-cover rounded-full"
              src="/man.png"
              alt=""
            />
            <p className="bg-gray-200 p-2 rounded-lg rounded-tl-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              deleniti eveniet natus repellendus eos consectetur, maiores
              nesciunt. Voluptate alias officiis magni sint, accusamus beatae
              doloribus perspiciatis natus ea nihil quae.
            </p>
          </div>
          <div className="flex gap-3 owner max-w-[450px]">
            <img
              className="h-[32px] w-[32px] object-cover rounded-full"
              src="/man.png"
              alt=""
            />
            <p className="bg-gray-200 p-2 rounded-lg rounded-tl-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              deleniti eveniet natus repellendus eos consectetur, maiores
              nesciunt. Voluptate alias officiis magni sint, accusamus beatae
              doloribus perspiciatis natus ea nihil quae.
            </p>
          </div>
          <div className="flex gap-3 mb-4 w-[450px]">
            <img
              className="h-[32px] w-[32px] object-cover rounded-full"
              src="/man.png"
              alt=""
            />
            <p className="bg-gray-200 p-2 rounded-lg rounded-tl-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              deleniti eveniet natus repellendus eos consectetur, maiores
              nesciunt. Voluptate alias officiis magni sint, accusamus beatae
              doloribus perspiciatis natus ea nihil quae.
            </p>
          </div>
          <div className="flex gap-3 owner max-w-[450px]">
            <img
              className="h-[32px] w-[32px] object-cover rounded-full"
              src="/man.png"
              alt=""
            />
            <p className="bg-gray-200 p-2 rounded-lg rounded-tl-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              deleniti eveniet natus repellendus eos consectetur, maiores
              nesciunt. Voluptate alias officiis magni sint, accusamus beatae
              doloribus perspiciatis natus ea nihil quae.
            </p>
          </div>
        </div>
        <hr className=" border-2 mb-5"/>
        <div className="flex items-center justify-between mb-10">
          <textarea className="w-[80%] h-[100px] p-2 border-2 rounded-lg"
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="write a message"
          ></textarea>
          <button className="text-white bg-green-600 p-2 rounded-lg">Send</button>
        </div>
      </div>
    </div>
  );
};

export default SingleMessage;
