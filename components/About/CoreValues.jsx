export default function CoreValues() {
  const values = [
    "Integrity And Professional Ethics In Every Program",
    "Commitment To Practical And Industry-Oriented Learning",
    "Continuous Innovation In Training Methodologies",
    "Student-Centric Career Development Approach",
  ];

  return (
    <section className="py-24 bg-gray-100 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16">
          Our Core Values That Define Organizational Excellence
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md">
              {value}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}