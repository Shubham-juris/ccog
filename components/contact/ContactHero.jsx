import React from "react";

const ContactHero = () => {
  return (
    <section className="relative py-32 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center">
      
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center text-white">

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Contact Us
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-gray-200">
          Have questions about our courses or need guidance for your
          learning journey? Our team is here to help you.
          Reach out to us anytime and we will get back to you
          as soon as possible.
        </p>

      </div>

    </section>
  );
};

export default ContactHero;