import {
  FaMusic,
  FaRunning,
  FaUserTie,
  FaBookOpen,
  FaHandsHelping,
  FaLeaf,
  FaUsers,
  FaSpa,
  FaLightbulb
} from "react-icons/fa";

const activities = [
  {
    icon: FaLightbulb,
    title: "Innovative Programs & Activities",
    desc: "Various creative and innovative programs that encourage curiosity and active learning among students."
  },
  {
    icon: FaMusic,
    title: "Cultural Programs",
    desc: "Classical music, dance, and singing workshops that help students develop artistic talents."
  },
  {
    icon: FaRunning,
    title: "Sports Competitions",
    desc: "Regular sports competitions at taluka and district level encouraging teamwork and physical fitness."
  },
  {
    icon: FaUserTie,
    title: "Personality Development",
    desc: "Regular personality development programs that build confidence, leadership, and communication skills."
  },
  {
    icon: FaBookOpen,
    title: "Competitive Exam Guidance",
    desc: "Special preparation and guidance for NTSE, NMMS, and other scholarship examinations."
  },
  {
    icon: FaHandsHelping,
    title: "Remedial Teaching",
    desc: "Special academic assistance and extra support for students who need additional guidance."
  },
  {
    icon: FaLeaf,
    title: "Environmental Conservation",
    desc: "Tree plantation, cleanliness drives, and environmental awareness programs for students."
  },
  {
    icon: FaUsers,
    title: "Parent Meetings",
    desc: "Regular parent guidance meetings and discussions about student progress and development."
  },
  {
    icon: FaSpa,
    title: "Yoga & Pranayam",
    desc: "Daily yoga and pranayam sessions promoting mental peace, discipline, and physical well-being."
  }
];

function Activities() {
  return (
    <section
      id="activities"
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
              color: "#1a1a1a",
              fontWeight: "700"
            }}
          >
            Activities & Programs
          </h2>

          <div className="flex justify-center items-center gap-4 mt-4">
            <div className="w-20 h-px bg-blue-500" />
            <span className="text-orange-500 text-lg">✦</span>
            <div className="w-20 h-px bg-blue-500" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {activities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-full mb-6"
                  style={{ background: "#eef3ff" }}
                >
                  <Icon size={24} color="#1e56a0" />
                </div>

                <h3
                  className="font-semibold mb-3"
                  style={{
                    fontSize: "1.2rem",
                    color: "#1a1a1a"
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
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

export default Activities;
