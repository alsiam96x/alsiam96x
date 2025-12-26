import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/70 backdrop-blur-md z-50 shadow-md">
        <nav className=" mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className=" logofont text-3xl tracking-widest text-blue-500">alsiam96x</h1>
          <div className="flex gap-6 text-gray-300">
            <a
              href="#me"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Me
            </a>
            <a
              href="#about"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Page Content */}
      <main className="pt-17">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400 border-t border-gray-800 mt-16">
        <p>© {new Date().getFullYear()} Siam. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RootLayout;
