
const Subscription = () => {
  return (
    <div className="w-10/12 p-6 bg-white/15 border-2 rounded-3xl">
      <div className="w-full h-80 bg-[url('/public/bg-shadow.png')] bg-no-repeat bg-cover rounded-3xl flex flex-col items-center justify-center gap-4">
        <h3 className="text-3xl font-bold text-[#131313]">Subscribe to our Newsletter</h3>
        <p className="text-lg">Get the latest updates and news right in your inbox!</p>
        <div className="flex gap-3">
        <input type="text" placeholder="Enter your email" className="input w-full max-w-xs border border-[#131313]/15"/>
        <input type="submit" value="Subscribe" className="btn"/>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
