import { Heart } from "lucide-react";

const Footer = () => {
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
              Made with
            </span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span
              className="text-sm font-medium"
              style={{ color: "var(--color-text-accent)" }}
            >
              by Koni
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            &copy; {new Date().getFullYear()} Koni Devs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
