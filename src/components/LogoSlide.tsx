import "../css/logoSlide.css"

interface Name {
    className: string
}

const LogoSlide: React.FC<Name> = ({ className }) => {
    return (
        <div className={`logos-slide ${className}`}>
            <img src="../runningimg/advance.png" alt="america" />
            <img src="../runningimg/carnilove.png" alt="america" />
            <img src="../runningimg/monge-logo.jpg" alt="america" />
            <img src="../runningimg/purina.svg" alt="america" />
            <img src="../runningimg/happydog.webp" alt="america" />
        </div>
    )
}

export default LogoSlide