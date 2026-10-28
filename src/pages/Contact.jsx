import { siteConfig } from "../siteConfig";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <main className="container mx-auto px-4 pt-28 pb-12">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold text-(--text) mb-4">{t("contact.title")}</h1>
        <p className="text-lg text-(--muted) leading-relaxed mb-12">
          {t("contact.subtitle")}
        </p>

        {/* Contact Card */}
        <div className="bg-(--surface) rounded-lg border border-(--bordercolor) p-8 hover:border-(--accent) hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-(--accent) rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <span className="text-xl">✉️</span>
            </div>
            <h2 className="text-2xl font-bold text-(--text)">{t("contact.card.title")}</h2>
          </div>

          <a
            href={`mailto:${siteConfig.socials.email}`}
            className="inline-block bg-(--accent) text-(--accent-text) px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-lg hover:brightness-110"
          >
            {siteConfig.socials.email}
          </a>

          <p className="text-(--muted) mt-4 hover:text-(--text) transition-colors">
            {t("contact.card.hint")}
          </p>
        </div>
      </div>
    </main>
  );
}