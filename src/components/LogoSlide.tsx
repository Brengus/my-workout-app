import "../css/logoSlide.css"

interface Name {
    className: string
}

const LogoSlide: React.FC<Name> = ({ className }) => {
    return (
        <div className={`logos-slide ${className}`}>
            <img src="../runningimg/advance.png" alt="america picture" />
            <img src="../runningimg/carnilove.png" alt="america picture" />
            <img src="../runningimg/monge-logo.jpg" alt="america picture" />
            <img src="../runningimg/purina.svg" alt="america picture" />
            <img src="../runningimg/happydog.webp" alt="america picture" />
        </div>
    )
}

export default LogoSlide