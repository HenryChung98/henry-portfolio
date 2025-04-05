import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`
          fixed z-50 bottom-4 right-4 
          bg-indigo-600 text-white 
          p-3 rounded-full 
          shadow-lg 
          hover:bg-indigo-700 
          transition-all duration-300 
          focus:outline-none
          transform
          w-[50px] text-2xl
          ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0 pointer-events-none"
          }
        `}
      >
        ↑
      </button>
    </>
  );
};

export default ScrollToTopButton;
