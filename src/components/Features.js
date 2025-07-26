import Axios from "axios";
import { useEffect, useState } from "react";

// Feature Component
const Features = () => {

  const [features, setFeatures] = useState([]);

  const fetchFeatures = async () => {
    Axios.get("https://localhost:7294/api/features")
    .then((res) => {
      console.log("API Response:", res.data);
      setFeatures(res.data);
    })
    .catch((err) => {
      console.error("API Error:", err);
    });
  };
  useEffect(() => {
    fetchFeatures();
  }, []);
  return (
    <section className="features">
      <h2>Our Features</h2>
      {features.map((feature, idx) => (
      <div className="feature-item" key={feature.id || idx}>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
        <img src={feature.imageUrl.replace(/^.*wwwroot[\\/]/, "")} alt={feature.title} />
      </div>
    ))}
    </section>
  );
};

export default Features;