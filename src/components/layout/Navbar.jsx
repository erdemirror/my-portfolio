import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import DarkModeToggle from "../ui/DarkModeToggle";

const Navbar = ({ darkMode, setDarkMode, sidebarOpen, setSidebarOpen }) => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600 dark:text-blue-400"
          >
            Юу гэж бичихээ мэддэггүй ээ
          </Link>

          {/*main*/}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Нүүр
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Миний тухай
            </Link>
            <Link
              to="/projects"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Ажлууд
            </Link>
            <Link
              to="/skills"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Чадюарууд
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Холбоо барих
            </Link>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>

          {/* sidebar appear*/}
          <div className="md:hidden flex items-center space-x-4">
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
