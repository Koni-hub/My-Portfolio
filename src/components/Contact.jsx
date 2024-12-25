import { useState } from "react";
import { Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-24 px-6 min-h-screen flex flex-col items-center justify-center text-white">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl font-light text-center mb-16">
          <span className="text-gray-400">get in</span> touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="w-full h-[400px] rounded-lg overflow-hidden ring-1 ring-white/10">
            <iframe
              title="location"
              className="w-full h-full grayscale opacity-80 hover:opacity-100 transition-opacity duration-300"
              src="https://www.openstreetmap.org/export/embed.html?bbox=121.0403%2C14.4909%2C121.1304%2C14.6704&amp;layer=mapnik&amp;marker=14.6077%2C121.1054"
            ></iframe>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 
                          placeholder:text-gray-500 focus:outline-none focus:border-cyan-500/50
                          focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300"
              />
            </div>

            <div className="space-y-1">
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 
                          placeholder:text-gray-500 focus:outline-none focus:border-cyan-500/50
                          focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300"
              />
            </div>

            <div className="space-y-1">
              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows="4"
                className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 
                          placeholder:text-gray-500 focus:outline-none focus:border-cyan-500/50
                          focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="group flex items-center justify-center w-full px-4 py-3 
                       bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 
                       transition-all duration-300"
            >
              <span className="mr-2">Send Message</span>
              <Send
                size={16}
                className="transform group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </form>
        </div>

        {/* Footer */}
        <footer className="mt-24 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Koni Devs. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
