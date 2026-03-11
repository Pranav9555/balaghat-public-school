import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="pt-16 pb-8 px-6"
      style={{
        background: "#1e293b",
        color: "#e5e7eb"
      }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* School Info */}
        <div>
          <h3
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: "1.4rem",
              color: "#ffffff",
              marginBottom: "10px"
            }}
          >
            Balaghat Public School
          </h3>

          <p
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              color: "#cbd5f5",
              lineHeight: "1.7"
            }}
          >
            Balaghat Public School, Telgaon is committed to providing
            quality education and holistic development of students.
            We aim to nurture responsible, confident, and successful citizens.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: "1.1rem",
              marginBottom: "14px",
              color: "#ffffff"
            }}
          >
            Quick Links
          </h4>

          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-orange-400">Home</a></li>
            <li><a href="#about" className="hover:text-orange-400">About</a></li>
            <li><a href="#facilities" className="hover:text-orange-400">Facilities</a></li>
            <li><a href="#activities" className="hover:text-orange-400">Activities</a></li>
            <li><a href="#achievements" className="hover:text-orange-400">Achievements</a></li>
            <li><a href="#contact" className="hover:text-orange-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: "1.1rem",
              marginBottom: "14px",
              color: "#ffffff"
            }}
          >
            Contact Info
          </h4>

          <div className="space-y-4">

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt />
              <p>Telgaon, Dharur Block, Beed District, Maharashtra</p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt />
              <p>+91 094229 32722</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope />
              <p>balaghatps2013@gmail.com</p>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-600 mt-12 pt-6 text-center">

        <p
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            color: "#cbd5f5"
          }}
        >
          © {new Date().getFullYear()} Shiksha Vistar. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
