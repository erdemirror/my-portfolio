import React from "react";
import ProjectCard from "../components/ui/ProjectCard";

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Миний ажлууд
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Энэ хэсэгт ямар нэгэн зүйл хиймээр байсан ч залхуурав
          </p>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Энэ дээр Github аа оруул гэнэ ээ
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Байж болох хамгийн идэвхгүй хүн болохоор битгий аймар их хүлээлт
              тавиарай ккк.
            </p>
            <a
              href="https://github.com/erdemirror"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              За орсон орсон
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
