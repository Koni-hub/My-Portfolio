import { Mail, MapPin, Phone } from "lucide-react";
import { contactInfo } from "../constants/index.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const Contact = () => {
  const [mounted, setMounted] = useState(false);

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
      className="py-24 sm:py-16 lg:py-24 px-4 sm:px-6 min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <h2 className="text-xl sm:text-2xl font-light">
            <span className="text-gray-500 dark:text-gray-400">
              Get In Touch
            </span>{" "}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
            Feel free to reach out. I&apos;m always open to discussing new
            projects, creative ideas, or opportunities to be part of your
            visions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Map */}
          <div
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <div className="w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden ring-1 ring-gray-200 dark:ring-white/10 shadow-lg dark:shadow-none bg-white dark:bg-gray-800">
              <iframe
                title="location"
                className="w-full h-full grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                src="https://www.openstreetmap.org/export/embed.html?bbox=121.0403%2C14.4909%2C121.1304%2C14.6704&amp;layer=mapnik&amp;marker=14.6077%2C121.1054"
              ></iframe>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            {/* Contact Cards */}
            <div className="grid gap-4 sm:gap-6">
              {/* Email */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white dark:bg-gray-800/30 shadow-lg dark:shadow-none rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <div className="p-2 sm:p-3 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-lg">
                  <Mail size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-0.5 sm:mb-1 text-sm sm:text-base text-gray-900 dark:text-white">
                    Email
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors break-all">
                    {contactInfo.email}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${contactInfo.phone}`}
                className="group flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white dark:bg-gray-800/30 shadow-lg dark:shadow-none rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                <div className="p-2 sm:p-3 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-lg">
                  <Phone size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-0.5 sm:mb-1 text-sm sm:text-base text-gray-900 dark:text-white">
                    Phone
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {contactInfo.phone}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white dark:bg-gray-800/30 shadow-lg dark:shadow-none rounded-xl"
                data-aos="fade-left"
                data-aos-delay="600"
              >
                <div className="p-2 sm:p-3 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-lg">
                  <MapPin size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-0.5 sm:mb-1 text-sm sm:text-base text-gray-900 dark:text-white">
                    Location
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {contactInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Contact Message */}
            <div
              className="p-4 sm:p-6 bg-cyan-50 dark:bg-cyan-500/10 rounded-xl"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <p className="text-xs sm:text-sm text-cyan-600 dark:text-cyan-400">
                Prefer email? Send me a message and I&apos;ll get back to you
                within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
