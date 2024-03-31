import React, { useState, useRef } from "react"; // Importing React hooks
import { motion } from "framer-motion"; // Importing motion components from Framer Motion library
import emailjs from "@emailjs/browser"; // Importing emailjs for sending emails

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// Functional component for rendering contact section
const Contact = () => {
  const formRef = useRef(); // Creating a reference for the form element
  const [form, setForm] = useState({
    // Creating state variables for form data and loading state
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // State variable to track loading state of form submission

  const handleChange = (e) => {
    // Function to handle form input changes
    // This function will be called when user types into any input field

    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    // Function to handle form submission
    // This function will be called when user submits the form

    e.preventDefault(); // Prevent the default form submission behavior

    setLoading(true); // Set loading state to true while sending the email

    // Use emailjs to send the email
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          // Data to be sent in the email
          from_name: form.name, // Sender's name
          to_name: "Anthony", // Receiver's name
          from_email: form.email, // Sender's email
          to_email: "afeng1122@gmail.com", // Receiver's email
          message: form.message, // Message content
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          // If email is sent successfully
          setLoading(false); // Set loading state to false
          alert("Thank you, I will get back to you as soon as possible!"); // Show success message

          // Clear the form fields after successful submission
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          // If there is an error sending the email
          setLoading(false); // Set loading state to false
          console.log(error); // Log the error to console
          alert("something went wrong!"); // Show error message
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      {/* Container for contact section */}
      {/* Left side containing contact form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)} // Framer Motion variant for animation
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl" // CSS classes for styling
      >
        {/* Title and subtitle */}
        <p className={styles.sectionSubText}>Get in touch!</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Form for user input */}
        <form
          ref={formRef} // Referencing the form element
          onSubmit={handleSubmit} // Handling form submission
          className="mt-12 flex flex-col gap-8" // CSS classes for styling
        >
          {/* Input field for name */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange} // Handling input changes
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6
              placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" // CSS classes for styling
            />
          </label>
          {/* Input field for email */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange} // Handling input changes
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6
              placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" // CSS classes for styling
            />
          </label>
          {/* Textarea for message */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange} // Handling input changes
              placeholder="What would you like to say?"
              className="bg-tertiary py-4 px-6
              placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" // CSS classes for styling
            />
          </label>
          {/* Submit button */}
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl" // CSS classes for styling
          >
            {loading ? "Sending..." : "Send"}{" "}
            {/* Displaying appropriate text based on loading state */}
          </button>
        </form>
      </motion.div>
      {/* Right side containing EarthCanvas component */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)} // Framer Motion variant for animation
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]" // CSS classes for styling
      >
        <EarthCanvas /> {/* Rendering EarthCanvas component */}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact"); // Exporting Contact component wrapped with SectionWrapper HOC
