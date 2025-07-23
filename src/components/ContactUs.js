import { useState } from "react";
import Axios from "axios";

// Contact Us Component
const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", form);

    try {
      const res = await Axios.post("https://localhost:7294/api/mail", form);
      console.log("Form submitted successfully:", res.data);
      setForm({ name: "", email: "", message: "" });
      alert("Thank you for contacting us! We will get back to you soon.");
    } catch (err) {
      console.error("Form submission error:", err);
      alert(
        "Sorry, there was an error sending your message. Please try again."
      );
    }
  };
  return (
    <section className="contact-us">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Your Name"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="Your Email"
          required
          onChange={handleChange}
        />
        <textarea
          name="message"
          value={form.message}
          placeholder="Your Message"
          required
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactUs;
