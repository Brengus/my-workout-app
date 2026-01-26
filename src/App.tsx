import MainPage from './index.tsx';
import Popup from './components/Popup';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { useSelector } from "react-redux";
import { useEffect } from 'react';

function App() {

  const isDarkmode: boolean = useSelector((state: any) => state.darkmode.isDarkmode);
  useEffect(() => {
    if (isDarkmode) {
      document.body.classList.add("darkmode-body");
    } else {
      document.body.classList.remove("darkmode-body");
    }
  }, [isDarkmode])
  return (
    <>
      <Navigation />
      <MainPage />

      <Footer />
      <Popup />
    </>
  );
}

export default App;
