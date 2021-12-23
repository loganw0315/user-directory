import CardManButtons from "./CardManButtons";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import data from "./data.js"
import { useState } from "react";

export default function UserCard() {
    const [userCard, setUserCard] = useState(data[0])
    const [cardIndex, setCardIndex] = useState(3)

    const displayCard = (cardIndex) => {
        setUserCard(data[cardIndex])
        setCardIndex(cardIndex)
    }

    console.log(data.length);

    return (
        <div className="user-card">
            <h1>{cardIndex+1}/{data.length}</h1>
            <h1>{userCard.name.first} {userCard.name.last}</h1>
            <h2>From:
                <span> {userCard.city}, {userCard.country}</span>
            </h2>
            <h2>Employer:
                <span> {userCard.employer}</span>
            </h2>
            <h2>Favorite Movies:</h2>
            <ol>
                <li>{userCard.favoriteMovies[0]}</li>
                <li>{userCard.favoriteMovies[1]}</li>
                <li>{userCard.favoriteMovies[2]}</li>
            </ol>
            {cardIndex !== 0 && <PrevButton displayCard={displayCard} cardIndex={cardIndex}/>}
            <CardManButtons />
            {cardIndex !== (data.length - 1) && <NextButton displayCard={displayCard} cardIndex={cardIndex}/>}
            
        </div>
    )
}
