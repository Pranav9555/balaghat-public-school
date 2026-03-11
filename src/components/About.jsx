import { useState, useEffect, useRef } from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaAward, FaChartLine } from "react-icons/fa";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const stats = [
  { num: "1400+", label: "Students Enrolled", icon: FaUserGraduate },
  { num: "14+", label: "Dedicated Faculty", icon: FaChalkboardTeacher },
  { num: "13+", label: "Years of Excellence", icon: FaAward },
  { num: "100%", label: "Board Pass Rate", icon: FaChartLine },
];

const paragraphs = [
  "Balaghat Public School, Telgaon was established in 2013, located in the Dharur block of Beed district in Maharashtra.",
  "A respected educational institution committed to nurturing young minds and shaping responsible citizens for the future — creating an environment where learning is meaningful, engaging, and inspiring.",
  "We prepare students not just for examinations, but for life itself.",
];

function StatCard({ num, label, icon: Icon, delay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Reveal delay={delay}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered ? "#f3f6fb" : "#ffffff",
          border: "1px solid #e5e7eb",
          borderLeft: "3px solid #1e56a0",
          padding: "28px 24px",
          transition: "all 0.3s ease",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          position: "relative",
        }}
      >
        {/* Watermark icon */}
        <Icon
          style={{
            position: "absolute",
            bottom: -8,
            right: -4,
            fontSize: "5.5rem",
            color: "rgba(30,86,160,0.06)",
          }}
        />

        {/* Foreground icon */}
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "#eef3ff",
            border: "1px solid #dbe3ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <Icon style={{ color: "#1e56a0", fontSize: "1.15rem" }} />
        </div>

        {/* Number */}
        <div
          style={{
            fontSize: "clamp(2rem,3.5vw,2.6rem)",
            fontWeight: 900,
            color: "#1e56a0",
            marginBottom: 6,
          }}
        >
          {num}
        </div>

        {/* Label */}
        <div
          style={{
            fontSize: "0.62rem",
            letterSpacing: "0.16em",
            color: "#6b7280",
            textTransform: "uppercase",
          }}
        >
          {label}
        </div>
      </div>
    </Reveal>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(120deg,#f6f8fc 0%,#eef2f7 100%)",
        padding: "96px 20px",
      }}
    >
      {/* Accent line */}
      <div
        className="absolute top-0 bottom-0 left-0 hidden lg:block"
        style={{
          width: 3,
          background:
            "linear-gradient(to bottom, transparent, #1e56a0 30%, #1e56a0 70%, transparent)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* HEADER */}
        <Reveal className="mb-16 text-center lg:text-left">
          <h2
            style={{
              fontSize: "clamp(2rem,4vw,3.2rem)",
              color: "#111827",
              fontWeight: 700,
            }}
          >
            About <em style={{ color: "#1e56a0" }}>Our School</em>
          </h2>

          <div
            className="mt-5 mx-auto lg:mx-0"
            style={{
              width: 64,
              height: 3,
              background: "linear-gradient(to right,#1e56a0,#3b82f6)",
            }}
          />
        </Reveal>

        {/* BODY */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT TEXT */}
          <div className="flex flex-col gap-10">
            <Reveal delay={100}>
              <div className="space-y-5">
                {paragraphs.map((p, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: "clamp(1.05rem,1.8vw,1.2rem)",
                      color: "#374151",
                      lineHeight: 1.95,
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            {/* Badge */}
            <Reveal delay={200}>
              <div
                style={{
                  border: "1px solid #e5e7eb",
                  padding: "14px 22px",
                  background: "#ffffff",
                  display: "inline-flex",
                  gap: 14,
                  alignItems: "center",
                }}
              >
                <FaAward style={{ color: "#1e56a0" }} />

                <div>
                  <div
                    style={{
                      fontSize: "0.58rem",
                      letterSpacing: "0.22em",
                      color: "#6b7280",
                      textTransform: "uppercase",
                    }}
                  >
                    Established
                  </div>

                  <div
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#1e56a0",
                    }}
                  >
                    2013 · Telgaon, Beed, Maharashtra
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {stats.map((s, i) => (
              <StatCard key={i} {...s} delay={i * 90} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
