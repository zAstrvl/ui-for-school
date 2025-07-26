import Axios from "axios";
import { useEffect, useState } from "react";
import { apiUrl } from "../constants";

// About Us Component
const AboutUs = () => {
  const [aboutUs, setAboutUs] = useState({});

  const fetchAboutUs = async () => {
    Axios.get(`${apiUrl}/api/aboutus`)
      .then((res) => {
        console.log("API Response:", res.data); // Gelen veriyi kontrol edin
        setAboutUs(res.data[0]);
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  };
  useEffect(() => {
    fetchAboutUs();
  }, []);

  return (
    <section className="about-us">
      <h2>{aboutUs.title}</h2>
      <p>{aboutUs.description}</p>
    </section>
  );
};

export default AboutUs;
