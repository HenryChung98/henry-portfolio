import { useState, useEffect } from "react";

// components
import NavBar from "./assets/components/NavBar";
import SectionContainer from "./assets/components/SectionContainer";
import ScrollToTopButton from "./assets/components/ScrollToTopButton";

// cards
import MainCard from "./assets/cards/MainCard";
import Banner from "./assets/cards/Banner";
import AboutMe from "./assets/cards/AboutMeCard";
import Skills from "./assets/cards/SkillsCard";
import Projects from "./assets/cards/ProjectsCard";
import Blog from "./assets/cards/BlogCard";
import Contact from "./assets/cards/ContactCard";

function App() {
  const [activeSection, setActiveSection] = useState("banner");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      if (isMobile) {
        setActiveSection(null);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  const handleNavClick = (section) => {
    setActiveSection(section);
    if (isMobile) {
      document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <main className="flex flex-col mt-10 md:mt-0 justify-center items-center md:w-[1280px] md:flex-row">
        <NavBar activeSection={activeSection} onNavClick={handleNavClick} />
        <MainCard />
        {/* <SectionContainer
          id="banner"
          cardComponent={<Banner />}
          isMobile={isMobile}
          activeSection={activeSection}
        /> */}
        <section
          id="banner"
          className={`hidden md:block relative mb-2 md:right-1 z-10 bg-[#f0f4ff] rounded-lg shadow-xl p-5 w-full md:max-w-[750px] md:min-w-[300px] md:h-[550px] overflow-auto text-left ${
            !isMobile && activeSection !== "banner" ? "md:hidden" : ""
          } ${!isMobile && "slide-in-left"}`}
        >
          <Banner />
        </section>
        <SectionContainer
          id="aboutMe"
          cardComponent={<AboutMe />}
          isMobile={isMobile}
          activeSection={activeSection}
        />
        <SectionContainer
          id="skills"
          cardComponent={<Skills />}
          isMobile={isMobile}
          activeSection={activeSection}
        />
        <SectionContainer
          id="projects"
          cardComponent={<Projects />}
          isMobile={isMobile}
          activeSection={activeSection}
        />
        <SectionContainer
          id="blog"
          cardComponent={<Blog />}
          isMobile={isMobile}
          activeSection={activeSection}
        />
        <SectionContainer
          id="contact"
          cardComponent={<Contact />}
          isMobile={isMobile}
          activeSection={activeSection}
        />
        <ScrollToTopButton />
      </main>
    </>
  );
}

export default App;
