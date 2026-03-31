// -----------------
// Hero Data
import profile from "../assets/profile/profile_x.png";
import profile_shades from "../assets/profile/profile_shades.png";

export const heroData = {
  title: { en: "Full Stack Developer", zh: "全栈开发工程师" },
  image: profile,
  image_shades: profile_shades,
  fullName: { en: "Argie Delgado", zh: "阿吉·德尔加多" },
  location: { en: "PH Marikina", zh: "菲律宾 马里基纳" },
  linkedin: "https://www.linkedin.com/in/argie-delgado-889935334/",
  github: "https://github.com/Koni-hub",
  email: "delgadoargie04z@gmail.com",
};

// -----------------
// About Data
export const aboutData = {
  name: "Argie",
  nickname: "Gie",
  exp_freelance: new Date().getFullYear() - 2024,
  work: { en: "Full Stack Developer", zh: "全栈开发工程师" },
  age: (() => {
    const today = new Date(),
      b = new Date("2006-09-04");
    return (
      today.getFullYear() -
      b.getFullYear() -
      (today.getMonth() < b.getMonth() ||
      (today.getMonth() === b.getMonth() && today.getDate() < b.getDate())
        ? 1
        : 0)
    );
  })(),
  quote: {
    en: "I code with passion, debug with patience, and deliver results.",
    zh: "我用热情编程，用耐心调试，用结果交付。",
  },
};

// Programming languages with brief descriptions
export const programming_lang = [
  [
    "Java",
    {
      en: "A versatile, object-oriented language for building robust applications",
      zh: "一种用于构建健壮应用程序的多功能面向对象语言",
    },
  ],
  [
    "C++",
    {
      en: "A powerful language for high-performance and system programming",
      zh: "用于高性能和系统编程的强大语言",
    },
  ],
  [
    "Node.js",
    {
      en: "A runtime environment for executing JavaScript on the server side",
      zh: "在服务器端执行JavaScript的运行时环境",
    },
  ],
  [
    "PHP",
    {
      en: "A server-side scripting language designed for web development",
      zh: "专为Web开发设计的服务器端脚本语言",
    },
  ],
  [
    "C#",
    {
      en: "A modern, object-oriented language developed by Microsoft for the .NET platform",
      zh: "微软为.NET平台开发的现代面向对象语言",
    },
  ],
  [
    "JavaScript",
    {
      en: "A dynamic language for creating interactive client-side web applications",
      zh: "用于创建交互式客户端Web应用程序的动态语言",
    },
  ],
  [
    "GDScript",
    {
      en: "A high-level, dynamically typed programming language used in Godot Engine",
      zh: "Godot引擎中使用的高级动态类型编程语言",
    },
  ],
  [
    "Unreal Engine Visual Scripting",
    {
      en: "A node-based scripting system in Unreal Engine for creating gameplay mechanics without coding",
      zh: "虚幻引擎中基于节点的脚本系统，无需编码即可创建游戏机制",
    },
  ],
];

export const services = [
  { text: { en: "Web/App Development", zh: "网页/应用开发" } },
  { text: { en: "AR App Development", zh: "AR应用开发" } },
  { text: { en: "Game Development", zh: "游戏开发" } },
];

export const stats = [
  {
    label: { en: "Entry Level", zh: "职业水平" },
    value: { en: "Junior", zh: "初级" },
  },
  { label: { en: "Projects Completed", zh: "完成项目" }, value: "25" },
  { label: { en: "Happy Clients", zh: "满意客户" }, value: "11" },
  { label: { en: "Countries Reached", zh: "覆盖国家" }, value: "2" },
];

export const initialTechResources = [
  "HTML",
  {
    en: "The standard markup language for web pages",
    zh: "网页的标准标记语言",
  },
  "CSS",
  {
    en: "The styling language that describes the presentation of a document",
    zh: "描述文档呈现方式的样式语言",
  },
  "Tailwind CSS",
  { en: "A utility-first CSS framework", zh: "实用优先的CSS框架" },
];

export const additionalTechResources = [
  "React.js",
  {
    en: "A JavaScript library for building interactive user interfaces",
    zh: "用于构建交互式用户界面的JavaScript库",
  },
  "Node.js",
  {
    en: "A JavaScript runtime for building scalable server-side applications",
    zh: "用于构建可扩展服务器端应用程序的JavaScript运行时",
  },
  "Laravel",
  {
    en: "A PHP framework for modern web application development",
    zh: "现代Web应用程序开发的PHP框架",
  },
  "HTML5",
  {
    en: "The latest version of the markup language for structuring web content",
    zh: "用于构建网页内容的最新标记语言版本",
  },
  "CSS3",
  {
    en: "A style sheet language for designing responsive and modern web pages",
    zh: "用于设计响应式和现代网页的样式表语言",
  },
  "Bootstrap",
  {
    en: "A popular CSS framework for responsive, mobile-first design",
    zh: "响应式移动优先设计的流行CSS框架",
  },
  "Tailwind CSS",
  {
    en: "A utility-first CSS framework for rapid UI development",
    zh: "用于快速UI开发的实用优先CSS框架",
  },
  "RESTful API Development",
  {
    en: "A standard approach to designing and consuming APIs using HTTP methods",
    zh: "使用HTTP方法设计和使用API的标准方法",
  },
  "MySQL",
  {
    en: "An open-source relational database management system",
    zh: "开源关系数据库管理系统",
  },
  "MongoDB",
  {
    en: "A NoSQL document-oriented database for flexible data storage",
    zh: "用于灵活数据存储的NoSQL文档数据库",
  },
  "Firebase",
  {
    en: "A Google-backed platform for web and mobile app development",
    zh: "谷歌支持的网页和移动应用开发平台",
  },
  "phpMyAdmin",
  {
    en: "A web-based interface for managing MySQL databases",
    zh: "用于管理MySQL数据库的基于Web的界面",
  },
];

