"use client"
import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "practice-area", label: "Practice Area" },
  { id: "why-choose-us", label: "Why Choose Us" },
  { id: "biography", label: "Biography" },
  { id: "education", label: "Education & Bar Admission" },
  { id: "case-study", label: "Case Study" },
  { id: "testimonial", label: "Testimonial" },
  { id: "contact", label: "Contact" },
];

export default function DotNavigation() {
  const [active, setActive] = useState(SECTIONS[0].id);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      let found = SECTIONS[0].id;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            found = section.id;
          }
        }
      }
      setActive(found);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 items-center hidden lg:flex">
      {SECTIONS.map((section) => (
        <button
          key={section.id}
          aria-label={section.label}
          onClick={() => handleClick(section.id)}
          className="group focus:outline-none"
        >
          <span
            className={`block w-4 h-4 rounded-full border-2 transition-all duration-300
              ${active === section.id ? "border-white" : "border-gray-400"}
              flex items-center justify-center`}
          >
            <span
              className={`block w-2 h-2 rounded-full transition-all duration-300
                ${active === section.id ? "bg-white scale-125" : "bg-gray-500"}`}
            />
          </span>
        </button>
      ))}
    </div>
  );
} 