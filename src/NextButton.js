export default function NextButton({cardIndex, displayCard}) {

    const onClickHandler = (currentIndex) => {
        let newIndex = currentIndex + 1;
        displayCard(newIndex)
    }

    return (
        <div>
            <h2 onClick={()=>onClickHandler(cardIndex)} style={{cursor:"pointer"}}>Next &gt;</h2>
        </div>
    )
}
