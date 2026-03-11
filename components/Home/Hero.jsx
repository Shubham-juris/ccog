import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Transform Your Future With Industry-Ready Skills  
          And Build A Successful Career With  
          <span className="text-red-500"> CCOG Professional Training Programs</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300">
          Join thousands of students who upgraded their careers with practical,
          real-world learning and expert mentorship.
        </p>

        <div className="mt-8 space-x-4">
          <Link
            href="/courses"
            className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-lg font-semibold"
          >
            Explore Courses
          </Link>

          <Link
            href="/contact"
            className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black"
          >
            Get Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}