import {useState} from 'react';
import Axios from "axios";

// Contact Us Component
const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("https://localhost:7294/api/contactus", form)
      .then((res) => {
        console.log("Form submitted successfully:", res.data);
        setForm({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error("Form submission error:", err);
      }
    );
    alert("Thank you for contacting us! We will get back to you soon.");
  };
  return (
    <section className="contact-us">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required onChange={handleChange} />
        <input type="email" placeholder="Your Email" required onChange={handleChange} />
        <textarea placeholder="Your Message" required onChange={handleChange} ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactUs;