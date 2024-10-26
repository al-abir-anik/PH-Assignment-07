/* eslint-disable react/prop-types */

const Card = ({ card }) => {
  const {
    id,
    cover_img,
    profile_img,
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
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        className="rounded-xl"
      />
      <div className="space-y-1">
        <div>
          <img src="" />
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
          <button className="btn btn-accent bg-white border h-10 min-h-10">Choose Player</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
