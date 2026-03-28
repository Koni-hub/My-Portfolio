/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";

// ─── Translations ────────────────────────────────────────────────────────────
export const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.timeline": "Timeline",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.newyear": "New Year Countdown",

    // Theme
    "theme.light": "Light",
    "theme.dark": "Dark",
    "theme.system": "System",

    // Hero Section
    "hero.title": "Full Stack Developer",
    "hero.location": "PH Marikina",
    "hero.greeting": "Hi, I'm",

    // About Section
    "about.title": "About Me",
    "about.intro": "A passionate developer crafting digital experiences.",
    "about.name_label": "Name",
    "about.nickname_label": "Nickname",
    "about.age_label": "Age",
    "about.work_label": "Role",
    "about.quote":
      "I code with passion, debug with patience, and deliver results.",
    "about.services": "Services",
    "about.skills": "Skills",
    "about.tech": "Technologies",

    // Stats
    "stats.level": "Entry Level",
    "stats.level_value": "Junior",
    "stats.projects": "Projects Completed",
    "stats.clients": "Happy Clients",
    "stats.countries": "Countries Reached",

    // Timeline
    "timeline.title": "Work & Education",
    "timeline.work": "Work",
    "timeline.education": "Education",
    "timeline.achievements": "Achievements",
    "timeline.technical": "Technical Details",
    "timeline.skills": "Skills",
    "timeline.present": "Present",

    // Projects
    "projects.title": "Projects",
    "projects.filter.all": "All",
    "projects.filter.web": "Web",
    "projects.filter.mobile": "Mobile",
    "projects.filter.game": "Game",
    "projects.filter.ar": "AR",
    "projects.source": "Source",
    "projects.visit": "Visit",
    "projects.technologies": "Technologies",

    // Contact
    "contact.title": "Contact Me",
    "contact.email": "Email",
    "contact.location": "Location",
    "contact.send": "Send Message",
    "contact.name": "Your Name",
    "contact.message": "Your Message",
    "contact.subject": "Subject",

    // Services
    "service.web": "Web/App Development",
    "service.ar": "AR App Development",
    "service.game": "Game Development",
  },

  zh: {
    // Navbar
    "nav.home": "首页",
    "nav.timeline": "时间轴",
    "nav.about": "关于",
    "nav.projects": "项目",
    "nav.contact": "联系",
    "nav.newyear": "新年倒计时",

    // Theme
    "theme.light": "浅色",
    "theme.dark": "深色",
    "theme.system": "系统",

    // Hero Section
    "hero.title": "全栈开发工程师",
    "hero.location": "菲律宾 马里基纳",
    "hero.greeting": "你好，我是",

    // About Section
    "about.title": "关于我",
    "about.intro": "热情的开发者，致力于打造数字体验。",
    "about.name_label": "姓名",
    "about.nickname_label": "昵称",
    "about.age_label": "年龄",
    "about.work_label": "职位",
    "about.quote": "我用热情编程，用耐心调试，用结果交付。",
    "about.services": "服务",
    "about.skills": "技能",
    "about.tech": "技术栈",

    // Stats
    "stats.level": "职业水平",
    "stats.level_value": "初级",
    "stats.projects": "完成项目",
    "stats.clients": "满意客户",
    "stats.countries": "覆盖国家",

    // Timeline
    "timeline.title": "工作与教育",
    "timeline.work": "工作",
    "timeline.education": "教育",
    "timeline.achievements": "成就",
    "timeline.technical": "技术详情",
    "timeline.skills": "技能",
    "timeline.present": "至今",

    // Projects
    "projects.title": "项目展示",
    "projects.filter.all": "全部",
    "projects.filter.web": "网页",
    "projects.filter.mobile": "移动端",
    "projects.filter.game": "游戏",
    "projects.filter.ar": "增强现实",
    "projects.source": "源码",
    "projects.visit": "访问",
    "projects.technologies": "技术栈",

    // Contact
    "contact.title": "联系我",
    "contact.email": "电子邮件",
    "contact.location": "位置",
    "contact.send": "发送消息",
    "contact.name": "您的姓名",
    "contact.message": "您的留言",
    "contact.subject": "主题",

    // Services
    "service.web": "网页/应用开发",
    "service.ar": "AR应用开发",
    "service.game": "游戏开发",
  },
};

// ─── Safe localStorage read (won't throw if unavailable) ─────────────────────
const getStoredLanguage = () => {
  try {
    return localStorage.getItem("language") || "en";
  } catch {
    return "en";
  }
};

// ─── Context ─────────────────────────────────────────────────────────────────
const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  // Read localStorage synchronously on first render — no useEffect delay,
  // so the correct language is available before the first paint.
  const [language, setLanguageState] = useState(getStoredLanguage);

  // Sync <html lang=""> whenever language changes (including on first render)
  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }, [language]);

  const setLanguage = (lang) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("language", lang);
    } catch {
      // localStorage unavailable — silently ignore
    }
  };

  const t = (key) =>
    translations[language]?.[key] ?? translations["en"]?.[key] ?? key;

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t, translations }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

export default LanguageContext;
