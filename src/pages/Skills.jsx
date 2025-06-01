import React from "react";
import { Code, Database, Globe, Smartphone } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-8 h-8" />,
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      icon: <Database className="w-8 h-8" />,
      skills: ["Node.js"],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8" />,
      skills: ["Android Studio"],
    },
    {
      title: "Tools & Others",
      icon: <Code className="w-8 h-8" />,
      skills: ["Git", "Firebase", "Figma", "VS Code"],
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Миний Ultimate skills
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Бараг мэдэхгүй дээ ккк
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-800/70 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="text-blue-400 mr-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Гэхдээ дөнгөж эхлэж байна даа ккк
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Удахгүй угаасаа бүгдэн дээр нь сайжирдаг юм байгаа биз дээ ** вэ
              энэ тэр хахахахахах
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
