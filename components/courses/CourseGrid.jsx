import React from "react";

const CourseGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Popular Courses
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most popular technology courses designed to help
            you learn practical skills and build real-world projects.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Course 1 */}
          <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">
              Full Stack Web Development
            </h3>

            <p className="text-gray-600 mb-6">
              This comprehensive course teaches you how to build modern web
              applications from scratch using HTML, CSS, JavaScript, React,
              Node.js and MongoDB.
            </p>

            <div className="text-sm text-gray-500 mb-6">
              <p><strong>Duration:</strong> 6 Months</p>
              <p><strong>Level:</strong> Beginner to Advanced</p>
            </div>

            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              View Details
            </button>
          </div>

          {/* Course 2 */}
          <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">
              React Frontend Development
            </h3>

            <p className="text-gray-600 mb-6">
              Learn how to build modern, scalable and fast user interfaces
              using React, hooks, state management and reusable components.
            </p>

            <div className="text-sm text-gray-500 mb-6">
              <p><strong>Duration:</strong> 3 Months</p>
              <p><strong>Level:</strong> Intermediate</p>
            </div>

            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              View Details
            </button>
          </div>

          {/* Course 3 */}
          <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">
              Backend Development with Node.js
            </h3>

            <p className="text-gray-600 mb-6">
              Understand server-side programming, REST APIs, authentication
              systems, and database integration with Node.js.
            </p>

            <div className="text-sm text-gray-500 mb-6">
              <p><strong>Duration:</strong> 4 Months</p>
              <p><strong>Level:</strong> Intermediate</p>
            </div>

            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              View Details
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CourseGrid;