import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer/Footer";
import { Hero } from "./components/Hero";
import { Brands } from "./components/Brands";
import { Features } from "./components/Features";
import { Customer } from "./components/Customer";
import { TourGuide } from "./components/TourGuide";
import { NewsLetter } from "./components/NewsLetter";
import { Destination } from "./components/Destinations/Destination";
import { BackToTop } from "./components/BackToTop";

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <Features />
      <Destination />
      <Customer />
      <TourGuide />
      <NewsLetter />
      <Footer />
      <BackToTop />
    </>
  );
};
