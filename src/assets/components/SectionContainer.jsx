import { useState, useEffect, useRef } from "react";

const SectionScrollButton = ({ containerRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    const toggleVisibility = () => {
      if (container.scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    container.addEventListener("scroll", toggleVisibility);
    return () => container.removeEventListener("scroll", toggleVisibility);
  }, [containerRef]);

  const scrollToTop = () => {
    containerRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        sticky bottom-4 left-200
        bg-indigo-600 text-white 
        p-2 rounded-full 
        shadow-lg 
        hover:bg-indigo-700 
        transition-all duration-300 
        transform
        text-xl
        ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0 pointer-events-none"
        }
      `}
    >
      ↑
    </button>
  );
};

export default function SectionContainer({
  id,
  cardComponent,
  isMobile,
  activeSection,
}) {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative mb-2 md:right-1 z-10 bg-[#F1F5F9] rounded-lg shadow-xl p-5 w-full md:max-w-[750px] md:min-w-[300px] md:h-[550px] overflow-auto text-left ${
        !isMobile && activeSection !== id ? "hidden" : ""
      } ${!isMobile && "slide-in-left"}`}
    >
      {cardComponent}
      <SectionScrollButton containerRef={sectionRef} />
    </section>
  );
}
