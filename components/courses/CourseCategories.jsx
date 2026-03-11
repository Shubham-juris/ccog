import React from "react";

const CourseCategories = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Explore Course Categories
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of technology courses that help students build
            real-world skills. Choose a category that matches your interest and
            start learning with structured modules and guided projects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">
              Frontend Development
            </h3>

            <p className="text-gray-600">
              Learn how to create modern responsive websites using HTML, CSS,
              JavaScript and frameworks like React. Understand UI principles
              and build interactive web interfaces.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">
              Backend Development
            </h3>

            <p className="text-gray-600">
              Master server-side programming with Node.js, Express, and
              databases like MongoDB. Learn API development and application
              architecture.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">
              Full Stack Development
            </h3>

            <p className="text-gray-600">
              Combine frontend and backend skills to build complete web
              applications using modern technologies like MERN stack.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">
              UI / UX Design
            </h3>

            <p className="text-gray-600">
              Learn design principles, wireframing, and tools like Figma to
              create beautiful and user-friendly digital experiences.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CourseCategories;