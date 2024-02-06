import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";
import { Hero } from "./components/Hero";
import { Brands } from "./components/Brands";
import { Features } from "./components/Features";
import { Customer } from "./components/Customer";
import { TourGuide } from "./components/TourGuide";
import { NewsLetter } from "./components/NewsLetter";

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <Features />
      <Customer />
      <TourGuide />
      <NewsLetter />
      <Footer />
    </>
  );
};
