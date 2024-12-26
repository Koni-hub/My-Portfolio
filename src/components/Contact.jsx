import { Mail, MapPin, Phone } from "lucide-react";
import { contactInfo } from "../constants/index.js";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-light">
            <span className="text-gray-500 dark:text-gray-400">get in</span>{" "}
            <span className="text-gray-900 dark:text-white">touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Feel free to reach out. I&apos;m always open to discussing new
            projects, creative ideas, or opportunities to be part of your
            visions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="space-y-8">
            <div className="w-full h-[400px] rounded-xl overflow-hidden ring-1 ring-gray-200 dark:ring-white/10 shadow-lg dark:shadow-none bg-white dark:bg-gray-800">
              <iframe
                title="location"
                className="w-full h-full grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                src="https://www.openstreetmap.org/export/embed.html?bbox=121.0403%2C14.4909%2C121.1304%2C14.6704&amp;layer=mapnik&amp;marker=14.6077%2C121.1054"
              ></iframe>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              {/* Email */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex items-start gap-4 p-6 bg-white dark:bg-gray-800/30 shadow-lg dark:shadow-none rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="p-3 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-medium mb-1 text-gray-900 dark:text-white">
                    Email
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {contactInfo.email}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${contactInfo.phone}`}
                className="group flex items-start gap-4 p-6 bg-white dark:bg-gray-800/30 shadow-lg dark:shadow-none rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="p-3 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-medium mb-1 text-gray-900 dark:text-white">
                    Phone
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {contactInfo.phone}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800/30 shadow-lg dark:shadow-none rounded-xl">
                <div className="p-3 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-medium mb-1 text-gray-900 dark:text-white">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {contactInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Contact Message */}
            <div className="p-6 bg-cyan-50 dark:bg-cyan-500/10 rounded-xl">
              <p className="text-cyan-600 dark:text-cyan-400 text-sm">
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
