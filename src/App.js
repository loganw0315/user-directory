
import './App.css';
import UserCard from './UserCard';
import data from "./data.js"
import CardManButtons from "./CardManButtons";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import { useState } from "react";

function App() {
  const [userCard, setUserCard] = useState(data[0])
  const [cardIndex, setCardIndex] = useState(0)

  const displayCard = (cardIndex) => {
    setUserCard(data[cardIndex])
    setCardIndex(cardIndex)
  }

  return (
    <div className="App">
      <header>
        <a href="./" style={{textDecoration:"none", color:"black"}}>Home</a>
      </header>
      <UserCard userCard={userCard} cardIndex={cardIndex} displayCard={displayCard}/>
      {cardIndex !== 0 && <PrevButton displayCard={displayCard} cardIndex={cardIndex}/>}
      <CardManButtons />
      {cardIndex !== (data.length - 1) && <NextButton displayCard={displayCard} cardIndex={cardIndex}/>}
            
    </div>
    
  );
}

export default App;
