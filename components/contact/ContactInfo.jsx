import React from "react";

const ContactInfo = () => {
  const contacts = [
    {
      title: "Serbia Office",
      email: "serbia@company.com",
      phone: "+1 587 800 4567",
      location: "Belgrade, Serbia",
    },
    {
      title: "Albania Office",
      email: "albania@company.com",
      phone: "+1 403 900 1122",
      location: "Tirana, Albania",
    },
    {
      title: "Malta Office",
      email: "malta@company.com",
      phone: "+1 825 600 7788",
      location: "Valletta, Malta",
    },
    {
      title: "Romania Office",
      email: "romania@company.com",
      phone: "+1 780 500 3344",
      location: "Bucharest, Romania",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get In Touch
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            You can contact our offices through the following channels.
            Our team is always ready to assist you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {contacts.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow text-center">

              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 mb-2">
                <strong>Email:</strong> {item.email}
              </p>

              <p className="text-gray-600 mb-2">
                <strong>Phone:</strong> {item.phone}
              </p>

              <p className="text-gray-600">
                <strong>Location:</strong> {item.location}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ContactInfo;