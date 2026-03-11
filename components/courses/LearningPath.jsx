import React from "react";

const LearningPath = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-12">
          Structured Learning Path
        </h2>

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h3 className="text-xl font-semibold mb-3">Step 1</h3>
            <p className="text-gray-600">
              Learn programming fundamentals and core web technologies.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Step 2</h3>
            <p className="text-gray-600">
              Build real-world projects to strengthen practical knowledge.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Step 3</h3>
            <p className="text-gray-600">
              Learn advanced frameworks and professional development practices.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Step 4</h3>
            <p className="text-gray-600">
              Prepare for job interviews and build a strong developer portfolio.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LearningPath;