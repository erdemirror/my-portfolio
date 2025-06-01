import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1748806365017-837a50a70ced?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="HomePhoto"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Базар Бат-Эрдэм
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6">
            Junior Developer
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Ерөнхийдөө юу хийгээд байгаагаа мэдэхгүй нэг хөөрхөн хүү байна даа
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/projects"
            className="flex items-center space-x-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span>Миний ажлууд</span>
            <ArrowRight size={20} />
          </Link>

          <a
            href="/resume.pdf"
            download
            className="flex items-center space-x-2 px-8 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <Download size={20} />
            <span>CV татах</span>
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              1+
            </div>
            <p className="text-gray-600 dark:text-gray-400">Ажлууд</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              3
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Туршлага (Жилээр)
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              3.5
            </div>
            <p className="text-gray-600 dark:text-gray-400">Голч дүн</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
