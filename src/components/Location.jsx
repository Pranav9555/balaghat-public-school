import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Location() {
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
              fontSize: "clamp(2rem,4vw,3rem)",
              color: "#1a1a1a",
              fontWeight: "700"
            }}
          >
            Our Location & Contact
          </h2>

          <div className="flex justify-center items-center gap-4 mt-4">
            <div className="w-20 h-px bg-blue-500" />
            <span className="text-orange-500 text-lg">✦</span>
            <div className="w-20 h-px bg-blue-500" />
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Side - Map */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863281.3057738366!2d71.5712405875!3d18.987278600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc54da8aeb7da41%3A0xe68ea721cdc894f6!2sBALAGHAT%20PUBLIC%20SCHOOL%20TELGAON!5e0!3m2!1sen!2sin!4v1773148414975!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              loading="lazy"
              title="School Location"
            ></iframe>
          </div>

          {/* Right Side - Contact Details */}
          <div className="space-y-6">

            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md">
              <FaMapMarkerAlt size={22} color="#1e56a0" />
              <div>
                <h4
                  style={{
                    fontSize: "1.1rem",
                    color: "#1a1a1a"
                  }}
                >
                  Address
                </h4>
                <p
                  style={{
                    color: "#4a5568"
                  }}
                >
                  Balaghat Public School <br />
                  Telgaon, Dharur Block <br />
                  Beed District, Maharashtra
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md">
              <FaPhoneAlt size={20} color="#1e56a0" />
              <div>
                <h4
                  style={{
                    fontSize: "1.1rem",
                    color: "#1a1a1a"
                  }}
                >
                  Phone
                </h4>
                <p
                  style={{
                    color: "#4a5568"
                  }}
                >
                  +91 94229 32722
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md">
              <FaEnvelope size={20} color="#1e56a0" />
              <div>
                <h4
                  style={{
                    fontSize: "1.1rem",
                    color: "#1a1a1a"
                  }}
                >
                  Email
                </h4>
                <p
                  style={{
                    color: "#4a5568"
                  }}
                >
                  balaghatps2013@gmail.com
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Location;