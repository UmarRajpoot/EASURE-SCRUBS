import "./App.css";
import NavbarComp from "./components/NavbarComp";
import HeroSection from "./components/HeroSection";
import ShopByColor from "./components/ShopByColor";
import WomensTrending from "./components/WomensTrending";
import MensTrending from "./components/MensTrending";

function App() {
  return (
    <div>
      <NavbarComp />
      <HeroSection />
      <ShopByColor />
      <WomensTrending />
      <MensTrending />
    </div>
  );
}

export default App;
