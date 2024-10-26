/* eslint-disable react/prop-types */
import ChosenPlayers from "./ChosenPlayers";

const SelectedSection = ({ setActiveComponent, selectedPlayers }) => {
  return (
    <section id="selected-players-container" className="w-full h-fit space-y-10">
      <div className="space-y-8">
        {selectedPlayers.map((player,index) => (
          <ChosenPlayers key={index} player={player}></ChosenPlayers>
        ))}
      </div>

      <div className="w-fit h-16 p-2 bg-[#FFF]/5 border border-[#131313] rounded-2xl flex justify-center items-center">
        <button
          onClick={() => setActiveComponent("AllCards")}
          className="btn font-bold text-[#131313] bg-[#E7FE29] shadow-inner rounded-xl"
        >
          Add More Player
        </button>
      </div>
    </section>
  );
};

export default SelectedSection;
