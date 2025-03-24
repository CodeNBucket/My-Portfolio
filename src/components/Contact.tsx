import React from "react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-[#5400BB] to-[#1A1A2E] text-[#CCCCFF]"
    >
      <div className="container mx-auto px-6 md:px-20 text-center">
        <h3 className="text-lg font-semibold tracking-widest uppercase mb-2">
          Get In Touch
        </h3>
        <h2 className="text-5xl font-extrabold mb-8">Contact Me</h2>

        <p className="text-xl mb-10">
          Feel free to reach out via email or connect with me on LinkedIn.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="mailto:your.email@example.com"
            className="px-8 py-3 bg-[#0F3460] rounded-xl shadow-lg hover:bg-[#16213E] transition-colors duration-300"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[#0F3460] rounded-xl shadow-lg hover:bg-[#16213E] transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
