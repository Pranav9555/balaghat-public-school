import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

function Header() {
  const [open, setOpen] = useState(false);

  const links = ["About", "Facilities","Activities",  "Achievements","Gallery", "Contact"];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-8 md:px-12 backdrop-blur-md border-b"
      style={{
        background: "rgba(255,255,255,0.95)",
        borderColor: "#e5e7eb",
        height: "54px"
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 sm:gap-3">
        <img
          src="/Balaghat_logo.jpeg"
          alt="BPS"
          className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
        />

        <div
          className="leading-tight tracking-wide text-xs sm:text-sm"
          style={{
            fontFamily: "'Cinzel', serif",
            color: "#1a1a1a"
          }}
        >
          Balaghat <br /> Public School
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 lg:gap-9 list-none">
        {links.map((l) => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              className="hover:text-blue-600 transition-colors duration-200 tracking-widest text-xs lg:text-sm"
              style={{
                fontFamily: "'Cinzel', serif",
                color: "#374151"
              }}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        style={{ color: "#1e56a0" }}
        onClick={() => setOpen(!open)}
      >
        {open ? <MdClose /> : <MdMenu />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div
          className="absolute left-0 w-full border-t md:hidden"
          style={{
            background: "#ffffff",
            borderColor: "#e5e7eb"
          }}
        >
          <ul className="flex flex-col items-center gap-6 py-6">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="tracking-widest hover:text-blue-600"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: "#374151"
                  }}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;
