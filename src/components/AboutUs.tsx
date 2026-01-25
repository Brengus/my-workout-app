import "../css/aboutus.css";

function AboutUs() {
    const obj = {
        header: "About Us",
        headline: "It's a Spa Day for Your Best Friend.",
        subheadline: "Where wagging tails meet top-tier styling.",
        ourStoryTitle: "Our Story",
        ourStory: "Founded on the belief that grooming shouldn't be scary, Molly's was born out of a simple necessity: finding a groomer who treats pets like family. We realized that a great haircut is useless if the dog is stressed. That's why we've built a sanctuary where patience is our priority and treats are always on the house.",
        ourPhilosophyTitle: "Our Philosophy",
        ourPhilosophy: "We don't believe in \"rushing the process.\" Every snout, paw, and tail is different. Whether your pup is a nervous nelly or a drama queen, we take the time to ensure they feel safe, comfortable, and loved before the clippers ever turn on."
    };

    return (
        <section id="aboutus" className="aboutus-main">
            <div className="aboutus-submain">
                {/* Header Section */}
                <div className="aboutus-header-group">
                    <div className="headline">{obj.headline}</div>
                    <h1 className="aboutus-header">{obj.header}</h1>
                    <p className="subheadline">{obj.subheadline}</p>
                </div>

                {/* Content Section */}
                <div className="about-content-grid">

                    {/* Story Card */}
                    <div className="about-card">
                        <div className="title-separator">
                            <div className="about-titles">{obj.ourStoryTitle}</div>
                            <div className="separator"></div>
                        </div>
                        <p className="about-text">{obj.ourStory}</p>
                    </div>

                    {/* Philosophy Card */}
                    <div className="about-card">
                        <div className="title-separator">
                            <div className="about-titles">{obj.ourPhilosophyTitle}</div>
                            <div className="separator"></div>
                        </div>
                        <p className="about-text">{obj.ourPhilosophy}</p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default AboutUs;