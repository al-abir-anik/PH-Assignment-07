import { useState } from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [MyBalance, setMyBalance] = useState(0);
  const [ActiveComponent, setActiveComponent] = useState("AllCards");
  const [SelectedPlayers, setSelectedPlayers] = useState([]);

  const handleFreeCredit = () => {
    setMyBalance(MyBalance + 8020000);
    toast.success("Coin added to account successfully");
  };

  const handleSelectedPlayer = (player) => {
    if (SelectedPlayers.length < 6) {
      if (
        !SelectedPlayers.some(
          (selectedPlayer) => selectedPlayer.id === player.id
        )
      ) {
        if (MyBalance >= player.price) {
          setSelectedPlayers((prevPlayers) => [...prevPlayers, player]);
          toast.success(`${player.name} has been added successfully!`);
          setMyBalance(MyBalance - player.price);
        } else {
          toast.error("Insufficient balance to select this player.");
        }
      } else {
        toast.error("You have already chosen this player.");
      }
    } else {
      toast.error("You can only choose up to 6 players.");
    }
  };

  const handleRemoveplayer = (playerId) => {
    const playerToRemove = SelectedPlayers.find(({ id }) => id === playerId);
    setSelectedPlayers((prevPlayers) =>
      prevPlayers.filter((p) => p.id !== playerId)
    );
    setMyBalance((prevBalance) => prevBalance + playerToRemove.price);
    toast.info("Player removed.");
  };

  return (
    <>
      <Header balance={MyBalance} handleFreeCredit={handleFreeCredit}></Header>
      <MainSection
        ActiveComponent={ActiveComponent}
        setActiveComponent={setActiveComponent}
        handleSelectedPlayer={handleSelectedPlayer}
        SelectedPlayers={SelectedPlayers}
        setSelectedPlayers={setSelectedPlayers}
        handleRemoveplayer={handleRemoveplayer}
      ></MainSection>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
