import { Heart } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer
      className="py-8 px-6 border-t transition-colors duration-300"
      style={{
        backgroundColor: "var(--color-bg-section)",
        borderColor: "var(--color-icon-bg-hover)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Made by Badge */}
          <div
            className="inline-flex items-center shadow-lg gap-2 px-4 py-2 rounded-full"
            style={{ backgroundColor: "var(--color-icon-bg)" }}
          >
            <span
              className="text-sm"
              style={{ color: "var(--color-text-accent)" }}
            >
              {language === "zh" ? "用" : "Made with"}
            </span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span
              className="text-sm font-medium"
              style={{ color: "var(--color-text-accent)" }}
            >
              {language === "zh" ? "由 Koni 制作" : "by Koni"}
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            &copy; {new Date().getFullYear()}{" "}
            {language === "zh"
              ? "Koni Devs. 保留所有权利。"
              : "Koni Devs. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
