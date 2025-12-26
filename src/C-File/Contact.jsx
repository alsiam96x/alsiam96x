import { FaFacebookF, FaGithub, FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  // vCard content
  const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:Al Siam
EMAIL;TYPE=INTERNET:alsiam.personal.email.address@gmail.com
TEL;TYPE=CELL:01825442717
URL;TYPE=GitHub:https://github.com/alsiam96x
END:VCARD
  `;

  const downloadVCard = () => {
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "alsiam.vcf";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white text-center relative overflow-hidden"
    >
      {/* Decorative blurred circles */}
      <div className="absolute right-0 top-1/2 w-96 h-80 bg-blue-500 opacity-20 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute left-0 bottom-1/3 w-80 h-72 bg-pink-500 opacity-20 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <h2 className="text-4xl font-bold mb-6 relative z-10">Contact Me</h2>
      <p className="text-gray-400 mb-12 relative z-10">
        Let’s connect! I’m open for projects and collaborations.
      </p>

      <div className="flex justify-center gap-6 flex-wrap mb-10 relative z-10">
        {/* Email */}
        <a
          href="mailto:alsiam.personal.email.address@gmail.com"
          className="p-5 bg-blue-600 rounded-full hover:bg-blue-700 transition transform hover:scale-110 shadow-lg"
        >
          <FaEnvelope size={24} />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/1BaLM2g3oT/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 bg-blue-800 rounded-full hover:bg-blue-900 transition transform hover:scale-110 shadow-lg"
        >
          <FaFacebookF size={24} />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/alsiam96x?igsh=YnAyb2R1MjRtdnh3"
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 bg-pink-500 rounded-full hover:bg-pink-600 transition transform hover:scale-110 shadow-lg"
        >
          <FaInstagram size={24} />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/01825442717"
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 bg-green-500 rounded-full hover:bg-green-600 transition transform hover:scale-110 shadow-lg"
        >
          <FaWhatsapp size={24} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/alsiam96x"
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 bg-gray-700 rounded-full hover:bg-gray-800 transition transform hover:scale-110 shadow-lg"
        >
          <FaGithub size={24} />
        </a>
      </div>

      {/* Download Contact Button */}
      <button
        onClick={downloadVCard}
        className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition transform hover:-translate-y-1 hover:shadow-lg relative z-10"
      >
        Download Contact
      </button>
    </section>
  );
};

export default Contact;
