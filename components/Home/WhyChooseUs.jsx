import { CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Industry Experienced Mentors",
      desc: "Learn from professionals with real project exposure and years of industry experience.",
    },
    {
      title: "Hands-On Practical Learning",
      desc: "Work on live assignments and real-world projects during the training.",
    },
    {
      title: "Globally Recognized Certifications",
      desc: "Earn certifications that are recognized and valued worldwide.",
    },
    {
      title: "100% Career Support",
      desc: "Get placement assistance, resume guidance, and interview preparation support.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        
        <h2 className="text-4xl font-bold mb-4">
          Why Students & Professionals Choose CCOG
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          We help learners build real-world skills, gain industry exposure,
          and achieve career success through practical training and expert mentorship.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <CheckCircle className="mx-auto mb-4 text-blue-600" size={40} />

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}