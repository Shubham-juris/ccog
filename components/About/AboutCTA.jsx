import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="bg-red-600 text-white py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold leading-snug">
        Join CCOG And Experience A Structured Pathway  
        Towards Professional Growth And Career Advancement
      </h2>

      <Link
        href="/contact"
        className="inline-block mt-8 bg-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-800"
      >
        Connect With Us
      </Link>
    </section>
  );
}