import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram } from "react-icons/fa";

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

          {/* Logo + Name */}
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/Balaghat_logo.jpeg"
              alt="Balaghat Public School"
              className="h-12 w-12 object-contain"
            />

            <h3
              style={{
                fontSize: "1.4rem",
                color: "#ffffff"
              }}
            >
              Balaghat Public School
            </h3>
          </div>

          <p
            style={{
              color: "#cbd5f5",
              lineHeight: "1.7"
            }}
          >
            Balaghat Public School, Telgaon is committed to providing
            quality education and holistic development of students.
            We aim to nurture responsible, confident, and successful citizens.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">

            <a
              href="https://www.facebook.com/balaghat.public.school.telgaon"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-4 rounded-full hover:bg-blue-600 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/balaghatpublicschool?igsh=cGQ5d2JubDAzdng4"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-4 rounded-full hover:bg-pink-500 transition"
            >
              <FaInstagram />
            </a>

          </div>

        </div>

        {/* Quick Links */}
        <div>
          <h4
            style={{
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
              <p>+91 9422932722</p>
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

        <p style={{ color: "#cbd5f5" }}>
          © {new Date().getFullYear()} Balaghat Public School, Telgaon. All Rights Reserved. |
          Developed by{" "}
          <a
            href="https://shivaytech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:underline"
          >
            ShivayTech
          </a>
        </p>

      </div>
    </footer>
  );
}

export default Footer;