// -----------------
// Timeline Data
import fortuneHighSchool from "../assets/education/fortune-high-school.jpg";
import stiCollegeMarikina from "../assets/education/sti-college-marikina.png";
import nbi_logo from "../assets/education/nbi.jpg";
import tesda_region_logo from "../assets/project-logo/tesda-reg-III.png";
import gym_system_logo from "../assets/project-logo/gym-system.png";
import shermelle_logo from "../assets/project-logo/sharlogs.png";
import human_information_logo from "../assets/project-logo/human-info-system.jpg";
import ph_lore_game_logo from "../assets/project-logo/ph_lore.png";
import arise_logo from "../assets/project-logo/arise_logo.jpg";
import naviguide_logp from "../assets/project-logo/naviguide.png";
import bridgeXSign_logo from "../assets/project-logo/bridgeXsign.jpg";
import Ingat_logo from "../assets/project-logo/ingat_logo.png";
import Rooche_logo from "../assets/project-logo/rooche_logo.png";
import unreal_logo from "../assets/project-logo/unreal_logo.jpg";

export const timelineData = [
  {
    type: "work",
    position: { en: "Contract Developer", zh: "合同开发工程师" },
    period: "Feb 2026 - Present",
    title: { en: "Narrative Mystery Game", zh: "叙事悬疑游戏" },
    organization: { en: "Independent Game Development", zh: "独立游戏开发" },
    description: {
      en: "Developed a 2.5D narrative-driven mystery game with interactive storytelling and player-choice consequences, focusing on dynamic decision-making and gameplay systems.",
      zh: "开发了一款2.5D叙事驱动的悬疑游戏，具有互动故事情节和玩家选择后果，专注于动态决策和游戏系统。",
    },
    logo: unreal_logo,
    achievements: {
      en: [
        "Implemented gameplay systems including NPC behavior, dialogue, inventory, and decision-based outcomes using visual scripting.",
        "Built player interaction mechanics to support branching choices and narrative progression.",
      ],
      zh: [
        "使用可视化脚本实现了包括NPC行为、对话、物品栏和基于决策的结果在内的游戏系统。",
        "构建了玩家交互机制，支持分支选择和叙事进展。",
      ],
    },
    technicalDetails: {
      en: [
        "Engine: Unreal Engine (Visual Scripting)",
        "Languages: C#",
        "Platform: PC (Windows)",
        "Features: Interactive storytelling, branching choices, NPC interactions, inventory systems",
      ],
      zh: [
        "引擎：虚幻引擎（可视化脚本）",
        "语言：C#",
        "平台：PC（Windows）",
        "功能：互动叙事、分支选择、NPC互动、物品栏系统",
      ],
    },
    relevantSkills: [
      "Unreal Engine Development",
      "Visual Scripting",
      "C# Programming",
      "Narrative & Gameplay Systems Design",
      "Interactive Storytelling",
      "UI/UX Design",
    ],
  },
  {
    type: "work",
    position: { en: "Contract Developer", zh: "合同开发工程师" },
    period: "Feb 2026 - Present",
    title: { en: "Rogue Combat Game", zh: "肉鸽战斗游戏" },
    organization: { en: "Independent Game Development", zh: "独立游戏开发" },
    description: {
      en: "Developed a 2.5D rogue game with adaptive gameplay systems, focusing on combat mechanics, player progression, and replayable challenges.",
      zh: "开发了一款2.5D肉鸽游戏，具有自适应游戏系统，专注于战斗机制、玩家进展和可重玩的挑战。",
    },
    logo: unreal_logo,
    achievements: {
      en: [
        "Designed and implemented adaptive gameplay systems including combat and fatigue mechanics using visual scripting.",
        "Built UI and progression tracking systems to enhance replayability and player engagement.",
      ],
      zh: [
        "使用可视化脚本设计并实现了包括战斗和疲劳机制在内的自适应游戏系统。",
        "构建了UI和进度跟踪系统，以增强可重玩性和玩家参与度。",
      ],
    },
    technicalDetails: {
      en: [
        "Engine: Unreal Engine (Visual Scripting)",
        "Languages: C#",
        "Platform: PC (Windows)",
        "Features: Adaptive combat systems, progression tracking, fatigue mechanics, UI systems",
      ],
      zh: [
        "引擎：虚幻引擎（可视化脚本）",
        "语言：C#",
        "平台：PC（Windows）",
        "功能：自适应战斗系统、进度跟踪、疲劳机制、UI系统",
      ],
    },
    relevantSkills: [
      "Unreal Engine Development",
      "Visual Scripting",
      "C# Programming",
      "Game Systems Design",
      "Gameplay Programming",
      "UI/UX Design",
    ],
  },
  {
    type: "work",
    position: { en: "Contract Developer", zh: "合同开发工程师" },
    period: "Sept 2025 – Jan 2026",
    title: { en: "Mobile App & Web Developer", zh: "移动应用与网页开发工程师" },
    organization: "Rooche Digital Company",
    description: {
      en: "Developed and maintained a mobile application using React Native and managed a WordPress website, ensuring functionality, performance, and up-to-date content.",
      zh: "使用React Native开发和维护了移动应用程序，并管理WordPress网站，确保功能、性能和内容更新。",
    },
    logo: Rooche_logo,
    achievements: {
      en: [
        "Built and maintained a cross-platform mobile application using React Native.",
        "Managed and updated WordPress website content and structure.",
        "Ensured responsive design and smooth user experience across platforms.",
      ],
      zh: [
        "使用React Native构建并维护了跨平台移动应用程序。",
        "管理并更新了WordPress网站内容和结构。",
        "确保跨平台的响应式设计和流畅的用户体验。",
      ],
    },
    technicalDetails: {
      en: [
        "Framework: React Native",
        "Web Platform: WordPress",
        "Languages: JavaScript, PHP (WordPress), HTML, CSS",
        "Platform: Mobile (Android/iOS), Web",
      ],
      zh: [
        "框架：React Native",
        "网页平台：WordPress",
        "语言：JavaScript、PHP（WordPress）、HTML、CSS",
        "平台：移动端（Android/iOS）、网页",
      ],
    },
    relevantSkills: [
      "React Native Development",
      "JavaScript Programming",
      "WordPress Management",
      "Mobile App Development",
      "Web Development",
    ],
  },
  {
    type: "work",
    position: { en: "Contract Developer", zh: "合同开发工程师" },
    period: "Oct 2025 – Dec 2025",
    title: {
      en: "INGAT: Kidnapping Prevention Visual Novel Game",
      zh: "INGAT：防绑架视觉小说游戏",
    },
    organization: { en: "Independent Game Development", zh: "独立游戏开发" },
    description: {
      en: "Developed a visual novel game that promotes awareness of kidnapping prevention in the Philippines through interactive storytelling and player-driven choices.",
      zh: "开发了一款视觉小说游戏，通过互动故事情节和玩家驱动的选择，提高菲律宾防绑架意识。",
    },
    logo: Ingat_logo,
    achievements: {
      en: [
        "Designed branching narratives focused on real-world kidnapping prevention scenarios.",
        "Implemented decision-based gameplay to reinforce player awareness and consequences.",
        "Created immersive visual and UI elements to support storytelling.",
      ],
      zh: [
        "设计了专注于现实世界防绑架场景的分支叙事。",
        "实现了基于决策的游戏玩法，以强化玩家意识和后果。",
        "创建了沉浸式视觉和UI元素以支持故事情节。",
      ],
    },
    technicalDetails: {
      en: [
        "Engine: Unity",
        "Languages: C#, ShaderLab, HLSL, HTML",
        "Platform: PC",
        "Features: Branching dialogue, choice-based outcomes, narrative UI",
      ],
      zh: [
        "引擎：Unity",
        "语言：C#、ShaderLab、HLSL、HTML",
        "平台：PC",
        "功能：分支对话、基于选择的结果、叙事UI",
      ],
    },
    relevantSkills: [
      "Unity Game Development",
      "C# Programming",
      "Interactive Storytelling",
      "Game UI/UX Design",
      "Shader Development",
    ],
  },
  {
    type: "work",
    position: { en: "Contract Developer", zh: "合同开发工程师" },
    period: "July 2025 – Aug 2025",
    title: {
      en: "BridgeXSign: ML-Based Sign Language Translator",
      zh: "BridgeXSign：基于机器学习的手语翻译器",
    },
    organization: {
      en: "Independent Mobile App Development",
      zh: "独立移动应用开发",
    },
    description: {
      en: "Developed a mobile application enabling real-time translation between speech, text, and sign language with quick-access tools for translation, community connection, and sign language references.",
      zh: "开发了一款移动应用程序，实现语音、文本和手语之间的实时翻译，提供翻译、社区连接和手语参考的快速访问工具。",
    },
    logo: bridgeXSign_logo,
    achievements: {
      en: [
        "Implemented speech-to-text and text-to-speech translation for accessibility.",
        "Developed camera-based sign language recognition using machine learning.",
        "Integrated quick shortcuts for translation modes, community access, and sign references.",
      ],
      zh: [
        "实现了语音转文字和文字转语音翻译，提高无障碍访问能力。",
        "使用机器学习开发了基于摄像头的手语识别功能。",
        "集成了翻译模式、社区访问和手语参考的快捷方式。",
      ],
    },
    technicalDetails: {
      en: [
        "Languages: Java, Python",
        "Platform: Android",
        "Tools & Frameworks: Android Studio, TensorFlowLite, Firebase, Camera API, Speech Recognition API",
        "Features: Speech-to-text, Sign-to-speech, Community tab, Sign language info tab",
      ],
      zh: [
        "语言：Java、Python",
        "平台：Android",
        "工具和框架：Android Studio、TensorFlowLite、Firebase、摄像头API、语音识别API",
        "功能：语音转文字、手语转语音、社区标签、手语信息标签",
      ],
    },
    relevantSkills: [
      "Android Development",
      "Machine Learning",
      "TensorFlowLite",
      "Speech Recognition",
      "Camera API Integration",
      "Mobile UI/UX Design",
    ],
  },
  {
    type: "work",
    position: { en: "Contract Developer", zh: "合同开发工程师" },
    period: "June 2025 - July 2025",
    title: {
      en: "NaviGuide: Aircraft Marshalling Gesture Trainer",
      zh: "NaviGuide：飞机引导手势训练器",
    },
    organization: { en: "Independent AR Development", zh: "独立AR开发" },
    description: {
      en: "Developed a AR training app for learning proper aircraft marshalling gestures with real-time feedback.",
      zh: "开发了一款AR训练应用程序，用于学习正确的飞机引导手势，提供实时反馈。",
    },
    logo: naviguide_logp,
    achievements: {
      en: [
        "Used MediaPipe for pose detection and gesture recognition in Unity.",
        "Implemented interactive guides with visual cues for correct signal execution.",
      ],
      zh: [
        "在Unity中使用MediaPipe进行姿势检测和手势识别。",
        "实现了带有视觉提示的交互式指南，用于正确的信号执行。",
      ],
    },
    technicalDetails: {
      en: [
        "Engine: Unity (C# scripting).",
        "Pose Detection: MediaPipe for real-time landmark tracking.",
        "Platform: Android (built and deployed via Unity).",
        "Features: Gesture recognition, AR training environment, real-time visual feedback.",
      ],
      zh: [
        "引擎：Unity（C#脚本）。",
        "姿势检测：MediaPipe用于实时地标跟踪。",
        "平台：Android（通过Unity构建和部署）。",
        "功能：手势识别、AR训练环境、实时视觉反馈。",
      ],
    },
    relevantSkills: [
      "Unity",
      "MediaPipe",
      "AR Development",
      "Gesture Recognition",
      "Android Deployment",
    ],
  },
  {
    type: "work",
    position: { en: "Contract Developer", zh: "合同开发工程师" },
    period: "June 2025 - July 2025",
    title: { en: "ARISE: AR PC Unit", zh: "ARISE：AR电脑组装单元" },
    organization: {
      en: "Independent Mobile AR Development",
      zh: "独立移动AR开发",
    },
    description: {
      en: "Designed and developed an Android augmented reality application for interactive computer assembly and disassembly training, leveraging image recognition and 3D visualization.",
      zh: "设计和开发了一款Android增强现实应用程序，用于交互式计算机组装和拆卸培训，利用图像识别和3D可视化技术。",
    },
    logo: arise_logo,
    achievements: {
      en: [
        "Built an AR-based Android application using Unity and Vuforia for marker-based component recognition.",
        "Implemented interactive 3D models of PC components and disassembly instructions.",
        "Integrated SceneView for real-time rendering of 3D parts and animations.",
        "Optimized asset performance for mobile devices with adaptive UI layouts and responsive touch controls.",
      ],
      zh: [
        "使用Unity和Vuforia构建了基于标记的AR Android应用程序，用于组件识别。",
        "实现了PC组件的交互式3D模型和拆卸说明。",
        "集成了SceneView用于3D零件和动画的实时渲染。",
        "优化了移动设备的资产性能，采用自适应UI布局和响应式触控控制。",
      ],
    },
    technicalDetails: {
      en: [
        "Engine: Unity (C# scripting for AR interactions and UI logic).",
        "Platform: Android (deployed via Unity Android build pipeline).",
        "Features: Vuforia image tracking, 3D component interaction, mobile touch UI.",
      ],
      zh: [
        "引擎：Unity（用于AR交互和UI逻辑的C#脚本）。",
        "平台：Android（通过Unity Android构建管道部署）。",
        "功能：Vuforia图像跟踪、3D组件交互、移动触控UI。",
      ],
    },
    relevantSkills: [
      "Unity",
      "Vuforia AR",
      "Mobile AR Development",
      "3D Modeling Integration",
      "UI/UX Design",
      "C# Programming",
      "Android Deployment",
    ],
  },
  {
    type: "work",
    position: { en: "Contract Developer", zh: "合同开发工程师" },
    period: "March 2025 - April 2025",
    title: { en: "PH Lore: Mini RPG Mobile Game", zh: "PH民俗：迷你RPG手游" },
    organization: { en: "Independent Game Development", zh: "独立游戏开发" },
    description: {
      en: "Designed and developed a mobile game exploring Philippine folklore, combining interactive storytelling with engaging gameplay mechanics.",
      zh: "设计和开发了一款探索菲律宾民间传说的手游，将互动故事情节与引人入胜的游戏机制相结合。",
    },
    logo: ph_lore_game_logo,
    achievements: {
      en: [
        "Developed a 2D mobile game built on Godot Engine centered on creatures and myths from Philippine folklore.",
        "Implemented a branching narrative system featuring quests based on regional myths.",
        "Created hand-drawn style assets and animations optimized for mobile performance.",
        "Deployed the game on Android with adaptive UI and scalable control schemes for various screen sizes.",
      ],
      zh: [
        "基于Godot引擎开发了以菲律宾民间传说中的生物和神话为中心的2D手游。",
        "实现了以地区神话为基础的任务分支叙事系统。",
        "创建了手绘风格资产和针对移动性能优化的动画。",
        "在Android上部署了游戏，采用自适应UI和可扩展的控制方案以适应不同屏幕尺寸。",
      ],
    },
    technicalDetails: {
      en: [
        "Engine: Godot (GDScript and visual scripting for gameplay logic).",
        "Platform: Android (exported via Godot mobile templates).",
        "Features: Dialogue system, quest tracking, inventory system, mobile touch UI.",
      ],
      zh: [
        "引擎：Godot（用于游戏逻辑的GDScript和可视化脚本）。",
        "平台：Android（通过Godot移动模板导出）。",
        "功能：对话系统、任务跟踪、物品栏系统、移动触控UI。",
      ],
    },
    relevantSkills: [
      "Godot Engine",
      "Mobile Game Development",
      "2D Animation",
      "UI/UX Design",
      "Narrative Design",
      "GDScript",
      "Game Publishing (Android)",
    ],
  },
  {
    type: "work",
    position: { en: "Contract Developer", zh: "合同开发工程师" },
    period: "July 2024 - December 2024",
    title: { en: "Document Controller System", zh: "文件控制系统" },
    organization: "TESDA Region 3",
    description: {
      en: "Developed a document controller system to streamline TESDA Region 3's document processing workflow",
      zh: "开发了一套文件控制系统，以简化TESDA第3区的文件处理工作流程",
    },
    logo: tesda_region_logo,
    achievements: {
      en: [
        "Developed and implemented a document tracking system with role-based access control, improving document processing workflow efficiency.",
        "Created an audit logging system to track user actions and maintain document history.",
        "Developed dashboard analytics for monitoring document status (completed, pending, rejected).",
        "Built user-friendly interfaces for document creation, updating, and status management.",
      ],
      zh: [
        "开发并实现了具有基于角色的访问控制的文件跟踪系统，提高了文件处理工作流程效率。",
        "创建了审计日志系统，用于跟踪用户操作和维护文件历史记录。",
        "开发了用于监控文件状态（已完成、待处理、已拒绝）的仪表板分析功能。",
        "构建了用于文件创建、更新和状态管理的用户友好界面。",
      ],
    },
    technicalDetails: {
      en: [
        "Frontend: React.js with custom components for document management interface.",
        "Backend: Node.js and Express.js for RESTful API Development.",
        "Database: MySQL for document and audit log storage",
      ],
      zh: [
        "前端：React.js，带有用于文件管理界面的自定义组件。",
        "后端：Node.js和Express.js用于RESTful API开发。",
        "数据库：MySQL用于文件和审计日志存储",
      ],
    },
    relevantSkills: [
      "React.js",
      "Node.js",
      "MySQL",
      "API Development",
      "User Authentication",
      "Role-Based Access Control",
      "Dashboard Analytics",
    ],
  },
  {
    type: "work",
    position: { en: "Contract Developer", zh: "合同开发工程师" },
    period: "August 2024 - November 2024",
    title: { en: "Human Information System", zh: "人力信息系统" },
    organization: { en: "HR Management Solutions", zh: "人力资源管理解决方案" },
    description: {
      en: "Developed HR Management Solutions, a human information system designed to enhance efficiency, accuracy, and automation across various human resource processes",
      zh: "开发了HR管理解决方案，这是一套人力信息系统，旨在提高各种人力资源流程的效率、准确性和自动化程度",
    },
    logo: human_information_logo,
    achievements: {
      en: [
        "Implemented dynamic personnel tracking system with unique identifier generation.",
        "Built multi-role access system supporting Admin, Principal, and Personnel user types.",
        "Implemented automated PDF generation for Personnel Data Form (PDF) and Personal Data Sheet (PDS).",
        "Built secure employee data management system.",
      ],
      zh: [
        "实现了具有唯一标识符生成的动态人员跟踪系统。",
        "构建了支持管理员、校长和人员用户类型的多角色访问系统。",
        "实现了人员数据表（PDF）和个人数据表（PDS）的自动PDF生成。",
        "构建了安全的员工数据管理系统。",
      ],
    },
    technicalDetails: {
      en: [
        "Frontend: Tailwind CSS for responsive design optimized for mobile users.",
        "Database: MySQL with optimized queries.",
        "Backend: Laravel PHP framework for robust system architecture.",
        "Database: MySQL for efficient personnel data management.",
      ],
      zh: [
        "前端：Tailwind CSS，用于针对移动用户优化的响应式设计。",
        "数据库：具有优化查询的MySQL。",
        "后端：Laravel PHP框架，用于健壮的系统架构。",
        "数据库：MySQL用于高效的人员数据管理。",
      ],
    },
    relevantSkills: [
      "Laravel PHP",
      "MySQL",
      "Bootstrap",
      "jQuery",
      "API Development",
      "PDF Generation",
      "Multi-Role Access",
    ],
  },
  {
    type: "work",
    position: { en: "Contract Developer", zh: "合同开发工程师" },
    period: "September 2024 - December 2024",
    title: { en: "Gym Management System", zh: "健身房管理系统" },
    organization: "JMNID Gym",
    description: {
      en: "Developed comprehensive gym management system handling membership and workout tracking for JMNID Gym.",
      zh: "为JMNID健身房开发了全面的健身房管理系统，处理会员和锻炼跟踪功能。",
    },
    logo: gym_system_logo,
    achievements: {
      en: [
        "Developed a multi-role access system enabling distinct functionalities for Admin and User roles.",
        "Implemented a system to efficiently track work tasks and meal plans.",
        "Designed and implemented a schedule planning system to organize tasks and activities efficiently.",
      ],
      zh: [
        "开发了多角色访问系统，为管理员和用户角色提供不同功能。",
        "实现了高效跟踪工作任务和膳食计划的系统。",
        "设计并实现了日程规划系统，以高效组织任务和活动。",
      ],
    },
    technicalDetails: {
      en: [
        "Full Stack: MERN (MongoDB, Express.js, React.js, Node.js)",
        "Styling: Tailwind CSS for responsive design",
      ],
      zh: [
        "全栈：MERN（MongoDB、Express.js、React.js、Node.js）",
        "样式：Tailwind CSS用于响应式设计",
      ],
    },
    relevantSkills: [
      "MERN Stack",
      "Tailwind CSS",
      "UX/UI Design",
      "User Access Management",
    ],
  },
  {
    type: "work",
    position: { en: "Contract Developer", zh: "合同开发工程师" },
    period: "August 2024 - September 2024",
    title: { en: "Apartment Management System", zh: "公寓管理系统" },
    organization: "Shermelle Properties",
    description: {
      en: "Developed an Apartment Management System for Shermelle Properties to efficiently handle apartment operations and management tasks.",
      zh: "为Shermelle Properties开发了公寓管理系统，以高效处理公寓运营和管理任务。",
    },
    logo: shermelle_logo,
    achievements: {
      en: [
        "Developed an intuitive and responsive user interface using Tailwind CSS, enabling seamless navigation and interaction for users.",
        "Built a secure and scalable backend with PHP and PHPMyAdmin, ensuring reliable storage and efficient retrieval of property and tenant data.",
      ],
      zh: [
        "使用Tailwind CSS开发了直观的响应式用户界面，使用户能够无缝导航和交互。",
        "使用PHP和PHPMyAdmin构建了安全且可扩展的后端，确保房产和租户数据的可靠存储和高效检索。",
      ],
    },
    technicalDetails: {
      en: [
        "Frontend: Tailwind CSS for responsive, mobile-friendly design.",
        "Backend: PHP for server-side logic.",
        "Database: MySQL for data management.",
      ],
      zh: [
        "前端：Tailwind CSS用于响应式、移动友好的设计。",
        "后端：PHP用于服务器端逻辑。",
        "数据库：MySQL用于数据管理。",
      ],
    },
    relevantSkills: [
      "PHP",
      "MySQL",
      "Tailwind CSS",
      "Responsive Design",
      "Database Management",
    ],
  },
  {
    type: "work",
    position: { en: "Contract Developer", zh: "合同开发工程师" },
    period: "February 2024 - June 2024",
    title: { en: "Work Immersion - Data Encoder", zh: "工作实习 - 数据录入员" },
    organization: {
      en: "NBI Riverbanks Satellite Office",
      zh: "NBI河岸卫星办公室",
    },
    description: {
      en: "Handled data encoding and management at the NBI Riverbanks Satellite Office in Marikina City",
      zh: "在马里基纳市NBI河岸卫星办公室负责数据录入和管理",
    },
    logo: nbi_logo,
    achievements: {
      en: [
        "Processed and encoded over 500 applicant records with high accuracy.",
        "Managed biometric data collection and verification processes.",
        "Assisted applicants through clearance application procedures.",
        "Maintained strict data privacy and confidentiality standards.",
      ],
      zh: [
        "以高准确率处理和录入了500多条申请人记录。",
        "管理了生物特征数据的采集和验证流程。",
        "协助申请人完成许可申请程序。",
        "严格维护数据隐私和保密标准。",
      ],
    },
    technicalDetails: {
      en: [
        "Digitized case files and records, converting physical documents into digital formats for easier access and management.",
        "Implemented data validation processes to ensure data accuracy and consistency by checking for errors.",
      ],
      zh: [
        "将案件档案和记录数字化，将纸质文档转换为数字格式，方便访问和管理。",
        "实施数据验证流程，通过检查错误确保数据准确性和一致性。",
      ],
    },
    relevantSkills: [
      "Data Entry",
      "Database Management",
      "Data Privacy",
      "Office Administration",
      "Data Validation",
      "Document Digitization",
    ],
  },
  {
    type: "education",
    period: "August 2024 - Present",
    title: {
      en: "Bachelor of Science in Computer Science",
      zh: "计算机科学理学学士",
    },
    organization: {
      en: "STI College - Marikina Campus",
      zh: "STI学院 - 马里基纳校区",
    },
    logo: stiCollegeMarikina,
    achievements: {
      en: [
        "Active in coding competitions, participating regularly to sharpen problem-solving and programming skills.",
        "Participated in open-source tech project teams, contributing to collaborative development and innovation.",
        "Focused on developing practical programming skills through hands-on projects and real-world applications.",
      ],
      zh: [
        "积极参加编程竞赛，定期参与以提高解决问题和编程技能。",
        "参与开源技术项目团队，为协作开发和创新做出贡献。",
        "专注于通过实践项目和现实应用开发实际编程技能。",
      ],
    },
    technicalDetails: {
      en: [
        "Developed mobile apps, focusing on functionality and performance.",
        "Followed agile methodologies and Scrum practices for efficient project management and collaboration.",
        "Collaborated on team-based development projects to achieve shared goals.",
      ],
      zh: [
        "开发了移动应用程序，专注于功能性和性能。",
        "遵循敏捷方法论和Scrum实践，实现高效的项目管理和协作。",
        "在团队开发项目上协作，实现共同目标。",
      ],
    },
    relevantSkills: [
      "Mobile Development",
      "Agile Methodology",
      "Team Collaboration",
      "Problem Solving",
      "Software Development Life Cycle (SDLC)",
      "Version Control (Git)",
      "Cross-Platform Development",
      "UI/UX Design",
    ],
  },
  {
    type: "education",
    period: "November 2022 - July 2024",
    title: {
      en: "IT in Mobile App and Web Development",
      zh: "移动应用和网页开发信息技术",
    },
    organization: {
      en: "STI College - Marikina Campus",
      zh: "STI学院 - 马里基纳校区",
    },
    logo: stiCollegeMarikina,
    achievements: {
      en: [
        "Learned full-stack development, gaining skills in both front-end and back-end to build complete web applications.",
        "Led group coding projects, coordinating tasks and ensuring effective collaboration to achieve project goals.",
        "Built responsive web applications, ensuring they are optimized for various devices and screen sizes.",
      ],
      zh: [
        "学习了全栈开发，掌握了前端和后端技能，能够构建完整的Web应用程序。",
        "领导团队编程项目，协调任务并确保有效协作以实现项目目标。",
        "构建了响应式Web应用程序，确保针对各种设备和屏幕尺寸进行优化。",
      ],
    },
    technicalDetails: {
      en: [
        "Worked on web development projects, building dynamic and responsive websites.",
        "Engaged in system development, designing and building software solutions to meet specific user needs.",
        "Worked on frontend and backend integration, ensuring seamless communication between user interfaces and server-side functionality.",
      ],
      zh: [
        "参与了网页开发项目，构建动态且响应式的网站。",
        "参与了系统开发，设计和构建软件解决方案以满足特定用户需求。",
        "进行了前后端集成工作，确保用户界面和服务器端功能之间的无缝通信。",
      ],
    },
    relevantSkills: [
      "Full-Stack Web Development",
      "Mobile Development",
      "Database Design and Management",
      "Project Management",
      "Team Collaboration and Leadership",
      "Frontend and Backend Integration",
      "Cross-Platform Development",
    ],
  },
  {
    type: "education",
    period: "January 2017 - June 2022",
    title: { en: "High School Diploma", zh: "高中文凭" },
    organization: { en: "Fortune High School", zh: "富图高中" },
    logo: fortuneHighSchool,
    achievements: {
      en: [
        "Participated in tech clubs, engaging in activities, discussions, and projects to enhance technical knowledge and skills.",
        "Maintained good academic standing by consistently achieving high grades and meeting academic requirements.",
        "Developed foundation skills by mastering key concepts and building a strong base for advanced learning.",
      ],
      zh: [
        "参加了科技俱乐部，参与活动、讨论和项目，以提高技术知识和技能。",
        "通过持续取得优异成绩和满足学术要求保持良好的学术地位。",
        "通过掌握关键概念并为高级学习奠定坚实基础来发展基础技能。",
      ],
    },
    technicalDetails: {
      en: [
        "Mastered basic programming concepts, including variables, control structures, data types, and functions.",
        "Possess strong computer literacy, including proficiency in software applications, troubleshooting, and understanding of computer systems.",
        "Strong problem-solving skills, with the ability to analyze issues and develop effective solutions efficiently.",
      ],
      zh: [
        "掌握了基本编程概念，包括变量、控制结构、数据类型和函数。",
        "具备较强的计算机素养，包括熟练使用软件应用程序、故障排除和理解计算机系统。",
        "具备较强的问题解决能力，能够高效分析问题并制定有效解决方案。",
      ],
    },
    relevantSkills: [
      "Basic Programming",
      "Computer Skills",
      "Teamwork",
      "Problem Solving",
    ],
  },
];

