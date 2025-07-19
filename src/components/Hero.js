import { useEffect, useState } from "react";
import Axios from "axios";


// Hero Component
const Hero = () => {
  const [hero, setHero] = useState({});

  const fetchHero = async () => {
    Axios.get("https://localhost:7294/api/hero")
    .then((res) => {
      console.log("API Response:", res.data);
      setHero(res.data[0]);
    })
    .catch((err) => {
      console.error("API Error:", err);
    });
  };
  useEffect(() => {
    fetchHero();
  }, []);
  return (
    <section className="hero">
      <h1>{hero.title}</h1>
      <p>{hero.description}</p>
      <img src={hero.imageUrl ? "/" + hero.imageUrl.replace(/^.*wwwroot[\\/]/, "") : "/images/default.jpg"} alt={hero.title} />
      <section id="features"><button onClick={() => {
      const section = document.querySelector("#features");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }}>Get Started</button></section>
    </section>
  );
};

export default Hero;