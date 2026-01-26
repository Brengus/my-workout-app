import "../css/services.css";
import { useSelector } from "react-redux";

const objectArray = [
    { title: "Bathing", image: "../servicesimg/bath-tub.png", description: "Using natural shampoos to suit a variety of coats, dogs enjoy the comfort of our purpose built hydro-bath." },
    { title: "Clipping", image: "../servicesimg/trimmer.png", description: "We have a range of different blade lengths depending on how long or short you would like." },
    { title: "Safe Drying", image: "../servicesimg/dryer.png", description: "Each dog is dried by hand using a turbo blast drier enabling us to see each part of your dogs skin." },
    { title: "Paws & Claws", image: "../servicesimg/paw.png", description: "Nails are clipped, and matted hair in the pads removed. This prevents build up of mud and other harmful debris." },
    { title: "Ear Cleaning", image: "../servicesimg/ears.png", description: "We pride ourselves on only using ear cleaning products that contain natural ingredients for each dog we groom." },
    { title: "Tick Removal", image: "../servicesimg/insect.png", description: "Ticks are super easy to pick up, if you notice any on your dog then pop in. We are always happy to remove." },
    { title: "Face Trim", image: "../servicesimg/dog.png", description: "If you can't see a dogs eyes they cannot see yours either! Don't wait for your next appt, pop in for a trim." },
    { title: "Spritz", image: "../servicesimg/spray.png", description: "Dogs can be sprayed with a coat conditioning spray with a gorgeous scent to make them smell divine!" },
]

function Services() {
    const isDarkmode: boolean = useSelector((state: any) => state.darkmode.isDarkmode)

    return (
        <>
            <div id="services" className={`service-title ${isDarkmode ? "service-title-dark" : ""}`}>Services</div>
            <div className="services">
                {objectArray.map((service, index) => (
                    <div key={index} className={`service-card ${isDarkmode ? "service-card-dark" : ""}`}>
                        <img src={service.image} alt={service.title} style={{ gridArea: "image" }} />
                        <h3 style={{ gridArea: "title" }}>{service.title}</h3>
                        <p style={{ gridArea: "description" }}>{service.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Services;