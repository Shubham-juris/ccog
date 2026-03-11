export default function WhyChooseUs() {
  const features = [
    "Industry Experienced Mentors With Real Project Exposure",
    "Hands-On Practical Learning With Live Assignments",
    "Globally Recognized Certification Programs",
    "100% Career Support & Placement Assistance",
  ];

  return (
    <section className="py-24 bg-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16">
          Why Students And Professionals Choose CCOG For Career Growth
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-gray-100 rounded-xl shadow-sm"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}