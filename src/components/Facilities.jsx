import { FaBook, FaLaptopCode, FaFutbol, FaBus, FaChalkboardTeacher, FaAward } from "react-icons/fa";

const facilities = [
    {
    icon: FaFutbol,
    title: "Sports & Playground",
    desc: "Spacious playground encouraging physical fitness and teamwork among students."
  },
    {
    icon: FaBus,
    title: "Transport Facility",
    desc: "Safe and reliable transportation service for students from nearby areas."
  },
  {
    icon: FaBook,
    title: "Library",
    desc: "A well-stocked library that encourages reading habits and supports academic learning."
  },
  {
    icon: FaLaptopCode,
    title: "Computer Lab",
    desc: "Modern computers helping students gain digital knowledge and practical skills."
  },


  {
    icon: FaChalkboardTeacher,
    title: "Experienced Teachers",
    desc: "Dedicated and qualified teachers committed to guiding students towards academic success."
  },
  {
    icon: FaAward,
    title: "Cultural & Annual Events",
    desc: "Various cultural programs and annual functions that help students showcase their talents."
  }
];


function Facilities() {
  return (
    <section
      id="facilities"
      className="py-24 px-6"
      style={{
        background: "linear-gradient(120deg,#ffffff 0%,#f6f8fc 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className="font-bold"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem,4vw,3rem)",
              color: "#1a1a1a"
            }}
          >
            Our Facilities
          </h2>

          <div className="flex justify-center items-center gap-4 mt-4">
            <div className="w-20 h-px bg-blue-500" />
            <span className="text-orange-500 text-lg">✦</span>
            <div className="w-20 h-px bg-blue-500" />
          </div>
        </div>

        {/* Facility Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {facilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-full mb-6"
                  style={{
                    background: "#eef3ff"
                  }}
                >
                  <Icon size={24} color="#1e56a0" />
                </div>

                <h3
                  className="font-semibold mb-3"
                  style={{
                    fontFamily: "'Cinzel',serif",
                    fontSize: "1.2rem",
                    color: "#1a1a1a"
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    color: "#4a5568",
                    lineHeight: "1.7"
                  }}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Facilities;
