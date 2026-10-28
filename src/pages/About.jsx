import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <main className="container mx-auto px-4 pt-28 pb-12">
      {/* Verhaal sectie */}
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-(--text) mb-8">{t("about.title")}</h1>

        <div className="space-y-6">
          <p className="text-lg text-(--muted) leading-relaxed hover:text-(--text) transition-colors cursor-default">
            {t("about.p1").split(t("about.p1.school"))[0]}
            <span className="font-semibold">{t("about.p1.school")}</span>
            {t("about.p1").split(t("about.p1.school"))[1]}
          </p>

          <p className="text-lg text-(--muted) leading-relaxed hover:text-(--text) transition-colors cursor-default">
            {t("about.p2").split(t("about.p2.location"))[0]}
            <span className="font-semibold">{t("about.p2.location")}</span>
            {t("about.p2").split(t("about.p2.location"))[1]}
          </p>

          <p className="text-lg text-(--muted) leading-relaxed hover:text-(--text) transition-colors cursor-default">
            {(() => {
              const text = t("about.p3");
              const gym = t("about.p3.gym");
              const gaming = t("about.p3.gaming");
              const snowboard = t("about.p3.snowboard");
              const parts = text.split(new RegExp(`(${gym}|${gaming}|${snowboard})`, "g"));
              return parts.map((part, i) =>
                [gym, gaming, snowboard].includes(part)
                  ? <span key={i} className="font-semibold">{part}</span>
                  : part
              );
            })()}
          </p>

          <p className="text-lg text-(--muted) leading-relaxed hover:text-(--text) transition-colors cursor-default">
            {t("about.p4")}
          </p>
        </div>
      </section>
    </main>
  );
}