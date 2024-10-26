import { useState } from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [MyBalance, setMyBalance] = useState(0);

  const handleFreeCredit = () => {
    setMyBalance(MyBalance + 8020000);
  };

  const [ActiveComponent, setActiveComponent] = useState("AllCards");
  const [SelectedPlayers, setSelectedPlayers] = useState([]);

  const handleSelectedPlayer = (player) => {
    if (SelectedPlayers.length < 6) {
      if (
        !SelectedPlayers.some(
          (selectedPlayer) => selectedPlayer.id === player.id
        )
      ) {
        setSelectedPlayers((prevPlayers) => [...prevPlayers, player]);

        toast.success(`${player.name} has been added successfully!`);
        
        setMyBalance(MyBalance - player.price);
      } else {
        toast.error("You have already chosen this player.");
      }
    } else {
      toast.error("You can only choose up to 6 players.");
    }
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
      ></MainSection>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
