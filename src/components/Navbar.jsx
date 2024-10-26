// eslint-disable-next-line react/prop-types
const Navbar = ({balance}) => {
  return (
    <nav
      className="
     flex items-center justify-between h-20"
    >
      <a href="#">
        <img src="/public/logo.png" alt="logo" className="w-16"/>
      </a>
      <div className="flex items-center gap-12">
        <a href="#" className="text-[#131313]/70">Home</a>
        <a href="#" className="text-[#131313]/70">Fixture</a>
        <a href="#" className="text-[#131313]/70">Teams</a>
        <a href="#" className="text-[#131313]/70">Schedules</a>
        <div className="flex items-center justify-center gap-2 w-auto h-12 px-5 border border-[#131313]/10 rounded-xl">
          <p className="text-base font-semibold text-[#131313]"> {balance} Coin</p>
          <img src="/public/coin.png" className="w-5"/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
