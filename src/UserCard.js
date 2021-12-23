import data from "./data.js"


export default function UserCard({userCard, cardIndex, displayCard}) {
   

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
            
        </div>
    )
}
