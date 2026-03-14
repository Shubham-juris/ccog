import React from "react";
import Link from "next/link";

const CourseCTA = () => {
  return (
    <section className="bg-gray-900 text-white py-24">
      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold mb-6">
          Start Learning Today
        </h2>

        <p className="text-gray-300 mb-10">
          Join thousands of learners who are building successful careers
          in technology.
        </p>

        <Link href="/enroll">
          <button className="bg-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition">
            Enroll Now
          </button>
        </Link>

      </div>
    </section>
  );
};

export default CourseCTA;