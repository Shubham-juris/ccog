import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-red-500 text-white py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold leading-snug">
        Take The First Step Towards Building A Strong And Successful Career Today
      </h2>

      <p className="mt-4 text-lg">
        Enroll now and start your transformation journey with CCOG.
      </p>

      <Link
        href="/contact"
        className="inline-block mt-8 bg-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-800"
      >
        Start Now
      </Link>
    </section>
  );
}