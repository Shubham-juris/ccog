import React from "react";

const ContactMap = () => {
  const locations = [
    { name: "Serbia", map: "https://maps.google.com/maps?q=Serbia&t=&z=5&ie=UTF8&iwloc=&output=embed" },
    { name: "Albania", map: "https://maps.google.com/maps?q=Albania&t=&z=6&ie=UTF8&iwloc=&output=embed" },
    { name: "Malta", map: "https://maps.google.com/maps?q=Malta&t=&z=6&ie=UTF8&iwloc=&output=embed" },
    { name: "Romania", map: "https://maps.google.com/maps?q=Romania&t=&z=6&ie=UTF8&iwloc=&output=embed" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Locations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {locations.map((loc, index) => (
            <div key={index} className="bg-white rounded-xl shadow overflow-hidden">
              
              <h3 className="text-xl font-semibold text-center py-4">
                {loc.name}
              </h3>

              <div className="w-full h-[350px]">
                <iframe
                  className="w-full h-full"
                  src={loc.map}
                  loading="lazy"
                ></iframe>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ContactMap;