import React from "react";

const ContactForm = () => {
  return (
    <section className="py-24">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Send Us a Message
          </h2>

          <p className="text-gray-600">
            Fill out the form below and we will contact you soon.
          </p>
        </div>

        <form className="bg-white p-10 rounded-xl shadow space-y-6">

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Your Name"
              className="border p-3 rounded-lg w-full"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="border p-3 rounded-lg w-full"
            />

          </div>

          <input
            type="text"
            placeholder="Subject"
            className="border p-3 rounded-lg w-full"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="border p-3 rounded-lg w-full"
          ></textarea>

          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
};

export default ContactForm;