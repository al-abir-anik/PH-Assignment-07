/* eslint-disable react/prop-types */

const ChosenPlayers = ({ player, handleRemoveplayer }) => {
  return (
    <div className="h-36 p-10 border border-[#131313]/10 rounded-2xl flex justify-between items-center gap-3">
      <div className="avatar">
        <div className="w-24 mr-5 rounded-xl">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="w-11/12 flex justify-between items-center">
        <div className="space-y-2">
          <p className="text-xl font-semibold text-[#131313]">{player.name}</p>
          <p className="font-medium text-[#131313]/60">{player.role}</p>
        </div>
        <button onClick={() => handleRemoveplayer(player.id)} className="btn">
          delete
        </button>
      </div>
    </div>
  );
};

export default ChosenPlayers;
