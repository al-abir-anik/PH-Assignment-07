import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

// eslint-disable-next-line react/prop-types
const AllCards = ({ selectedPlayer }) => {
  const [AllPlayers, setAllPlayers] = useState([]);

  useEffect(() => {
    fetch("/public/players.json")
      .then((res) => res.json())
      .then((data) => setAllPlayers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-10">
      {AllPlayers.map((player) => (
        <Card
          key={player.id}
          card={player}
          selectedPlayer={selectedPlayer}
        ></Card>
      ))}
    </div>
  );
};

export default AllCards;
