import Subscription from "./Subscription";

const Footer = () => {
  return (
    <footer className="relative bg-[#06091A]">
      <div>
        <div className="w-full h-60 bg-white"></div>
        <Subscription></Subscription>
        <div className="w-full h-60 "></div>
      </div>
      <div className="w-3/4 mx-auto flex flex-col justify-center items-center gap-16">
        <img src="/public/logo-footer.png" />
        <div className="grid grid-cols-3 gap-32">
          <div className="w-auto space-y-3">
            <h5 className="font-semibold text-white">About Us</h5>
            <p className="text-white/60 w-72">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h5 className="font-semibold text-white mb-2">Quick Links</h5>
            <a className="text-white/60">Home</a>
            <a className="text-white/60">Services</a>
            <a className="text-white/60">About</a>
            <a className="text-white/60">Contact</a>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-white">Subscribe</h3>
            <p className="text-white/60">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Enter your email"
                className="input w-full max-w-xs border border-[#131313]/15"
              />
              <input type="submit" value="Subscribe" className="btn" />
            </div>
          </div>
        </div>
        <p className="text-white/60 w-full h-24 flex justify-center items-center border-t border-white/15">
          @2024 Your Company All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
