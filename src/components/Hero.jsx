function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg5.png')",
      }}
    >
      <div className="relative max-w-7xl mx-auto w-full px-8 md:px-10 lg:px-16 grid md:grid-cols-2 gap-12 items-center pt-24 ">
        {/* LEFT CONTENT */}
        <div className="z-10 text-center md:text-left">
          <h1
            className="font-bold leading-tight"
            style={{
              fontSize: "clamp(2rem,5vw,4rem)",
              color: "#1f2937", // dark heading
            }}
          >
            Balaghat Public School
            <span
              className="block font-normal mt-3"
              style={{
                fontSize: "0.45em",
                letterSpacing: "0.18em",
                color: "#2563eb", // blue accent
              }}
            >
              Knowledge · Discipline · Excellence
            </span>
          </h1>

          <div className="flex items-center gap-4 my-6 justify-center md:justify-start">
            <div className="w-20 md:w-28 h-px bg-blue-500" />
            <span className="text-orange-500 text-lg">✦</span>
            <div className="w-20 md:w-28 h-px bg-blue-500" />
          </div>

          <p
            className="max-w-xl leading-relaxed mx-auto md:mx-0"
            style={{
              fontSize: "clamp(1rem,2vw,1.2rem)",
              color: "#4b5563", // paragraph gray
            }}
          >
            Our school is dedicated to providing quality education and holistic
            development of students. We focus on academic excellence,
            discipline, and extracurricular activities to nurture confident and
            responsible citizens.
          </p>

          <div className="mt-10 flex justify-center md:justify-start">
            <a
              href="#about"
              className="font-semibold tracking-widest transition-all duration-300 hover:-translate-y-1"
              style={{
                fontSize: "0.74rem",
                letterSpacing: "0.18em",
                padding: "14px 36px",
                background: "#2563eb",
                color: "#ffffff",
                borderRadius: "6px",
                textDecoration: "none",
              }}
            >
              Read More
            </a>
          </div>
        </div>

{/* RIGHT IMAGE */}
<div className="flex justify-center md:justify-end items-end h-full z-10">
  <img
    src="/model.png"
    alt="Balaghat Public School"
    className="w-full max-w-md md:max-w-lg object-contain"
  />
</div>      </div>
    </section>
  );
}

export default Hero;
