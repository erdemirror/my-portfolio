import { Link } from "react-router-dom";
import { X } from "lucide-react";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      {/* overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* side */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">Цэс</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="space-y-4">
            <Link
              to="/"
              className="block py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              Нүүр
            </Link>
            <Link
              to="/about"
              className="block py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              Миний тухай
            </Link>
            <Link
              to="/projects"
              className="block py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              Ажлууд
            </Link>
            <Link
              to="/skills"
              className="block py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              Чадварууд
            </Link>
            <Link
              to="/contact"
              className="block py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              Холбоо барих
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
