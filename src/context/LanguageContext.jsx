import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const translations = {
  nl: {
    // Header
    "nav.home": "Home",
    "nav.about": "Over Mij",
    "nav.projects": "Projecten",
    "nav.contact": "Contact",

    // Home
    "home.tagline": "Immersieve en virtuele ervaringen ontwerpen die verbinden, inspireren en de grenzen van XR verleggen.",
    "home.cta.projects": "Bekijk projecten",
    "home.cta.story": "Mijn verhaal",
    "home.cta.contact": "Neem contact op",
    "home.location": "OUDENDIJK, NB",

    // About
    "about.title": "Mijn Verhaal",
    "about.p1": "Ik ben Flint, een 18-jarige developer en student aan het Grafisch Lyceum Utrecht, waar ik me volledig rijd in de XR development opleiding. Mijn passie ligt in het bouwen van immersieve ervaringen die mensen kunnen voelen – of het nu virtual reality is, augmented reality of interactieve installaties.",
    "about.p1.school": "Grafisch Lyceum Utrecht",
    "about.p2": "Afkomstig uit het kleine dorpje Oudendijk in Noord-Brabant, ben ik opgegroeid in een plek waar je je creativiteit moet zoeken – en dat heb ik zeker gedaan. Buiten school vind je me in de sportschool, achter mijn controller gamen of op skivakantie en een paar keer per jaar naar de skihal voor snowboarden – momenten waar ik echt tot rust kom. Deze hobby's zijn niet zomaar tijdverdrijf; ze leren me discipline, probleem-oplossing en doorzettingsvermogen.",
    "about.p2.location": "Oudendijk in Noord-Brabant",
    "about.p3": "Dat mindset – van willen leren, risico's nemen en tot het einde volhouden – is exact wat ik meeneem in mijn werk. De sportschool houdt me gefocussed en disciplined, gamen inspireert me met creative designs en mechanics, en snowboarden geeft me even helemaal weg van het scherm en adrenaline. Dit alles samen maakt me een developer die niet alleen code schrijft, maar ook begrijpt hoe je immersieve en engaging ervaringen creëert.",
    "about.p3.gym": "sportschool",
    "about.p3.gaming": "gamen",
    "about.p3.snowboard": "snowboarden",
    "about.p4": "Op deze portfolio vind je mijn werk – mijn projecten waarin ik heb geëxperimenteerd met VR, 2D games en interactieve installaties. Elk project vertegenwoordigt niet alleen wat ik heb gebouwd, maar ook wat ik ervan heb geleerd. Of je nu op zoek bent naar een developer die jouw visie kan realiseren of gewoon mijn werk wilt bekijken, ik ben hier. Laten we contact opnemen!",

    // Projects
    "projects.title": "Mijn Projecten",
    "projects.empty": "Geen projecten met deze tags gevonden.",
    "projects.role": "Rol",
    "projects.timeline": "Tijdlijn",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Neem contact met mij op! Stuur mij een email en ik zal zo snel mogelijk reageren.",
    "contact.card.title": "Email",
    "contact.card.hint": "Klik op het email adres hierboven om mij direct een bericht te sturen.",

    // Footer
    "footer.rights": "Alle rechten voorbehouden.",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About Me",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Home
    "home.tagline": "Designing immersive and virtual experiences that connect, inspire, and push the boundaries of XR.",
    "home.cta.projects": "View projects",
    "home.cta.story": "My story",
    "home.cta.contact": "Get in touch",
    "home.location": "OUDENDIJK, NB",

    // About
    "about.title": "My Story",
    "about.p1": "I'm Flint, an 18-year-old developer and student at the Grafisch Lyceum Utrecht, where I'm fully immersed in the XR development program. My passion lies in building immersive experiences that people can feel – whether that's virtual reality, augmented reality, or interactive installations.",
    "about.p1.school": "Grafisch Lyceum Utrecht",
    "about.p2": "Originally from the small village of Oudendijk in Noord-Brabant, I grew up in a place where you have to seek out your creativity – and I certainly did. Outside of school you'll find me at the gym, gaming behind my controller, or on a ski trip and a few times a year visiting the indoor ski slope for snowboarding – moments where I truly unwind. These hobbies aren't just pastimes; they teach me discipline, problem-solving, and perseverance.",
    "about.p2.location": "Oudendijk in Noord-Brabant",
    "about.p3": "That mindset – of wanting to learn, taking risks and persevering to the end – is exactly what I bring to my work. The gym keeps me focused and disciplined, gaming inspires me with creative designs and mechanics, and snowboarding gives me a complete break from the screen and some adrenaline. All of this together makes me a developer who not only writes code, but also understands how to create immersive and engaging experiences.",
    "about.p3.gym": "gym",
    "about.p3.gaming": "gaming",
    "about.p3.snowboard": "snowboarding",
    "about.p4": "On this portfolio you'll find my work – projects where I've experimented with VR, 2D games and interactive installations. Each project represents not just what I've built, but also what I've learned from it. Whether you're looking for a developer who can realise your vision or simply want to browse my work, I'm here. Let's get in touch!",

    // Projects
    "projects.title": "My Projects",
    "projects.empty": "No projects found with these tags.",
    "projects.role": "Role",
    "projects.timeline": "Timeline",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Get in touch! Send me an email and I'll reply as soon as possible.",
    "contact.card.title": "Email",
    "contact.card.hint": "Click the email address above to send me a message directly.",

    // Footer
    "footer.rights": "All rights reserved.",
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("lang") || "nl";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === "nl" ? "en" : "nl"));

  const t = (key) => {
    return translations[lang]?.[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
