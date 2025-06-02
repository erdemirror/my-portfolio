import React from "react";
import { Code, Palette, Zap, Users, Award, BookOpen } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "ˌfrʌnt.end dɪˈvel.əp.mənt",
      description: "React",
    },
    {
      icon: Zap,
      title: "ˌbæk.end dɪˈvel.əp.mənt",
      description: "Node.js, Python, Databases",
    },
    {
      icon: Palette,
      title: "ˌjuːˈaɪ  / ˌjuːˈeks  dɪˈzaɪn",
      description: "Figma, Canva, Responsive Design",
    },
    {
      icon: Users,
      title: "tiːm kəˌlæb.əˈreɪ.ʃən",
      description: "Git, Agile, Project Management",
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: "Мундаг даа энэ тэр",
      description: "Ааваараа миний хүү мундаг гэж хэлүүлж байсан ",
    },
    {
      icon: BookOpen,
      title: "Сайн сурч сурсаан хахаха",
      description: "Шинэ технологи сурахдаа сайн гэж боддог доо",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Миний талаар
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ерөнхийдөө юу хийгээд байгаагаа мэдэхгүй нэг хөөрхөн хүү байна даа
          </p>
        </div>

        {/* main contento */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* left */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1748806365017-837a50a70ced?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="About me"
                  className="w-full rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-lg"></div>
              </div>
            </div>

            <div className="bg-white/5 dark:bg-black/20 backdrop-blur-lg rounded-xl p-6 border border-white/10 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Хальт мэдээлэл
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong>Хаяг:</strong> Яармаг
                </li>
                <li>
                  <strong>Туршлага:</strong> 3 жил
                </li>
                <li>
                  <strong>Боловсрол:</strong> Боловсролтой хулигаан
                </li>
                <li>
                  <strong>Хэл:</strong> Англи хэл (Ахисан) , Монгол хэл (Бага
                  зэрэг)
                </li>
                <li>
                  <strong>Хобби:</strong> Stand-up comedy , Гитар тоглох ,
                  Дуулах
                </li>
              </ul>
            </div>
          </div>

          {/* right*/}
          <div className="space-y-8">
            <div className="bg-white/5 dark:bg-black/20 backdrop-blur-lg rounded-xl p-8 border border-white/10 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                Миний зодооны түүх
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Одооны бацаануудын зодоон хийнэ ч гэж юу байхав ах нь багадаа
                  1000 хужаатай зэрэг зодолдоод бүгдийн нүдээд явуулж байж
                  билээ. Тэгсэн маргааш нь шаулины 100 kung fu чид ирж азаа
                  үзсэн юм. Би ч яахав дунд нь соно эргэж бүгдийн нүдэж гарав
                  гэтэл араас нь шилийн голын шилэгдмэл дайчид болох 10 хунтайж
                  ирж таарлаа шүү . Би ч 5 шараас офицер хүртэл ухрахаар шийдээд
                  автуус зогсоогоод дотор нь суух гэтэл төмөр замын тэнгэрлэг 4
                  хаад дотор нь сууж таараад бас л нүдэлцэж авав. Би ч нилээн
                  шархагдсан болохоор яалтчгүй шаалгуулаад ирлээ шүү.
                </p>
              </div>
            </div>

            <div className="bg-white/5 dark:bg-black/20 backdrop-blur-lg rounded-xl p-8 border border-white/10 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                Миний тоглодог тоглоомууд
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Dota 2 :</strong> За 2700+ цаг тоглоод Ancient
                    цолонд хүрээгүй байгаа
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>CS2:</strong> Faceit level 7 , Premier 17'000 ,
                    Global Elite
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* skillz */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Би юу хийдэг юм бол ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group p-6 bg-white/5 dark:bg-black/20 backdrop-blur-lg rounded-xl border border-white/10 dark:border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <skill.icon className="w-12 h-12 text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* failures */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Амжилтууд
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white/5 dark:bg-black/20 backdrop-blur-lg rounded-xl border border-white/10 dark:border-gray-700"
              >
                <achievement.icon className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
