import Header from "../sections/header";
import Hero from "../sections/hero";
import LocationDateData from "../sections/location-date-data";
import ToGifts from "../sections/to-gifts";
import ConfirmAttendance from "../sections/confirm-attendance";
import Faq from "../sections/faq";
import Footer from "../sections/footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LocationDateData />
      <ToGifts />
      <ConfirmAttendance />
      <Faq />
      <Footer />
    </>
  );
}

export default Home;
