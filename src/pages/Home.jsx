import { useState, useEffect } from "react";
import { siteConfig } from "../siteConfig";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { lang, t } = useLanguage();
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const locale = lang === "nl" ? "nl-NL" : "en-US";
      setTime(now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      }));
      setDate(now.toLocaleDateString(locale, {
        month: "short",
        day: "2-digit",
        year: "numeric"
      }).toUpperCase());
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, [lang]);

  return (
    <div className="w-full min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row pt-20 bg-(--bg)">
      {/* Linkerkolom (Geel) */}
      <div className="w-full lg:w-[50%] bg-[#eed082] text-[#111111] p-8 md:p-12 lg:p-16 flex flex-col justify-between min-h-[500px] lg:h-[calc(100vh-5rem)] relative overflow-hidden">
        {/* Top bar (Logo badge) */}
        <div>
          <div className="inline-block bg-black text-[#eed082] px-3 py-1.5 rounded font-black text-lg tracking-wider mb-12 select-none">
            FE
          </div>
        </div>

        {/* Content container (Name, tagline, CTAs) */}
        <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row justify-between items-start w-full gap-8 mb-12">
          {/* Stacked Name */}
          <h1 className="text-7xl sm:text-8xl md:text-9xl xl:text-[7.5rem] font-black tracking-tighter leading-[0.8] uppercase select-none">
            Flint<br />Eggebeen
          </h1>

          {/* Description & Links */}
          <div className="max-w-xs text-left xl:text-right xl:self-end flex flex-col xl:items-end">
            <p className="text-sm font-semibold leading-relaxed text-[#222222]">
              {t("home.tagline")}
            </p>
            {/* CTA Links */}
            <div className="mt-8 flex flex-col gap-3 items-start xl:items-end w-full">
              <Link
                to="/projects"
                className="group flex items-center gap-2 font-bold uppercase tracking-wider text-xs text-[#111111] hover:opacity-75 transition-opacity"
              >
                <span>{t("home.cta.projects")}</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
              <Link
                to="/over-mij"
                className="group flex items-center gap-2 font-bold uppercase tracking-wider text-xs text-[#111111] hover:opacity-75 transition-opacity"
              >
                <span>{t("home.cta.story")}</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
              <Link
                to="/contact"
                className="group flex items-center gap-2 font-bold uppercase tracking-wider text-xs text-[#111111] hover:opacity-75 transition-opacity"
              >
                <span>{t("home.cta.contact")}</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar (Location, Date, Time) */}
        <div className="flex flex-col sm:flex-row justify-between w-full text-[10px] sm:text-xs font-mono uppercase tracking-widest gap-2 pt-6 border-t border-black/10 select-none">
          <div>{t("home.location")}</div>
          <div>{date}</div>
          <div className="tabular-nums">{time}</div>
        </div>
      </div>

      {/* Rechterkolom (Afbeelding) */}
      <div className="w-full lg:w-[50%] h-[350px] sm:h-[450px] lg:h-[calc(100vh-5rem)] relative overflow-hidden bg-zinc-900">
        <img
          src={siteConfig.aboutImage}
          alt={siteConfig.name}
          className="w-full h-full object-cover grayscale contrast-110 brightness-95"
        />
        {/* Subtiel overlay verloop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
}