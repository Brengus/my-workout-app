import "../css/cards.css"

interface Cardprops {
    icon: string
    data: string
    text: string
}

const Card: React.FC<Cardprops> = ({ icon, data, text }) => {


    return (
        <div className="main-card">
            <img src={icon} alt="icon" className="image" />
            <div className="data">{data}</div>
            <div className="text">{text}</div>
        </div>
    )
}

export default Card