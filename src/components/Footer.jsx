import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-white text dark:bg-gray-900 border-t border-dark/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Made by Badge */}
          <div className="inline-flex items-center shadow-lg gap-2 px-4 py-2 dark:bg-gray-800/50 rounded-full">
            <span className="text-sm text-cyan-500 dark:text-gray-400 ">
              Made with
            </span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span className="text-sm text-cyan-400 font-medium">by Koni</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Koni Devs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
