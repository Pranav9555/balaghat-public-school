import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
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
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem,4vw,3rem)",
              color: "#1a1a1a",
              fontWeight: "700"
            }}
          >
            Contact Us
          </h2>

          <div className="flex justify-center items-center gap-4 mt-4">
            <div className="w-20 h-px bg-blue-500" />
            <span className="text-orange-500 text-lg">✦</span>
            <div className="w-20 h-px bg-blue-500" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Contact Info */}
          <div className="space-y-8">

            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md">
              <FaMapMarkerAlt size={22} color="#1e56a0" />
              <div>
                <h4
                  style={{
                    fontFamily: "'Cinzel',serif",
                    fontSize: "1.1rem",
                    color: "#1a1a1a"
                  }}
                >
                  Address
                </h4>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    color: "#4a5568"
                  }}
                >
                  Balaghat Public School  
                  Telgaon, Dharur Block  
                  Beed District, Maharashtra
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md">
              <FaPhoneAlt size={20} color="#1e56a0" />
              <div>
                <h4
                  style={{
                    fontFamily: "'Cinzel',serif",
                    fontSize: "1.1rem",
                    color: "#1a1a1a"
                  }}
                >
                  Phone
                </h4>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    color: "#4a5568"
                  }}
                >
                  +91 094229 32722
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md">
              <FaEnvelope size={20} color="#1e56a0" />
              <div>
                <h4
                  style={{
                    fontFamily: "'Cinzel',serif",
                    fontSize: "1.1rem",
                    color: "#1a1a1a"
                  }}
                >
                  Email
                </h4>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    color: "#4a5568"
                  }}
                >
                 balaghatps2013@gmail.com
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-md outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-md outline-none focus:border-blue-500"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 border rounded-md outline-none focus:border-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 rounded-md text-white font-semibold transition hover:opacity-90"
                style={{
                  background: "#ff7a00",
                  fontFamily: "'Cinzel',serif",
                  letterSpacing: "0.08em"
                }}
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