// -----------------
// Projects Data
import onlineOrderingSystemImg from "../assets/projects/online-ordering-system.png";
import documentControllerSystemImg from "../assets/projects/online-document-controller-system.png";
import apartmentManagementSystemImg from "../assets/projects/apartment-management-system.png";
import fitnessGymSystemImg from "../assets/projects/online-fitness-system.png";
import humanInformationSystemImg from "../assets/projects/online-human-information-system.png";
import bookManagementSystemImg from "../assets/projects/online-book-management-system.png";
import bookSummaryImg from "../assets/projects/static-book-summary.png";
import nexProxyImg from "../assets/projects/static-nex-proxy.png";
import cakeStoreImg from "../assets/projects/static-cake-store.png";
import phLoreMiniRPGImg from "../assets/projects/ph_lore.png";
import arPcAssemblyImg from "../assets/projects/arise.jpg";
import naviGuideImg from "../assets/projects/naviguide.jpg";
import bridgeXSignImg from "../assets/projects/bridgeXsign.jpg";
import IngatImg from "../assets/projects/ingat.jpg";
import unrealImg from "../assets/projects/unreal.jpg";

export const projects = [
  {
    title: { en: "Narrative Mystery Game", zh: "叙事悬疑游戏" },
    description: {
      en: "Developed a 2.5D narrative-driven mystery game with interactive storytelling and player-choice consequences. Implemented gameplay systems including NPC behavior, dialogue, inventory, and decision-based outcomes.",
      zh: "开发了一款2.5D叙事驱动的悬疑游戏，具有互动故事情节和玩家选择后果。实现了包括NPC行为、对话、物品栏和基于决策的结果在内的游戏系统。",
    },
    technologies: "Unreal Engine, C#, ShaderLab, High-Level Shader Language",
    imageUrl: unrealImg,
    links: { source: "#", website: "#" },
  },
  {
    title: { en: "Rogue Combat Game", zh: "肉鸽战斗游戏" },
    description: {
      en: "Developed a 2.5D rogue game with adaptive gameplay systems, including combat, progression tracking, and player-driven difficulty. Built UI systems to support replayability and risk-reward challenges.",
      zh: "开发了一款2.5D肉鸽游戏，具有自适应游戏系统，包括战斗、进度跟踪和玩家驱动的难度。构建了UI系统以支持可重玩性和风险奖励挑战。",
    },
    technologies: "Unreal Engine, C#, ShaderLab, High-Level Shader Language",
    imageUrl: unrealImg,
    links: { source: "#", website: "#" },
  },
  {
    title: {
      en: "INGAT: Kidnapping Prevention Visual Novel Game",
      zh: "INGAT：防绑架视觉小说游戏（菲律宾）",
    },
    description: {
      en: "A visual novel game that raises awareness about kidnapping prevention in the Philippines through interactive storytelling and decision-based gameplay.",
      zh: "一款视觉小说游戏，通过互动故事情节和基于决策的游戏玩法，提高菲律宾防绑架意识。",
    },
    technologies: "Unity, C#, ShaderLab, High-Level Shader Language, HTML",
    imageUrl: IngatImg,
    links: { source: "#", website: "#" },
  },
  {
    title: {
      en: "BridgeXSign: ML-Based Sign Language Translator",
      zh: "BridgeXSign：基于机器学习的手语翻译器",
    },
    description: {
      en: "A mobile application enabling real-time translation between speech, text, and sign language, featuring quick-access tools for translation, community engagement, and sign language references.",
      zh: "一款移动应用程序，实现语音、文本和手语之间的实时翻译，具有翻译、社区参与和手语参考的快速访问工具。",
    },
    technologies:
      "Java, Android Studio, Firebase, Machine Learning, Camera API, Speech Recognition API",
    imageUrl: bridgeXSignImg,
    links: { source: "#", website: "#" },
  },
  {
    title: {
      en: "NaviGuide: Aircraft Marshalling Gesture Trainer",
      zh: "NaviGuide：飞机引导手势训练器",
    },
    description: {
      en: "An Android-based VR training application for guided learning of proper aircraft marshalling gestures, using Unity and MediaPipe for real-time pose detection and interactive guidance.",
      zh: "一款基于Android的VR培训应用程序，用于指导学习正确的飞机引导手势，使用Unity和MediaPipe进行实时姿势检测和交互式指导。",
    },
    technologies:
      "Unity, MediaPipe, VR Development, Gesture Recognition, Android Deployment",
    imageUrl: naviGuideImg,
    links: { source: "#", website: "#" },
  },
  {
    title: { en: "AR PC Assembly/Disassembly", zh: "AR电脑组装/拆卸" },
    description: {
      en: "An Android augmented reality app for interactive PC component assembly and disassembly, featuring marker-based recognition and step-by-step 3D guides.",
      zh: "一款用于交互式PC组件组装和拆卸的Android增强现实应用程序，具有基于标记的识别和逐步3D指南。",
    },
    technologies:
      "Unity, Vuforia AR, C# Programming, 3D Modeling Integration, Android Deployment",
    imageUrl: arPcAssemblyImg,
    links: { source: "#", website: "#" },
  },
  {
    title: { en: "PH LORE: Mini RPG Mobile Game", zh: "PH民俗：迷你RPG手游" },
    description: {
      en: "A mobile RPG game that immerses players in Filipino folklore through short quests, creature encounters, and lore-based dialogue, designed and optimized for Android devices.",
      zh: "一款手游RPG，通过短任务、生物遭遇和基于民俗的对话让玩家沉浸在菲律宾民间传说中，专为Android设备设计和优化。",
    },
    technologies:
      "Godot Engine (GDScript), 2D Animation, Mobile UI/UX, Android Export",
    imageUrl: phLoreMiniRPGImg,
    links: { source: "https://youtu.be/T5xKT8mfGIc", website: "#" },
  },
  {
    title: { en: "Online Ordering System", zh: "在线订购系统" },
    description: {
      en: "A system for managing orders and sales for businesses during the G12 exposition event at STI College Marikina.",
      zh: "一套用于管理STI学院马里基纳G12博览会活动期间企业订单和销售的系统。",
    },
    technologies: "MySQL, CSS, NodeJS, ReactJS",
    imageUrl: onlineOrderingSystemImg,
    links: { source: "https://youtu.be/mOXKZSJ0PVY", website: "#" },
  },
  {
    title: { en: "Document Controller System", zh: "文件控制系统" },
    description: {
      en: "A system to organize, track, and manage documents, ensuring easy access and updates.",
      zh: "一套用于组织、跟踪和管理文件的系统，确保轻松访问和更新。",
    },
    technologies: "MySQL, NodeJS, ReactJS",
    imageUrl: documentControllerSystemImg,
    links: { source: "https://youtu.be/8iNircCXELo", website: "#" },
  },
  {
    title: { en: "Apartment Management System", zh: "公寓管理系统" },
    description: {
      en: "A system designed to organize, track, and manage payments, allowing tenants to rent rooms and receive updates seamlessly.",
      zh: "一套用于组织、跟踪和管理付款的系统，允许租户无缝租房和接收更新。",
    },
    technologies: "PHP, PhpMyAdmin, JavaScript",
    imageUrl: apartmentManagementSystemImg,
    links: { source: "https://youtu.be/c0SnLSAaoOQ", website: "#" },
  },
  {
    title: { en: "Fitness Gym System", zh: "健身房系统" },
    description: {
      en: "A system for managing workout plans, meal schedules, and member progress at fitness gyms.",
      zh: "一套用于管理健身房锻炼计划、膳食时间表和会员进度的系统。",
    },
    technologies: "MongoDB, NodeJS, ReactJS",
    imageUrl: fitnessGymSystemImg,
    links: { source: "https://youtu.be/Kh9wC7sLZvc", website: "#" },
  },
  {
    title: { en: "Human Information System", zh: "人力信息系统" },
    description: {
      en: "A system designed to manage and organize personal information efficiently and securely.",
      zh: "一套旨在高效、安全地管理和组织个人信息的系统。",
    },
    technologies: "Laravel, Vue JS, PHP",
    imageUrl: humanInformationSystemImg,
    links: { source: "https://youtu.be/lS6fDsNkikI", website: "#" },
  },
  {
    title: { en: "Book Management System", zh: "图书管理系统" },
    description: {
      en: "A system for managing book inventories, borrowing, and returning books in libraries or bookstores.",
      zh: "一套用于管理图书馆或书店图书库存、借阅和归还的系统。",
    },
    technologies: "Java, Firebase",
    imageUrl: bookManagementSystemImg,
    links: { source: "https://youtu.be/vXhg1piY0jE", website: "#" },
  },
  {
    title: { en: "Book Summary", zh: "图书摘要" },
    description: {
      en: "A system providing summaries of popular books to help users decide what to read next.",
      zh: "一套提供热门书籍摘要的系统，帮助用户决定下一步阅读什么。",
    },
    technologies: "HTML, Tailwind, JS",
    imageUrl: bookSummaryImg,
    links: {
      source: "#",
      website: "https://koni-hub.github.io/StaticBookSummary/",
    },
  },
  {
    title: { en: "Nex Proxy", zh: "Nex代理" },
    description: {
      en: "A proxy service offering high-performance solutions for secure, fast internet access.",
      zh: "一种代理服务，为安全、快速的互联网访问提供高性能解决方案。",
    },
    technologies: "HTML, CSS, JS",
    imageUrl: nexProxyImg,
    links: {
      source: "#",
      website: "https://koni-hub.github.io/StaticNexProxy/",
    },
  },
  {
    title: { en: "Cake Store", zh: "蛋糕店" },
    description: {
      en: "A comprehensive system designed to streamline bakery operations by managing cake orders",
      zh: "一个全面的系统，旨在通过管理蛋糕订单来优化面包店运营",
    },
    technologies: "HTML, Bootstrap, JS",
    imageUrl: cakeStoreImg,
    links: {
      source: "#",
      website: "https://koni-hub.github.io/StaticCakeStore/",
    },
  },
];

// -----------------
// Contact Data
export const contactInfo = {
  email: "delgadoargie04z@gmail.com",
  location: { en: "Metro Manila, Philippines", zh: "菲律宾 马尼拉都会区" },
};
