import Card from "./Cards";
import "../css/cardset.css"

function CardSet() {
    return (
        <div className="main-cardset">
            <Card icon="../star.svg" data="4.86" text="Out of 5 stars from 3896 reviews on google platform" />
            <Card icon="../paw.svg" data="364" text="Client testimonials received in year 2023" />
            <Card icon="../supply.svg" data="45M+" text="Revenue generated through new projects & marketing" />
        </div>
    )
}

export default CardSet;