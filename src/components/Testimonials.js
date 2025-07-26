import { useState, useEffect } from "react";
import Axios from "axios";
import { apiUrl } from "../constants";
// Testimonials Component
const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  const fetchTestimonials = async () => {
    Axios.get(`${apiUrl}/api/testimonials`)
      .then((res) => {
        console.log("API Response:", res.data);
        setTestimonials(res.data);
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  };
  useEffect(() => {
    fetchTestimonials();
  }, []);
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      {testimonials.map((testimonial, idx) => (
        <div className="testimonial" key={testimonial.id || idx}>
          <p>{testimonial.description}</p>
          <p>{testimonial.title}</p>
        </div>
      ))}
    </section>
  );
};

export default Testimonials;
