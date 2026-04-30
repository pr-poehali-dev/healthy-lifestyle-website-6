import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const sections = [
  {
    title: "Разделы",
    links: [
      { label: "Статьи", path: "/articles" },
      { label: "Советы", path: "/tips" },
      { label: "Рекомендации", path: "/recommendations" },
      { label: "Категории", path: "/categories" },
    ],
  },
  {
    title: "О нас",
    links: [
      { label: "О проекте", path: "/about" },
      { label: "Контакты", path: "/contacts" },
    ],
  },
];

const tags = ["#питание", "#спорт", "#медитация", "#сон", "#витамины", "#йога", "#бег", "#детокс"];

export default function Footer() {
  return (
    <footer className="relative bg-[#0f1a0e] text-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />
      <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-green-900/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-teal-900/20 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold" style={{ fontFamily: "Oswald" }}>В</span>
              </div>
              <span className="text-2xl font-bold" style={{ fontFamily: "Oswald" }}>
                ВИТА<span className="gradient-text">ПУЛЬС</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Портал о здоровом образе жизни. Научные статьи, практические советы и экспертные рекомендации для вашего здоровья.
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-green-900/50 text-green-400 border border-green-800/50 hover:border-green-500/50 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {sections.map((s) => (
            <div key={s.title}>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-green-400 mb-4" style={{ fontFamily: "Oswald" }}>
                {s.title}
              </h4>
              <ul className="space-y-2">
                {s.links.map((l) => (
                  <li key={l.path}>
                    <Link
                      to={l.path}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-green-500 transition-all duration-200" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">© 2024 ВитаПульс. Все права защищены.</p>
          <p className="text-gray-600 text-xs flex items-center gap-1">
            Сделано с <Icon name="Heart" size={12} className="text-red-500" /> для вашего здоровья
          </p>
        </div>
      </div>
    </footer>
  );
}
