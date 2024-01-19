import Slide from "../../components/Slide";

const Gig = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1200px] flex gap-[100px] ">
        <div className="w-[600px]">
          <p className="my-3 text-[12px] font-semibold text-gray-500">
            FIVERR - GRAPHICS & DESIGN
          </p>
          <h1 className="my-3 font-bold text-2xl">
            I will create AI generated art for you
          </h1>
          <div className="flex gap-3 items-center">
            <img
              className="w-[32px] h-[32px] rounded-full"
              src="/man.png"
              alt=""
            />
            <span>John Doe</span>
            <div className="flex items-center gap-1">
              <img className="w-4" src="/star.png" alt="" />
              <img className="w-4" src="/star.png" alt="" />
              <img className="w-4" src="/star.png" alt="" />
              <img className="w-4" src="/star.png" alt="" />
              <img className="w-4" src="/star.png" alt="" />
              <span className="text-yellow-500">5</span>
            </div>
          </div>
          <Slide arrowsScroll={1} slidesToShow={1}>
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/149670077/original/c6a23b1e30110f8526dc4198f3c6dd9cca197cf5/do-any-javascript-task-with-jquery-html-css.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/149670077/original/9392456de82c91514d5c3405305d4b4a802b5ffc/do-any-javascript-task-with-jquery-html-css.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/149670077/original/a4980694bcfa9f37b16ff62136f46984377794d8/do-any-javascript-task-with-jquery-html-css.jpg"
              alt=""
            />
          </Slide>
          <h2 className="font-bold text-2xl my-5">About this gig</h2>
          <p className="my-3 text-[16px]  text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta quo
            consequatur dignissimos ut ea temporibus vel, nesciunt voluptatum
            odio sed accusamus. Ut, sunt? Odit fugit quisquam labore laboriosam
            porro blanditiis, impedit veniam facilis deleniti saepe nemo
            provident sapiente? Soluta recusandae officia, consequuntur
            necessitatibus autem libero exercitationem nam quasi ab nisi
            suscipit ut eveniet asperiores itaque mollitia, tempora nulla optio
            amet quod? Laborum, nihil! Placeat hic ipsum cupiditate ipsam maxime
            veniam, voluptatum quam expedita voluptas, debitis nam sint
            quibusdam at nisi in nihil omnis officia illum, consectetur laborum
            veritatis? Quod temporibus modi tempore facere quas? Impedit commodi
            consequuntur nesciunt eius vero!
          </p>
          <div>
            <h2 className="font-bold text-2xl my-5">About the seller</h2>
            <div className="flex items-center mb-5">
              <img className="w-20 h-20 rounded-full" src="/man.png" alt="" />
              <div>
                <span>John doe</span>
                <div className="flex items-center gap-2">
                  <img className="w-4 " src="/star.png" alt="" />
                  <img className="w-4 " src="/star.png" alt="" />
                  <img className="w-4 " src="/star.png" alt="" />
                  <img className="w-4 " src="/star.png" alt="" />
                  <img className="w-4 " src="/star.png" alt="" />
                  <span className="text-yellow-500">5</span>
                </div>
                <button className="mt-2 border-[1px] border-black p-[6px] rounded-md font-semibold">
                  Contact Me
                </button>
              </div>
            </div>
            <div className="border-[1px] p-4 rounded-md">
              <div className="flex flex-wrap justify-between">
                <div className="flex w-[200px] flex-col gap-1 mb-[30px] font-semibold">
                  <span>From</span>
                  <span>USA</span>
                </div>
                <div className="flex w-[200px] flex-col gap-1 mb-[30px] font-semibold">
                  <span>Avg.response time</span>
                  <span>4 hours</span>
                </div>
                <div className="flex w-[200px] flex-col gap-1 mb-[30px] font-semibold">
                  <span>Language</span>
                  <span>English</span>
                </div>
                <div className="flex w-[200px] flex-col gap-1 mb-[30px] font-semibold">
                  <span>Member since</span>
                  <span>Aug 2022</span>
                </div>
                <div className="flex w-[200px] flex-col gap-1 mb-[30px] font-semibold">
                  <span>Last delivery</span>
                  <span>1 day</span>
                </div>
              </div>
              <hr className="mb-[20px] border-2" />
              <div>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias dolorum est inventore cum beatae optio fugiat
                  molestiae deleniti numquam dignissimos!
                </p>
              </div>
            </div>
          </div>
          <div className="my-10">
            <h2 className="font-bold text-2xl mb-5">Reviews</h2>
            <div className="">
              <div className="flex items-center mb-4">
                <img className="w-12 h-12 rounded-full" src="/man.png" alt="" />
                <div className="">
                  <span className="text-[14px] font-semibold">John Doe</span>
                  <div className="flex items-center gap-2">
                    <img
                      className="w-5 h-5 rounded-md"
                      src="/flag.webp"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <img className="w-4" src="/star.png" alt="" />
                <img className="w-4" src="/star.png" alt="" />
                <img className="w-4" src="/star.png" alt="" />
                <img className="w-4" src="/star.png" alt="" />
                <img className="w-4" src="/star.png" alt="" />
                <span className="text-yellow-500">5</span>
              </div>
              <p className="my-4 text-[14px] text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, rem! Eius perferendis incidunt voluptatum molestias
                dicta nihil autem fuga natus officiis perspiciatis, dolore sit
                itaque, aut soluta, numquam eveniet distinctio!
              </p>
              <div className="font-semibold flex gap-2 items-center">
                <span>Helpful?</span>

                <img className="w-5 h-5" src="/like.png" alt="" />
                <span>Yes</span>

                <img className="w-5 h-5" src="/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr className="my-[20px]" />
            <div className="mb-[20px]">
              <div className="flex items-center mb-4">
                <img className="w-12 h-12 rounded-full" src="/man.png" alt="" />
                <div className="">
                  <span className="text-[14px] font-semibold">John Doe</span>
                  <div className="flex items-center gap-2">
                    <img
                      className="w-5 h-5 rounded-md"
                      src="/flag.webp"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <img className="w-4" src="/star.png" alt="" />
                <img className="w-4" src="/star.png" alt="" />
                <img className="w-4" src="/star.png" alt="" />
                <img className="w-4" src="/star.png" alt="" />
                <img className="w-4" src="/star.png" alt="" />
                <span className="text-yellow-500">5</span>
              </div>
              <p className="my-4 text-[14px] text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, rem! Eius perferendis incidunt voluptatum molestias
                dicta nihil autem fuga natus officiis perspiciatis, dolore sit
                itaque, aut soluta, numquam eveniet distinctio!
              </p>
              <div className="font-semibold flex gap-2 items-center">
                <span>Helpful?</span>

                <img className="w-5 h-5" src="/like.png" alt="" />
                <span>Yes</span>

                <img className="w-5 h-5" src="/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr className="my-[20px]" />
            <div className="mb-[20px]">
              <div className="flex items-center mb-4">
                <img className="w-12 h-12 rounded-full" src="/man.png" alt="" />
                <div className="">
                  <span className="text-[14px] font-semibold">John Doe</span>
                  <div className="flex items-center gap-2">
                    <img
                      className="w-5 h-5 rounded-md"
                      src="/flag.webp"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <img className="w-4" src="/star.png" alt="" />
                <img className="w-4" src="/star.png" alt="" />
                <img className="w-4" src="/star.png" alt="" />
                <img className="w-4" src="/star.png" alt="" />
                <img className="w-4" src="/star.png" alt="" />
                <span className="text-yellow-500">5</span>
              </div>
              <p className="my-4 text-[14px] text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, rem! Eius perferendis incidunt voluptatum molestias
                dicta nihil autem fuga natus officiis perspiciatis, dolore sit
                itaque, aut soluta, numquam eveniet distinctio!
              </p>
              <div className="font-semibold flex gap-2 items-center">
                <span>Helpful?</span>

                <img className="w-5 h-5" src="/like.png" alt="" />
                <span>Yes</span>

                <img className="w-5 h-5" src="/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr className="my-[20px]" />
          </div>
        </div>
        <div className="w-[400px] h-[350px] border-2 p-4 sticky top-[150px] right-2 rounded-md">
          <div className="flex justify-between mb-3">
            <h1 className="font-bold">1 AI generated image</h1>
            <span className="text-2xl">$ 59.99</span>
          </div>
          <p className="text-gray-500 my-3 text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsam
            assumenda commodi, vel illo voluptate?
          </p>
          <div className="flex justify-between mb-3">
            <div className="flex items-center gap-2">
              <img className="w-5 h-5" src="/clock.png" alt="" />
              <span>2 days delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-5 h-5" src="/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="mb-3">
            <div className="flex items-center gap-2 text-green-600 font-light">
              <img className="w-4 h-4" src="/greencheck.png" alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="flex items-center gap-2 text-green-600 font-light">
              <img className="w-4 h-4" src="/greencheck.png" alt="" />
              <span>Artwork delivery</span>
            </div>
            <div className="flex items-center gap-2 text-green-600 font-light">
              <img className="w-4 h-4" src="/greencheck.png" alt="" />
              <span>Image upscaling</span>
            </div>
            <div className="flex items-center gap-2 text-green-600 font-light">
              <img className="w-4 h-4" src="/greencheck.png" alt="" />
              <span>Additional design</span>
            </div>
          </div>
          <button className="bg-green-600 text-white p-2 w-[100%] rounded-md font-semibold">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
