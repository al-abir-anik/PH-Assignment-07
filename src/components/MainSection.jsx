/* eslint-disable react/prop-types */
import AllCards from "./AllCards";
import SelectedSection from "./SelectedSection";
import "react-toastify/dist/ReactToastify.css";

const MainSection = ({
  ActiveComponent,
  setActiveComponent,
  handleSelectedPlayer,
  SelectedPlayers,
  handleRemoveplayer,
}) => {
  return (
    <main className="w-3/4 mx-auto my-10 pb-5 space-y-10">
      <section className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-[#131313]">
          {ActiveComponent === "AllCards"
            ? "Available Players"
            : `Selected Player (${SelectedPlayers.length}/6)`}
        </h3>
        <ul className="menu menu-vertical lg:menu-horizontal bg-white rounded-box py-2 border border-[#131313]/10 space-x-3">
          <li
            onClick={() => setActiveComponent("AllCards")}
            className={`text-base rounded-lg font-bold  ${
              ActiveComponent === "AllCards"
                ? "text-[#131313]  bg-[#E7FE29]"
                : "text-[#131313]/60"
            }`}
          >
            <a>Available</a>
          </li>
          <li
            onClick={() => setActiveComponent("SelectedSection")}
            className={`text-base rounded-lg font-bold ${
              ActiveComponent === "SelectedSection"
                ? "text-[#131313]   bg-[#E7FE29]"
                : "text-[#131313]/60"
            }`}
          >
            <a>Selected ({SelectedPlayers.length})</a>
          </li>
        </ul>
      </section>

      <section>
        {ActiveComponent === "AllCards" && (
          <AllCards selectedPlayer={handleSelectedPlayer}></AllCards>
        )}
        {ActiveComponent === "SelectedSection" && (
          <SelectedSection
            setActiveComponent={setActiveComponent}
            selectedPlayers={SelectedPlayers}
            handleRemoveplayer={handleRemoveplayer}
          ></SelectedSection>
        )}
      </section>
    </main>
  );
};

export default MainSection;
