import { useState } from "react";
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
  const [showAll, setShowAll] = useState(false);

  const topStudents = students.slice(0, 3);
  const remainingStudents = showAll ? students.slice(3) : [];

  return (
    <section
      id="achievements"
      className="py-24 px-6"
      style={{
        background: "linear-gradient(120deg,#ffffff 0%,#f6f8fc 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h2
            style={{
              fontSize: "clamp(2rem,4vw,3rem)",
              color: "#1a1a1a",
              fontWeight: "700"
            }}
          >
            Our Achievements
          </h2>

          <div className="flex justify-center items-center gap-4 mt-4">
            <div className="w-20 h-px bg-blue-500" />
            <span className="text-orange-500 text-lg">✦</span>
            <div className="w-20 h-px bg-blue-500" />
          </div>
        </div>

        {/* Achievement Highlight */}
        <div className="bg-white p-10 rounded-xl shadow-lg mb-16 text-center">
          <FaTrophy size={50} color="#ff7a00" className="mx-auto mb-4 animate-bounce" />

          <h3
            style={{
              fontSize: "1.75rem",
              color: "#1e56a0",
              fontWeight: "600"
            }}
          >
            NMMS Scholarship Examination
          </h3>

          <p
            className="mt-4"
            style={{
              color: "#4a5568",
              fontSize: "1.15rem",
              lineHeight: "1.6"
            }}
          >
            11 students from our school successfully passed the NMMS examination,
            showcasing academic excellence and dedication.
          </p>
        </div>

        {/* Top 3 Students */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {topStudents.map((student, index) => {

            const medalColors = ["#FFD700", "#C0C0C0", "#CD7F32"];

            return (
              <div
                key={index}
                className=" p-6 rounded-xl shadow-xl transform transition hover:-translate-y-3 hover:shadow-2xl flex flex-col items-center"
              >
                <FaMedal size={36} color={medalColors[index]} className="mb-3" />

                <h4
                  style={{
                    fontSize: "1.25rem",
                    color: "#1a1a1a",
                    fontWeight: "600",
                    textAlign: "center"
                  }}
                >
                  {student.name}
                </h4>

                <p
                  style={{
                    color: "#4a5568",
                    fontSize: "1.05rem",
                    marginTop: "0.5rem"
                  }}
                >
                  Marks: {student.marks}
                </p>
              </div>
            );
          })}
        </div>

        {/* Remaining Students */}
        {remainingStudents.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {remainingStudents.map((student, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-2 flex items-center gap-4"
              >
                <FaMedal size={22} color="#ff7a00" />

                <div>
                  <h4
                    style={{
                      fontSize: "1rem",
                      color: "#1a1a1a",
                      fontWeight: "600"
                    }}
                  >
                    {student.name}
                  </h4>

                  <p style={{ color: "#4a5568" }}>
                    Marks: {student.marks}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: "#1e56a0",
              color: "#fff"
            }}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>

      </div>
    </section>
  );
}

export default Achievements;
