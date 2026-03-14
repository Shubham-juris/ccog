import React from "react";

const ContactHero = () => {
  return (
    <section
      className="relative py-36 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center text-white">

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Contact Us
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-gray-200 leading-relaxed">
          Have questions about our courses or need guidance for your
          learning journey? Our team is here to support you.
          Reach out anytime and we will respond as soon as possible.
        </p>

      </div>
    </section>
  );
};

export default ContactHero;