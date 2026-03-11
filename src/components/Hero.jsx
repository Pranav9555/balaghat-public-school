function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(120deg, #f6f8fc 0%, #eef2f7 100%)",
        padding: "1rem"
      }}
    >

      <div className="max-w-7xl mx-auto w-full px-8 md:px-10 lg:px-16 grid md:grid-cols-2 gap-12 items-center pt-24 pb-16">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">

          <h1
            className="font-bold leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem,5vw,4rem)",
              color: "#1a1a1a"
            }}
          >
            Balaghat Public School

            <span
              className="block font-normal mt-3"
              style={{
                fontSize: "0.45em",
                letterSpacing: "0.18em",
                color: "#1e56a0"
              }}
            >
              Knowledge · Discipline · Excellence
            </span>
          </h1>

          <div className="flex items-center gap-4 my-6 justify-center md:justify-start">
            <div className="w-20 md:w-28 h-px  from-transparent to-blue-500" />
            <span className="text-orange-500 text-lg">✦</span>
            <div className="w-20 md:w-28 h-px  from-transparent to-blue-500" />
          </div>

          <p
            className="italic font-light max-w-xl leading-relaxed mx-auto md:mx-0"
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(1rem,2vw,1.2rem)",
              color: "#4a5568"
            }}
          >
            Our school is dedicated to providing quality education and
            holistic development of students. We focus on academic
            excellence, discipline, and extracurricular activities to
            nurture confident and responsible citizens.
          </p>

          <div className="mt-10 flex justify-center md:justify-start">
            <a
              href="#about"
              className="font-semibold tracking-widest transition-all duration-300 hover:-translate-y-1"
              style={{
                fontFamily: "'Cinzel',serif",
                fontSize: "0.74rem",
                letterSpacing: "0.18em",
                padding: "14px 36px",
                background: "#ff7a00",
                color: "#ffffff",
                margin: "15px",
                borderRadius: "6px",
                textDecoration: "none"
              }}
            >
              Read More
            </a>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/balaghat_school.png"
            alt="Balaghat Public School"
            className="w-full max-w-md md:max-w-lg rounded-lg shadow-xl object-cover transition-all duration-500 ease-in-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
