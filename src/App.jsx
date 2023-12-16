import Announcement from "./assets/components/Announcement_bar/Announcement";
import Header from "./assets/components/header/Header";
import Navigation from "./assets/components/nav/Navigation";
import Hero from "./assets/components/hero/Hero";
import Services_hero from "./assets/components/hero/Services_hero";
function App() {
  return (
    <>
      {/* Announcement bar */}
      <Announcement />
      {/* End Announcement bar */}
      {/* Logo, number and request appointment */}
      <Header />
      {/* ENd Logo, number and request appointment */}
      {/* Menu */}
      <Navigation />
      {/* End Menu */}
      {/* Hero */}
      <Hero />
      {/* End Hero */}
      <Services_hero />
      {/* Hero services */}
      {/* End Hero services */}
    </>
  );
}

export default App;
