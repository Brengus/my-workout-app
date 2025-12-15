
import Hero from "./components/Hero";
import RunningLine from './components/RunningLine';
import CardSet from './components/CardSet';
import MainHero from './components/MainHero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';

function MainPage() {
    return (
        <>
            <MainHero />
            <Hero />
            <AboutUs />
            <RunningLine />
            <Services />
            <CardSet />
        </>
    )
}

export default MainPage;