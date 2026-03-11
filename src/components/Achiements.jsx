import { FaTrophy, FaMedal } from "react-icons/fa";

const students = [
  { name: "Vijay Bapurao Lagad", marks: 108 },
  { name: "Snigdha Annasaheb Rathod", marks: 96 },
  { name: "Kalyani Kailas Shinde", marks: 90 },
  { name: "Tejaswini Santosh Shelke", marks: 87 },
  { name: "Akshar Umesh Tarfe", marks: 87 },
  { name: "Rutuja Ashok Fartade", marks: 83 },
  { name: "Pradnya Mahadev Sawant", marks: 82 },
  { name: "Sarthak Hom Lagad", marks: 80 },
  { name: "Sambhaji Shriram Shinde", marks: 84 },
  { name: "Sanchita Kalyan Giram", marks: 76 },
  { name: "Aditya Satyanarayan Aajbe", marks: 72 }
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 px-6"
      style={{
        background: "linear-gradient(120deg,#ffffff 0%,#f6f8fc 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem,4vw,3rem)",
              color: "#1a1a1a",
              fontWeight: "700"
            }}
          >
            Our Achievements
          </h2>

          

        </div>

        {/* Highlight Achievement */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-14 text-center">

          <FaTrophy size={40} color="#ff7a00" className="mx-auto mb-4" />

          <h3
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: "1.5rem",
              color: "#1e56a0",
              fontWeight: "600"
            }}
          >
            NMMS Scholarship Examination
          </h3>

          <p
            className="mt-3"
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              color: "#4a5568",
              fontSize: "1.1rem"
            }}
          >
            11 students from our school successfully passed the NMMS examination,
            showcasing academic excellence and dedication.
          </p>

        </div>

        {/* Students Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {students.map((student, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex items-center gap-4"
            >

              <FaMedal size={22} color="#ff7a00" />

              <div>

                <h4
                  style={{
                    fontFamily: "'Cinzel',serif",
                    fontSize: "1rem",
                    color: "#1a1a1a"
                  }}
                >
                  {student.name}
                </h4>

                <p
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    color: "#4a5568"
                  }}
                >
                  Marks: {student.marks}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Achievements;
