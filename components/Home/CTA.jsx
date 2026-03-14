import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-red-500 to-red-600 text-white">
      <div className="container mx-auto px-6 text-center max-w-4xl">

        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          Take The First Step Towards Building  
          A Successful Career With CCOG
        </h2>

        <p className="mt-6 text-lg text-red-100">
          Join our career-focused programs and gain practical skills,
          industry certification, and real job opportunities.
        </p>

        <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">

          <Link
            href="/enroll"
            className="px-8 py-3 bg-black rounded-lg font-semibold hover:bg-gray-900 transition"
          >
            Enroll Now
          </Link>

          <Link
            href="/contact"
            className="px-8 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Talk To Advisor
          </Link>

        </div>

      </div>
    </section>
  );
}