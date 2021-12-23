export default function PrevButton({cardIndex, displayCard}) {

    const onClickHandler = (currentIndex) => {
        let newIndex = currentIndex - 1;
        displayCard(newIndex)
    }

    return (
        <div>
            <h2 onClick={()=>onClickHandler(cardIndex)} style={{cursor:"pointer"}}>&lt; Prev</h2>
        </div>
    )
}
