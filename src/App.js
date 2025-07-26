import Hero from "./components/Hero";
import Features from "./components/Features";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import Footer from "./components/Footer";


// Main App Component
const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <AboutUs />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
