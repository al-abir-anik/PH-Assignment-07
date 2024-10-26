import Navbar from "./Navbar";

// eslint-disable-next-line react/prop-types
const Header = ({balance, handleFreeCredit}) => {
  

  return (
    <header className="w-10/12 h-[44rem] mx-auto flex flex-col justify-center gap-8">
      <Navbar balance={balance}></Navbar>
      <div className="h-[34rem] w-full pb-5 bg-[url('/public/bg-shadow.png')] bg-no-repeat bg-cover bg-[#131313] rounded-3xl border border-[#131313]/10 flex flex-col justify-center items-center gap-10">
        <img
          src="/public/banner-main.png"
          alt="banner-picture"
          className="w-64"
        />
        <div className="text-center space-y-3">
          <h3 className="text-[2.5rem] font-bold text-white">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h3>
          <p className="text-xl text-white/70">
            Beyond Boundaries Beyond Limits
          </p>
        </div>
        <div className="w-fit h-16 p-2 bg-[#FFF]/5 border border-[#E7FE29] rounded-2xl flex justify-center items-center">
          <button
            className="btn font-bold text-[#131313] bg-[#E7FE29] shadow-inner rounded-xl"
            onClick={handleFreeCredit}
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
