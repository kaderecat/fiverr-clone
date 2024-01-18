const Footer = () => {
  return (
    <div className="flex justify-center flex-col items-center ">
      <div className="w-[1200px] flex justify-between items-start  ">
        <div className="flex flex-col  gap-3 text-gray-600">
          <h2 className="font-bold">Categories</h2>
          <span>Graphics & Design</span>
          <span>Digital Marketing</span>
          <span>Writing & Translation</span>
          <span>Video & Animation</span>
          <span>Music & Audio</span>
          <span>Programming & Tech</span>
          <span>Data</span>
          <span>Business</span>
          <span>Lifestyle</span>
          <span>Photography</span>
          <span>Sitemap</span>
        </div>
        <div className="flex flex-col justify-center gap-3">
          <h2 className="font-bold text-gray-700">About</h2>
          <span>Press & News</span>
          <span>Partnerships</span>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Intellectual Property Claims</span>
          <span>Investor Relations</span>
          <span>Contact Sales</span>
        </div>
        <div className="flex flex-col justify-center gap-3">
          <h2 className="font-bold text-gray-700">Support</h2>
          <span>Help & Support</span>
          <span>Trust & Safety</span>
          <span>Selling on Liverr</span>
          <span>Buying on Liverr</span>
        </div>
        <div className="flex flex-col justify-center gap-3">
          <h2 className="font-bold text-gray-700">Community</h2>
          <span>Customer Success Stories</span>
          <span>Community hub</span>
          <span>Forum</span>
          <span>Events</span>
          <span>Blog</span>
          <span>Influencers</span>
          <span>Affiliates</span>
          <span>Podcast</span>
          <span>Invite a Friend</span>
          <span>Become a Seller</span>
          <span>Community Standards</span>
        </div>
        <div className="flex flex-col justify-center gap-3">
          <h2 className="font-bold text-gray-700">More From Fiverr</h2>
          <span>Liverr Business</span>
          <span>Liverr Pro</span>
          <span>Liverr Logo Maker</span>
          <span>Liverr Guides</span>
          <span>Get Inspired</span>
          <span>Liverr Select</span>
          <span>ClearVoice</span>
          <span>Liverr Workspace</span>
          <span>Learn</span>
          <span>Working Not Working</span>
        </div>
      </div>
      <hr className="w-[1200px] my-8" />
      <div className="w-[1200px] flex mb-8">
        <div className="flex justify-start items-center gap-4 w-[50%]">
          <h2 className="text-[36px] font-bold text-gray-600">liverr</h2>
          <span className="text-gray-300 ">
            © Liverr International Ltd. 2023
          </span>
        </div>
        <div className="flex w-[50%] justify-end gap-4 items-center">
          <div className="flex  items-center gap-4">
            <img className="w-6 h-6" src="../../public/twitter.png" alt="" />
            <img className="w-6 h-6" src="../../public/facebook.png" alt="" />
            <img className="w-6 h-6" src="../../public/linkedin.png" alt="" />
            <img className="w-6 h-6" src="../../public/pinterest.png" alt="" />
            <img className="w-6 h-6" src="../../public/instagram.png" alt="" />
          </div>
          <div className="flex justify-center items-center gap-4">
            <img src="../../public/language.png" alt="" />
            <span>English</span>
          </div>
          <div className="flex justify-center items-center gap-4">
            <img src="../../public/coin.png" alt="" />
            <span>USD</span>
          </div>
          <img className="w-6 h-6"  src="../../public/accessibility.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
