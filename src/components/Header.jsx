import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(window.scrollY < 20);
  const { lang, toggleLang, t } = useLanguage();

  const isHome = location.pathname === "/";

  //Helper functie om te checken of een link actief is
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/" || location.pathname === "";
    }
    return location.pathname.startsWith(path);
  };

  //Scroll naar boven bij navigatie
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  //Hide/show header op scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY < 20);

      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down (en meer dan 100px)
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    // Set initial state
    setIsAtTop(window.scrollY < 20);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Dynamische CSS classes voor de navigatieknoppen
  const getLinkClass = (path) => {
    const active = isActive(path);
    const useEditorial = isHome && isAtTop;

    if (useEditorial) {
      if (active) {
        return "py-2 px-6 rounded-lg font-semibold text-base transition-all duration-300 bg-black text-[#eed082] lg:bg-[#eed082] lg:text-[#111111] shadow-md hover:-translate-y-0.5";
      } else {
        return "py-2 px-6 rounded-lg font-semibold text-base transition-all duration-300 bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-zinc-600 hover:text-white hover:-translate-y-0.5";
      }
    } else {
      if (active) {
        return "py-2 px-6 rounded-lg font-semibold text-base transition-all duration-300 bg-(--accent) text-(--accent-text) shadow-md hover:shadow-lg hover:-translate-y-0.5";
      } else {
        return "py-2 px-6 rounded-lg font-semibold text-base transition-all duration-300 bg-(--surface) text-(--text) border border-(--bordercolor) hover:border-(--accent) hover:text-(--accent) hover:shadow-md hover:-translate-y-0.5";
      }
    }
  };

  // CSS classes voor de taalwissel knop
  const getLangToggleClass = () => {
    const useEditorial = isHome && isAtTop;
    if (useEditorial) {
      return "py-2 px-4 rounded-lg font-bold text-sm tracking-widest transition-all duration-300 bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-zinc-600 hover:text-white hover:-translate-y-0.5 select-none";
    }
    return "py-2 px-4 rounded-lg font-bold text-sm tracking-widest transition-all duration-300 bg-(--surface) text-(--muted) border border-(--bordercolor) hover:border-(--accent) hover:text-(--accent) hover:-translate-y-0.5 select-none";
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isVisible ? "translate-y-0" : "-translate-y-full"
    } ${
      isHome && isAtTop
        ? "bg-transparent border-none"
        : "bg-(--surface) border-b border-(--bordercolor)"
    }`}>
      {/* Editorial Splitscreen achtergrond panelen (alleen op Home en bovenaan) */}
      {isHome && isAtTop && (
        <div className="absolute inset-0 flex pointer-events-none">
          {/* Linker paneel: vult hele breedte op mobiel, 50% op desktop */}
          <div className="w-full lg:w-1/2 h-full bg-[#eed082] border-b border-black/10 transition-all duration-300" />
          {/* Rechter paneel: alleen zichtbaar op desktop (50% breedte) */}
          <div className="hidden lg:block lg:w-1/2 h-full bg-zinc-950 border-b border-zinc-800 transition-all duration-300" />
        </div>
      )}

      <nav className="relative z-10 container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Site naam */}
        <Link
          to="/"
          onClick={scrollToTop}
          className={`text-2xl font-bold transition-all duration-300 ${
            isHome && isAtTop
              ? "text-[#111111] hover:opacity-80"
              : "text-(--accent) hover:opacity-80"
          }`}
        >
          Portfolio
        </Link>

        {/* Navigatie links - horizontaal */}
        <div className="flex gap-4 items-center">
          <Link
            to="/"
            onClick={scrollToTop}
            className={getLinkClass("/")}
          >
            {t("nav.home")}
          </Link>

          <Link
            to="/over-mij"
            onClick={scrollToTop}
            className={getLinkClass("/over-mij")}
          >
            {t("nav.about")}
          </Link>

          <Link
            to="/projects"
            onClick={scrollToTop}
            className={getLinkClass("/projects")}
          >
            {t("nav.projects")}
          </Link>

          <Link
            to="/contact"
            onClick={scrollToTop}
            className={getLinkClass("/contact")}
          >
            {t("nav.contact")}
          </Link>

          {/* Taalwissel knop */}
          <button
            onClick={toggleLang}
            className={getLangToggleClass()}
            title={lang === "nl" ? "Switch to English" : "Schakel naar Nederlands"}
          >
            {lang === "nl" ? "EN" : "NL"}
          </button>
        </div>
      </nav>
    </header>
  );
}