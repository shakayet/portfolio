import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

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
          Swal.fire({
            title: "Success!",
            text: "Email sent successfully!",
            icon: "success",
            confirmButtonText: "Cool",
            background: "#333",
            color: "#fff",
            confirmButtonColor: "#4CAF50",
          });
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          console.log("Email failed:", error.text);
          Swal.fire({
            title: "Error!",
            text: "Failed to send email. Try again.",
            icon: "error",
            confirmButtonText: "Okay",
            background: "#333",
            color: "#fff",
            confirmButtonColor: "#FF0000",
          });
          setLoading(false);
        }
      );
  };

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      {/* Page Heading */}
      <h2 className="text-4xl font-bold text-center text-white mb-6">
        📩 Get in Touch
      </h2>
      <p className="text-center text-lg text-gray-300 mb-8">
        Feel free to reach out. I'll get back to you as soon as possible!
      </p>

      {/* Contact Form */}
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
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
              className="w-full px-4 py-3 text-white bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-4 py-3 text-white bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        <h3 className="text-2xl font-semibold mb-4">📍 Address & Contact</h3>

        {/* Address Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <p className="text-lg mb-2">🏠 Tejgaon, Dhaka, Bangladesh</p>
          <p className="text-lg mb-2">📞 Phone: +880 1869943362</p>
          <p className="text-lg mb-2">📧 Email: srabonshakhawat@gmail.com</p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-6">
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
