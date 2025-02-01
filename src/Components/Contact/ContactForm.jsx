import React, { useRef, useState } from "react";
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_cqld0mm", // Replace with your EmailJS Service ID
        "template_wek3utq", // Replace with your EmailJS Template ID
        formRef.current,
        "mnaDQbeYJp5m4-bu-" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Email sent successfully!");
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          console.log("Email failed:", error.text);
          alert("Failed to send email. Try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Page Heading */}
      <h2 className="text-4xl font-bold text-center text-white mb-6">
        Contact Me
      </h2>
      <p className="text-center text-lg text-gray-300 mb-8">
        Have a question or want to work together? Drop me a message!
      </p>

      {/* Contact Form */}
      <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          {/* User Email */}
          <div>
            <label className="block text-white text-lg font-semibold mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message Box */}
          <div>
            <label className="block text-white text-lg font-semibold mb-2">
              Your Message
            </label>
            <textarea
              name="message"
              required
              placeholder="Enter your message"
              rows="5"
              className="w-full px-4 py-3 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold py-3 rounded-md hover:opacity-90 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Contact Information */}
      <div className="mt-12 text-center text-white">
        <h3 className="text-2xl font-semibold mb-4">Other Ways to Connect</h3>
        <p className="text-lg mb-2">📞 Phone: +880 1869943362</p>
        <p className="text-lg mb-2">📧 Email: srabonshakhawat@gmail.com</p>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/shakayet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl transition-transform transform hover:scale-125"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/srabon-shakhawat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl transition-transform transform hover:scale-125"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/srabon.shakhawat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl transition-transform transform hover:scale-125"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
