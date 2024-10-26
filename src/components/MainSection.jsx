import AllCards from "./AllCards";

const MainSection = () => {
  return (
    <main className="w-3/4 mx-auto my-10 pb-10 space-y-10">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-[#131313]">Available Players</h3>
        <ul className="menu menu-vertical lg:menu-horizontal bg-white rounded-box py-2 border border-[#131313]/10 space-x-3">
          <li className="text-[#131313] font-bold text-base  rounded-lg bg-[#E7FE29]"><a>Available</a></li>
          <li className="text-[#131313]/60 text-base rounded-lg"><a>Selected (0)</a></li>
        </ul>
      </div>
      <AllCards></AllCards>
    </main>
  );
};

export default MainSection;
