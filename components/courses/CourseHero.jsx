import React from "react";

const CourseHero = () => {
  return (
    <section className="relative py-32 bg-cover bg-center bg-[url('/images/course-hero.jpg')]">
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center text-white">

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Explore Our Professional Courses
        </h1>

        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10">
          Learn modern web technologies, software development, UI/UX design,
          and advanced programming skills through our structured learning
          programs. Our courses are designed to help beginners and
          professionals gain practical experience with real-world projects.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

          <button className="bg-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Browse Courses
          </button>

          <button className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition">
            Start Learning
          </button>

        </div>

      </div>

    </section>
  );
};

export default CourseHero;