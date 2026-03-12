import { FaChalkboardTeacher, FaUserGraduate, FaBookOpen, FaShieldAlt } from "react-icons/fa";

function WhyChoose() {

  const features = [
    {
      icon: <FaChalkboardTeacher size={26} />,
      title: "Experienced Teachers",
      desc: "Our qualified and dedicated teachers focus on quality education and individual attention for every student."
    },
    {
      icon: <FaUserGraduate size={26} />,
      title: "Holistic Development",
      desc: "We encourage students to participate in academics, sports, cultural, and extracurricular activities."
    },
    {
      icon: <FaBookOpen size={26} />,
      title: "Quality Education",
      desc: "Our curriculum focuses on strong fundamentals, discipline, and overall intellectual growth."
    },
    {
      icon: <FaShieldAlt size={26} />,
      title: "Safe Environment",
      desc: "We provide a secure and supportive learning environment where students feel safe and confident."
    }
  ];

  return (
    <section
      id="whychoose"
      className="py-24 px-6"
      style={{
        background: "linear-gradient(120deg,#f6f8fc 0%,#eef2f7 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">

          <h2
            style={{
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: "700",
              color: "#1a1a1a"
            }}
          >
            Why Choose Our School
          </h2>

          <div className="flex justify-center items-center gap-4 mt-4">
            <div className="w-20 h-px bg-blue-500" />
            <span className="text-orange-500 text-lg">✦</span>
            <div className="w-20 h-px bg-blue-500" />
          </div>

        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center"
            >

              {/* Icon */}
              <div
                className="flex items-center justify-center mb-4"
                style={{
                  width: "60px",
                  height: "60px",
                  margin: "0 auto",
                  borderRadius: "50%",
                  background: "#eef3ff",
                  color: "#1e56a0"
                }}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h4
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  marginBottom: "8px",
                  color: "#1a1a1a"
                }}
              >
                {item.title}
              </h4>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#4a5568",
                  lineHeight: "1.6"
                }}
              >
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;
