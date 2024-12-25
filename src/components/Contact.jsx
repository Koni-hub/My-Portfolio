import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userIP, setUserIP] = useState("");

  // Fetch IP address when component mounts
  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        setUserIP(data.ip);
      } catch (error) {
        console.error("Error fetching IP:", error);
      }
    };

    fetchIP();
  }, []);

  const validateForm = () => {
    if (!formData.name.trim()) {
      return "Please enter your name";
    }
    if (!formData.email.trim()) {
      return "Please enter your email";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      return "Please enter a message";
    }
    return null;
  };

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const showNotification = (title, text, icon) => {
    return Swal.fire({
      title,
      text,
      icon,
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      background: "#1a1a1a",
      color: "#fff",
      customClass: {
        popup: "colored-toast",
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      showNotification("Error", error, "error");
      return;
    }

    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const { name, email, message } = formData;

      // Show loading state
      Swal.fire({
        title: "Sending...",
        text: "Please wait while we process your message",
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        background: "#1a1a1a",
        color: "#fff",
      });

      // Construct the mailto link with IP address
      const mailtoLink = `mailto:delgadoargie04z@gmail.com?subject=Message from ${encodeURIComponent(
        name
      )}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\nIP Address: ${userIP}`
      )}`;

      // Close loading dialog
      Swal.close();

      window.location.href = mailtoLink;
      showNotification("Success!", "Opening your mail client...", "success");
      clearForm();
    } catch (error) {
      console.error("Error sending message:", error);
      showNotification(
        "Error",
        "Failed to send message. Please try again.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="py-24 px-6 min-h-screen flex flex-col items-center justify-center text-white"
      >
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-2xl font-light text-center mb-16">
            <span className="text-gray-400">get in</span> touch
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="w-full h-[400px] rounded-lg overflow-hidden ring-1 ring-white/10">
              <iframe
                title="location"
                className="w-full h-full grayscale opacity-80 hover:opacity-100 hover:grayscale-0 hover:opacity-100 transition-opacity duration-300"
                src="https://www.openstreetmap.org/export/embed.html?bbox=121.0403%2C14.4909%2C121.1304%2C14.6704&amp;layer=mapnik&amp;marker=14.6077%2C121.1054"
              ></iframe>
            </div>

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
                disabled={isSubmitting}
                className="group flex items-center justify-center w-full px-4 py-3 
                       bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 
                       transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="mr-2">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
                <Send
                  size={16}
                  className="transform group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
