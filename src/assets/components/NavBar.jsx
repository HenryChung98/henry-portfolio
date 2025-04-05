import { useState, useEffect } from "react";
import colors from "../components/colorManager";
import {
  MdAccountCircle,
  MdEmail,
  MdChat,
  MdLightbulbCircle,
  MdDashboard,
} from "react-icons/md";

function NavButton({ icon, text, onClick, isActive }) {
  return (
    <li>
      <button
        onClick={onClick}
        className={`md:rounded flex flex-col items-center justify-center md:border-b md:border-gray-700 w-[80px] h-[80px] bg-[#334155] duration-100 ${
          isActive ? "text-[#5E81C5]" : "text-[#e0e0e0] hover:text-[#5E81C5]"
        }`}
      >
        <span>{icon}</span>
        <span className="text-xs uppercase p-1">{text}</span>
      </button>
    </li>
  );
}

export default function NavBar({ activeSection, onNavClick }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed top-0 z-50 transition-transform duration-300 mr-2 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } md:translate-y-0 md:static`}
      >
        <nav>
          <ul className="flex flex-row justify-center items-center md:flex-col">
            <NavButton
              icon={<MdAccountCircle size={25} />}
              text="About"
              onClick={() => onNavClick("aboutMe")}
              isActive={activeSection === "aboutMe"}
            />
            <NavButton
              icon={<MdLightbulbCircle size={25} />}
              text="Skills"
              onClick={() => onNavClick("skills")}
              isActive={activeSection === "skills"}
            />
            <NavButton
              icon={<MdDashboard size={25} />}
              text="Projects"
              onClick={() => onNavClick("projects")}
              isActive={activeSection === "projects"}
            />
            <NavButton
              icon={<MdChat size={25} />}
              text="Blog"
              onClick={() => onNavClick("blog")}
              isActive={activeSection === "blog"}
            />
            <NavButton
              icon={<MdEmail size={25} />}
              text="Contact"
              onClick={() => onNavClick("contact")}
              isActive={activeSection === "contact"}
            />
          </ul>
        </nav>
      </header>
    </>
  );
}
