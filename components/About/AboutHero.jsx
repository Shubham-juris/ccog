export default function AboutHero() {
  return (
    <section
      className="relative h-[90vh]  flex items-center justify-center text-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1492724441997-5dc865305da7')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Building A Strong Foundation For Career Excellence  
          Through Structured Learning And Industry-Driven Innovation
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          Discover the story, vision, leadership, and commitment behind CCOG’s
          mission to create future-ready professionals.
        </p>
      </div>
    </section>
  );
}