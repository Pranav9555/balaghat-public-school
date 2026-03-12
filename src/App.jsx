import "./App.css";
import About from "./components/About";
import Facilities from "./components/Facilities";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { FloatingWhatsApp } from "@digicroz/react-floating-whatsapp";
import Location from "./components/Location";
import Gallery from "./components/Gallery";
import WhyChoose from "./components/WhyChoose";

export default function App() {
  return (
    <>
      <Header />

      <FloatingWhatsApp
        phoneNumber="9422932722"
        accountName="Balaghat Public School"
        avatar="/Balaghat_logo.jpeg"
        chatMessage="Welcome to Balaghat Public School"
        statusMessage="Typically replies within a minute"
        allowClickAway={true}
        placeholder="Type a message..."
      />
      <Hero />
      <About />
      <Facilities />
      <WhyChoose />
      <Gallery />
      <Location />
      <Footer />
    </>
  );
}
