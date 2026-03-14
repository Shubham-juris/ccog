import { GraduationCap, Briefcase, Award } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap size={36} className="text-blue-600" />,
      title: "Practical Learning",
      desc: "Structured programs focused on real-world skills and hands-on experience."
    },
    {
      icon: <Briefcase size={36} className="text-blue-600" />,
      title: "Career-Focused Training",
      desc: "Courses designed to prepare students for industry job requirements."
    },
    {
      icon: <Award size={36} className="text-blue-600" />,
      title: "Industry Certification",
      desc: "Globally recognized certifications to boost your professional profile."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center max-w-6xl">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Empowering Students With Real Skills & Career Opportunities
        </h2>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-16">
          At CCOG, we are committed to delivering structured and high-quality
          education that bridges the gap between academic learning and
          real-world industry requirements. Our programs focus on practical
          knowledge, professional skills, and globally recognized certification
          that help students build successful careers.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="mb-4 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}