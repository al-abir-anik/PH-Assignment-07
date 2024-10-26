/* eslint-disable react/prop-types */

const Card = ({ card, selectedPlayer }) => {
  const {
    cover_img,
    name,
    country_name,
    role,
    rating,
    batting_style,
    bowling_style,
    price,
  } = card;

  return (
    <div className="card bg-base-100 w-auto p-8 border border-[#131313]/10 space-y-6">
      <img src={cover_img} className="rounded-xl h-60 bg-cover" />
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-8 rounded-full">
              <img src="https://i.ibb.co.com/KVvr7bw/logo.png" />
            </div>
          </div>
          <p className="text-xl font-semibold text-[#131313]">{name}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base text-[#131313]/50">{country_name}</p>
          <p className="w-fit h-9 px-4 py-2  rounded-lg bg-[#131313]/5 text-[#131313]">
            {role}
          </p>
        </div>
      </div>
      <hr />
      <div className="space-y-3">
        <p>Rating: {rating}</p>
        <div className="flex justify-between items-center">
          <p>{batting_style}</p>
          <p>{bowling_style}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Price: ${price}</p>
          <button
            onClick={() => selectedPlayer(card)}
            className="btn btn-accent bg-white border h-10 min-h-10"
          >
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
