import { Mail, MapPin } from "lucide-react";
import { contactInfo } from "../constants/index.js";
import { useLanguage } from "../context/LanguageContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const Contact = () => {
  const [mounted, setMounted] = useState(false);
  const { t, language } = useLanguage();

  // Resolves { en, zh } objects or returns plain strings as-is
  const r = (field) =>
    field && typeof field === "object" && ("en" in field || "zh" in field)
      ? (field[language] ?? field.en)
      : field;

  useEffect(() => {
    setMounted(true);
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="contact"
      className="py-24 sm:py-16 lg:py-24 px-4 sm:px-6 min-h-screen flex flex-col items-center justify-center transition-colors duration-300"
      style={{ backgroundColor: "var(--color-bg-section)" }}
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-xl sm:text-2xl font-light">
            <span style={{ color: "var(--color-text-secondary)" }}>
              {t("contact.title")}
            </span>
          </h2>
          <p
            className="text-sm sm:text-base mt-2 max-w-2xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {language === "zh"
              ? "随时与我联系。我很乐意讨论新项目、创意想法或成为您愿景的一部分。"
              : "Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions."}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Map */}
          <div
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div
              className="w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-lg ring-1"
              style={{
                backgroundColor: "var(--color-bg-card)",
                ringColor: "var(--color-icon-bg-hover)",
              }}
            >
              <iframe
                title={language === "zh" ? "位置" : "location"}
                className="w-full h-full grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                src="https://www.openstreetmap.org/export/embed.html?bbox=121.0403%2C14.4909%2C121.1304%2C14.6704&amp;layer=mapnik&amp;marker=14.6077%2C121.1054"
              ></iframe>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="grid gap-4 sm:gap-6">
              {/* Email */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl shadow-lg transition-all duration-300"
                style={{ backgroundColor: "var(--color-bg-card)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-timeline-card-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-bg-card)";
                }}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div
                  className="p-2 sm:p-3 rounded-lg"
                  style={{
                    backgroundColor: "var(--color-icon-bg)",
                    color: "var(--color-text-accent)",
                  }}
                >
                  <Mail size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3
                    className="font-medium mb-0.5 sm:mb-1 text-sm sm:text-base"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {t("contact.email")}
                  </h3>
                  <p
                    className="text-sm sm:text-base break-all transition-colors"
                    style={{ color: "var(--color-text-secondary)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--color-text-accent)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color =
                        "var(--color-text-secondary)";
                    }}
                  >
                    {contactInfo.email}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl shadow-lg"
                style={{ backgroundColor: "var(--color-bg-card)" }}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div
                  className="p-2 sm:p-3 rounded-lg"
                  style={{
                    backgroundColor: "var(--color-icon-bg)",
                    color: "var(--color-text-accent)",
                  }}
                >
                  <MapPin size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3
                    className="font-medium mb-0.5 sm:mb-1 text-sm sm:text-base"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {t("contact.location")}
                  </h3>
                  <p
                    className="text-sm sm:text-base"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {r(contactInfo.location)}
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Contact Message */}
            <div
              className="p-4 sm:p-6 rounded-xl"
              style={{ backgroundColor: "var(--color-icon-bg)" }}
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <p
                className="text-xs sm:text-sm"
                style={{ color: "var(--color-text-accent)" }}
              >
                {language === "zh"
                  ? "更喜欢发邮件？给我发消息，我会在 24 小时内回复您。"
                  : "Prefer email? Send me a message and I'll get back to you within 24 hours."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
