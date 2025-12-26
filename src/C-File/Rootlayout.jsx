import { Outlet } from "react-router-dom";
import { FaUser, FaInfoCircle, FaEnvelope } from "react-icons/fa";

const NavItem = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    className="group flex flex-col items-center gap-1 text-gray-400 hover:text-blue-500 transition-all duration-300"
  >
    <Icon className="text-xl group-hover:scale-110 transition-transform duration-300" />
    <span className="text-xs tracking-wide group-hover:text-blue-400">
      {label}
    </span>
  </a>
);

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/70 backdrop-blur-md z-50 shadow-lg">
        <nav className="mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="logofont text-3xl tracking-widest text-blue-500">
            alsiam96x
          </h1>

          {/* Navigation */}
          <div className="flex gap-8">
            <NavItem href="#me" icon={FaUser} label="Me" />
            <NavItem href="#about" icon={FaInfoCircle} label="About" />
            <NavItem href="#contact" icon={FaEnvelope} label="Contact" />
          </div>
        </nav>
      </header>

      {/* Page Content */}
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400 border-t border-gray-800 mt-16">
        <p>© {new Date().getFullYear()} Al Siam 96 x. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RootLayout;
