/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { Fireworks } from "fireworks-js";
import { useLanguage } from "../context/LanguageContext";
import AOS from "aos";
import "aos/dist/aos.css";

const NewYearCountdown = () => {
  const { language } = useLanguage();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [celebrationState, setCelebrationState] = useState("countdown"); // countdown, celebrating, or finished
  const [targetDate, setTargetDate] = useState(
    new Date(`January 1, ${new Date().getFullYear() + 1} 00:00:00`),
  );

  const getTrueNumber = (num) => (num < 10 ? `0${num}` : num.toString());

  const calculateRemainingTime = () => {
    const now = new Date();
    const remainingTime = targetDate.getTime() - now.getTime();

    if (remainingTime <= 1000) {
      setCelebrationState("celebrating");
      setTimeout(() => {
        setCelebrationState("finished");
        setTimeout(() => {
          setCelebrationState("countdown");
          setTargetDate(
            new Date(`January 1, ${targetDate.getFullYear() + 1} 00:00:00`),
          );
        }, 60000);
      }, 60000);
      return;
    }

    setTimeLeft({
      days: getTrueNumber(Math.floor(remainingTime / (1000 * 60 * 60 * 24))),
      hours: getTrueNumber(
        Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      ),
      minutes: getTrueNumber(
        Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)),
      ),
      seconds: getTrueNumber(Math.floor((remainingTime % (1000 * 60)) / 1000)),
    });
  };

  useEffect(() => {
    const interval = setInterval(calculateRemainingTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  useEffect(() => {
    let fireworksInstance;

    if (celebrationState === "celebrating" && typeof window !== "undefined") {
      const container = document.querySelector(".fireworks-container");
      if (container) {
        try {
          fireworksInstance = new Fireworks(container, {
            opacity: 0.5,
            acceleration: 1.05,
            friction: 0.97,
            gravity: 1.5,
            particles: 50,
            traceLength: 3,
            traceSpeed: 10,
            explosion: 5,
            intensity: 30,
            flickering: 50,
            lineStyle: "round",
            sound: {
              enabled: true,
              files: [
                "https://fireworks.js.org/sounds/explosion0.mp3",
                "https://fireworks.js.org/sounds/explosion1.mp3",
                "https://fireworks.js.org/sounds/explosion2.mp3",
              ],
              volume: { min: 10, max: 20 },
            },
            hue: { min: 0, max: 360 },
            delay: { min: 30, max: 60 },
            rocketsPoint: { min: 50, max: 50 },
            lineWidth: {
              explosion: { min: 1, max: 3 },
              trace: { min: 1, max: 2 },
            },
            brightness: { min: 50, max: 80 },
            decay: { min: 0.015, max: 0.03 },
            mouse: { click: false, move: false, max: 1 },
          });
          fireworksInstance.start();
        } catch (error) {
          console.error("Error initializing fireworks:", error);
        }
      }
    }

    return () => fireworksInstance?.stop();
  }, [celebrationState]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const year = targetDate.getFullYear();

  const getDisplayContent = () => {
    const isCN = language === "zh";

    switch (celebrationState) {
      case "celebrating":
        return {
          status: isCN ? "新年快乐！" : "Celebrating the New Year!",
          title: isCN
            ? `🎆 ${year} 年新年快乐！🎆`
            : `🎆 Happy New Year ${year}! 🎆`,
          message: isCN
            ? `${year} 年已经到来！`
            : `Celebrating the arrival of ${year}!`,
        };
      case "finished":
        return {
          status: isCN ? `欢迎来到 ${year} 年！` : `Welcome to ${year}!`,
          title: isCN
            ? "愿新的一年精彩纷呈！"
            : "Welcome to an amazing new year ahead!",
          message: isCN
            ? `欢迎来到 ${year} 年！编码快乐 </>`
            : `Welcome to ${year}! Happy Coding </>`,
        };
      default:
        return {
          status: isCN ? "一起迎接新年吧" : "Come and welcome the new year",
          title: isCN ? "新年倒计时" : "New Year Countdown",
          message: isCN
            ? `距 ${year} 年 1 月 1 日还有`
            : `Time Remaining Until January 1st, ${year}`,
        };
    }
  };

  const content = getDisplayContent();

  const countdownLabels =
    language === "zh"
      ? ["天", "时", "分", "秒"]
      : ["Days", "Hours", "Minutes", "Seconds"];

  const countdownItems = [
    { label: countdownLabels[0], value: timeLeft.days },
    { label: countdownLabels[1], value: timeLeft.hours },
    { label: countdownLabels[2], value: timeLeft.minutes },
    { label: countdownLabels[3], value: timeLeft.seconds },
  ];

  return (
    <div
      id="newyear"
      className="py-24 min-h-screen flex items-center justify-center p-4 overflow-hidden relative transition-colors duration-300"
      style={{ backgroundColor: "var(--color-bg-section)" }}
    >
      <div className="fireworks-container fixed inset-0 pointer-events-none" />

      <div
        className="backdrop-blur-md rounded-lg p-6 sm:p-12 w-full max-w-3xl shadow-2xl relative z-10"
        style={{ backgroundColor: "var(--color-bg-card)" }}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="text-center space-y-8 sm:space-y-10">
          {/* Status & Title */}
          <div>
            <p
              className="text-sm tracking-widest uppercase mb-2"
              style={{ color: "var(--color-text-accent)" }}
            >
              {content.status}
            </p>
            <h1
              className="text-2xl sm:text-4xl font-light tracking-wide"
              style={{ color: "var(--color-text-primary)" }}
            >
              {content.title}
            </h1>
          </div>

          {/* Countdown Grid */}
          {celebrationState === "countdown" && (
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6">
              {countdownItems.map(({ label, value }) => (
                <div key={label} className="text-center">
                  <div
                    className="text-2xl sm:text-4xl font-light mb-2"
                    style={{ color: "var(--color-text-accent)" }}
                  >
                    {value}
                  </div>
                  <div
                    className="text-xs uppercase tracking-wider"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Footer Message */}
          <div
            className="pt-4 border-t"
            style={{ borderColor: "var(--color-icon-bg-hover)" }}
          >
            <div
              className="flex items-center justify-center gap-2"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <Clock className="w-4 h-4" />
              <p className="text-sm tracking-wide">{content.message}</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fireworks-container {
          width: 100vw;
          height: 100vh;
        }
      `}</style>
    </div>
  );
};

export default NewYearCountdown;
