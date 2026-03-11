import React from "react";

const CourseBenefits = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose Our Courses
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Our courses are carefully designed to help students and professionals
            build strong technical skills and gain real industry experience.
            We focus on practical learning, real-world projects, and structured
            training programs that help you become job-ready in today’s
            competitive technology industry.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Benefit 1 */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">
              Expert Instructors
            </h3>

            <p className="text-gray-600">
              Learn directly from experienced industry professionals who
              have worked on real-world projects and understand the latest
              technology trends. Our instructors guide you step by step
              throughout the learning journey.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">
              Hands-On Projects
            </h3>

            <p className="text-gray-600">
              Every course includes practical projects that help you apply
              your knowledge in real-world scenarios. These projects also
              help you build a strong portfolio that showcases your
              development skills.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">
              Structured Learning
            </h3>

            <p className="text-gray-600">
              Our courses follow a structured learning path from beginner
              fundamentals to advanced concepts. This ensures that students
              understand each topic clearly before moving to the next level.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">
              Flexible Learning
            </h3>

            <p className="text-gray-600">
              Learn at your own pace with flexible course schedules,
              recorded lessons, and practical assignments. This allows
              students and professionals to manage learning alongside
              their work or studies.
            </p>
          </div>

          {/* Benefit 5 */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">
              Community Support
            </h3>

            <p className="text-gray-600">
              Join a growing community of learners where you can collaborate,
              ask questions, share ideas and receive mentorship from
              instructors and fellow students.
            </p>
          </div>

          {/* Benefit 6 */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">
              Certification
            </h3>

            <p className="text-gray-600">
              After successfully completing the course, you will receive
              a professional certification that helps demonstrate your
              skills and enhances your resume for career opportunities.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CourseBenefits;