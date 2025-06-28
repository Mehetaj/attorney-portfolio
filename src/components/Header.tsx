"use client"
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import profile from '@/images/page121.jpeg'
import background from '@/images/page122.jpeg'

const NAV_ITEMS = [
  { label: "HOME", href: "#home" },
  { label: "Practice Area", href: "#practice-area" },
  { label: "EDUCATION & BAR ADMISSION", href: "#education" },
  { label: "TESTIMONIAL", href: "#testimonial" },
  { label: "CASE STUDY", href: "#case-study" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Trap focus and close on ESC
  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
      if (e.key === "Tab" && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Smooth scroll handler for menu links
  const handleMenuLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Left Image */}
      <div className="w-full md:w-1/2 h-64 md:h-auto relative min-h-[250px] md:min-h-0">
        <Image 
          src={profile}
          alt="Attorney portrait"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Right Content with Image and Overlay */}
      <div className="w-full md:w-1/2 relative flex items-center justify-center bg-black/70 min-h-[350px] md:min-h-0">
        {/* Background image */}
        <Image 
          src={background}
          alt="Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        {/* Overlay for content */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Hamburger menu */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20">
          <button
            className={`flex flex-col gap-1.5 w-8 h-8 items-center justify-center group focus:outline-none ${menuOpen ? 'pointer-events-none opacity-0' : ''}`}
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <span className="block w-7 h-0.5 bg-white rounded transition-all group-hover:w-8" />
            <span className="block w-7 h-0.5 bg-white rounded transition-all group-hover:w-8" />
            <span className="block w-7 h-0.5 bg-white rounded transition-all group-hover:w-8" />
          </button>
        </div>
        {/* Animated Fullscreen Menu Overlay */}
        {menuOpen && (
          <div
            ref={menuRef}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm animate-fadeIn"
            tabIndex={-1}
            aria-modal="true"
            role="dialog"
          >
            {/* Close Button */}
            <button
              className="absolute top-8 right-8 text-white text-4xl focus:outline-none transition-transform hover:scale-110"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              autoFocus
            >
              &times;
            </button>
            {/* Menu Items */}
            <nav className="flex flex-col items-center gap-4 sm:gap-6 mt-8 w-full">
              {NAV_ITEMS.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={
                    `text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-wide py-2 px-8 w-full text-center border-b border-white/30 last:border-b-0
                    transition-all duration-300
                    opacity-0 translate-y-8
                    animate-menuItemIn animate-delay-[${idx * 100}ms]`
                  }
                  style={{
                    animation: `menuItemIn 0.5s cubic-bezier(0.4,0,0.2,1) forwards`,
                    animationDelay: `${idx * 100 + 200}ms`,
                  }}
                  tabIndex={0}
                  onClick={e => handleMenuLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <style jsx global>{`
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              .animate-fadeIn {
                animation: fadeIn 0.4s cubic-bezier(0.4,0,0.2,1) forwards;
              }
              @keyframes menuItemIn {
                from { opacity: 0; transform: translateY(32px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}</style>
          </div>
        )}
        {/* Main content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 sm:px-8 md:px-12 max-w-xl text-white py-8 md:py-0">
          <span className="uppercase tracking-widest text-yellow-400 text-xs sm:text-sm mb-2 sm:mb-4">Your Attorney</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">Paul Goodman</h1>
          <p className="mb-4 sm:mb-8 text-base sm:text-lg text-gray-200 max-w-lg">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend.</p>
          <div className="mb-4 sm:mb-8">
            <span className="font-signature text-lg sm:text-2xl text-yellow-400">Paul Goodman</span>
          </div>
          {/* Social icons (replace # with your links) */}
          <div className="flex gap-4 sm:gap-5 text-xl sm:text-2xl">
            <a href="#" className="hover:text-yellow-400 transition"><i className="fab fa-linkedin-in" /></a>
            <a href="#" className="hover:text-yellow-400 transition"><i className="fab fa-facebook-f" /></a>
            <a href="#" className="hover:text-yellow-400 transition"><i className="fab fa-x-twitter" /></a>
            <a href="#" className="hover:text-yellow-400 transition"><i className="fab fa-instagram" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}