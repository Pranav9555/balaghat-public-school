import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

function Header() {
  const [open, setOpen] = useState(false);

  const links = ["About", "Facilities", "Activities", "Gallery", "Contact"];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{
        background: "rgba(255,255,255,0.95)",
        borderColor: "#e5e7eb",
        height: "64px",
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8 md:px-12 h-full">

    {/* Logo */}
<div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
  <img
    src="/Balaghat_logo.jpeg"
    alt="BPS"
    className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain"
  />

  <div
    className="leading-tight tracking-wide text-sm sm:text-base md:text-lg lg:text-xl max-w-[160px] sm:max-w-[220px] md:max-w-none"
    style={{
      color: "#1a1a1a",
      fontWeight: "600",
      marginRight : "3px",
    }}
  >
    Balaghat Public School
  </div>
</div>


        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-9 list-none">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="hover:text-blue-600 transition-colors duration-200 tracking-widest text-sm lg:text-base"
                style={{
                  color: "#374151"
                }}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button - only visible when menu is closed */}
        {!open && (
          <button
            className="md:hidden text-3xl z-50"
            style={{ color: "#1e56a0" }}
            onClick={() => setOpen(true)}
          >
            <MdMenu />
          </button>
        )}

        {/* Mobile Menu */}
        {open && (
          <div
            className="fixed top-0 left-0 w-full h-screen md:hidden z-40 flex flex-col items-center justify-center bg-white transition-all duration-300"
          >
            {/* Close button inside menu */}
            <button
              className="absolute top-6 right-6 text-4xl text-gray-700"
              onClick={() => setOpen(false)}
            >
              <MdClose />
            </button>

            {/* Menu links */}
            <ul className="flex flex-col items-center gap-8">
              {links.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="tracking-widest hover:text-blue-600 text-2xl font-semibold"
                    style={{
                      color: "#1a1a1a"
                    }}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Header;