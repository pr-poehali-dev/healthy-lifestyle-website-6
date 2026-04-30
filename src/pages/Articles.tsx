import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import SearchBar from "@/components/SearchBar";

const IMG = {
  food: "https://cdn.poehali.dev/projects/1dc512b5-fafd-45c9-a4f4-3ce8cb8cbf8c/files/3eee5960-532d-47ec-aba6-c6c0ebc830cf.jpg",
  run: "https://cdn.poehali.dev/projects/1dc512b5-fafd-45c9-a4f4-3ce8cb8cbf8c/files/aeea6e16-8761-437d-bbe1-370fafe33af0.jpg",
  yoga: "https://cdn.poehali.dev/projects/1dc512b5-fafd-45c9-a4f4-3ce8cb8cbf8c/files/948f6a39-b6c7-47e2-8f3a-7f93ca2db410.jpg",
  smoothie: "https://cdn.poehali.dev/projects/1dc512b5-fafd-45c9-a4f4-3ce8cb8cbf8c/files/f199a0e4-10fd-4309-a684-4937c2b8e4c3.jpg",
  hero: "https://cdn.poehali.dev/projects/1dc512b5-fafd-45c9-a4f4-3ce8cb8cbf8c/files/98fd44dd-421d-4154-8717-56c7ffe67fb3.jpg",
  fitness: "https://cdn.poehali.dev/projects/1dc512b5-fafd-45c9-a4f4-3ce8cb8cbf8c/files/7ce29ebd-63ce-459a-9798-356d4a655490.jpg",
};

const articles = [
  { id: 1, title: "10 продуктов для крепкого иммунитета", excerpt: "Узнайте, какие суперфуды помогут вашему организму бороться с болезнями весь год.", category: "Питание", readTime: "5 мин", img: IMG.food, date: "12 апр 2024" },
  { id: 2, title: "Утренняя зарядка: как войти в привычку", excerpt: "Простой гайд, который поможет вам начать заниматься по утрам и не бросать.", category: "Спорт", readTime: "7 мин", img: IMG.run, date: "10 апр 2024" },
  { id: 3, title: "Медитация за 5 минут в день", excerpt: "Короткие практики осознанности, которые реально меняют качество жизни.", category: "Психология", readTime: "4 мин", img: IMG.yoga, date: "8 апр 2024" },
  { id: 4, title: "Детокс-смузи: рецепты и польза", excerpt: "Самые эффективные смузи для очищения организма и заряда энергии на весь день.", category: "Питание", readTime: "6 мин", img: IMG.smoothie, date: "5 апр 2024" },
  { id: 5, title: "Здоровый сон: нормы и правила", excerpt: "Как улучшить качество сна и просыпаться с энергией каждое утро.", category: "Сон", readTime: "8 мин", img: IMG.hero, date: "3 апр 2024" },
  { id: 6, title: "Фитнес дома: программа на 30 дней", excerpt: "Полная программа тренировок без оборудования для начинающих и опытных.", category: "Спорт", readTime: "10 мин", img: IMG.fitness, date: "1 апр 2024" },
];

const categoryColors: Record<string, string> = {
  "Питание": "bg-green-100 text-green-700",
  "Спорт": "bg-orange-100 text-orange-700",
  "Психология": "bg-purple-100 text-purple-700",
  "Сон": "bg-indigo-100 text-indigo-700",
  "Витамины": "bg-yellow-100 text-yellow-700",
  "Медитация": "bg-teal-100 text-teal-700",
};

const allCats = ["Все", "Питание", "Спорт", "Психология", "Сон", "Медитация", "Витамины"];

export default function Articles() {
  const [active, setActive] = useState("Все");

  const filtered = active === "Все" ? articles : articles.filter((a) => a.category === active);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] to-white">
      <div className="bg-gradient-to-br from-[#0f1a0e] to-[#0d2e20] pt-28 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-green-800/30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-teal-900/20 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest">Портал знаний</span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mt-2 mb-4" style={{ fontFamily: "Oswald" }}>СТАТЬИ</h1>
          <p className="text-gray-400 max-w-lg mx-auto mb-8">Глубокие материалы о здоровье, основанные на науке и практике</p>
          <div className="flex justify-center">
            <SearchBar placeholder="Поиск по статьям..." />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {allCats.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === cat
                  ? "bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-md shadow-green-200"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((a) => (
            <div key={a.id} className="card-hover bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img src={a.img} alt={a.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${categoryColors[a.category] || "bg-gray-100 text-gray-700"}`}>
                  {a.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1"><Icon name="Calendar" size={12} />{a.date}</span>
                  <span className="flex items-center gap-1"><Icon name="Clock" size={12} />{a.readTime}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 hover:text-green-600 transition-colors" style={{ fontFamily: "Oswald" }}>{a.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{a.excerpt}</p>
                <button className="flex items-center gap-2 text-green-600 text-sm font-semibold hover:gap-3 transition-all">
                  Читать далее <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
