import { useState } from "react";
import Icon from "@/components/ui/icon";
import SearchBar from "@/components/SearchBar";

const tips = [
  { id: 1, icon: "Droplets", title: "Пейте воду правильно", body: "Начинайте день со стакана тёплой воды. Пейте за 30 минут до еды и через 1,5 часа после. Норма — 30 мл на кг веса.", category: "Питание", difficulty: "Легко", color: "border-l-blue-400 bg-blue-50" },
  { id: 2, icon: "Sun", title: "Утренний ритуал за 10 минут", body: "5 минут растяжки + 5 минут дыхательных упражнений после пробуждения зарядят энергией на весь день.", category: "Активность", difficulty: "Легко", color: "border-l-yellow-400 bg-yellow-50" },
  { id: 3, icon: "Salad", title: "Тарелка здоровья", body: "Половина тарелки — овощи, четверть — белок, четверть — сложные углеводы. Добавьте хорошие жиры.", category: "Питание", difficulty: "Средне", color: "border-l-green-400 bg-green-50" },
  { id: 4, icon: "Moon", title: "Готовьтесь ко сну заранее", body: "За час до сна выключите экраны, приглушите свет. Температура в спальне 18–20°C — оптимальна для сна.", category: "Сон", difficulty: "Легко", color: "border-l-indigo-400 bg-indigo-50" },
  { id: 5, icon: "Footprints", title: "10 000 шагов в день", body: "Не обязательно сразу — начните с 5000. Прогулка после обеда снижает уровень сахара в крови.", category: "Активность", difficulty: "Средне", color: "border-l-orange-400 bg-orange-50" },
  { id: 6, icon: "Brain", title: "Практика благодарности", body: "Каждый вечер записывайте 3 вещи, за которые вы благодарны. Это перестраивает мозг на позитив за 21 день.", category: "Психология", difficulty: "Легко", color: "border-l-purple-400 bg-purple-50" },
  { id: 7, icon: "Dumbbell", title: "Силовые тренировки 2–3 раза в неделю", body: "Сохраняют мышечную массу, ускоряют метаболизм и улучшают гормональный фон. Начните с собственным весом.", category: "Активность", difficulty: "Интенсивно", color: "border-l-rose-400 bg-rose-50" },
  { id: 8, icon: "Leaf", title: "Ешьте больше зелени", body: "Шпинат, руккола, брокколи — источники магния, фолата и клетчатки. Добавляйте в каждый приём пищи.", category: "Питание", difficulty: "Легко", color: "border-l-emerald-400 bg-emerald-50" },
];

const difficultyColor: Record<string, string> = {
  "Легко": "bg-green-100 text-green-700",
  "Средне": "bg-yellow-100 text-yellow-700",
  "Интенсивно": "bg-red-100 text-red-700",
};

const cats = ["Все", "Питание", "Активность", "Сон", "Психология"];

export default function Tips() {
  const [active, setActive] = useState("Все");

  const filtered = active === "Все" ? tips : tips.filter((t) => t.category === active);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <div className="bg-gradient-to-br from-orange-600 to-rose-600 pt-28 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-orange-400/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-rose-400/20 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-orange-200 text-sm font-semibold uppercase tracking-widest">Каждый день</span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mt-2 mb-4" style={{ fontFamily: "Oswald" }}>СОВЕТЫ</h1>
          <p className="text-orange-100 max-w-lg mx-auto mb-8">Простые и работающие лайфхаки для вашего здоровья</p>
          <div className="flex justify-center">
            <SearchBar placeholder="Поиск по советам..." />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {cats.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === cat
                  ? "bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-md shadow-orange-200"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {filtered.map((t) => (
            <div key={t.id} className={`card-hover rounded-2xl border-l-4 p-6 ${t.color}`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/70 flex items-center justify-center shadow-sm shrink-0">
                  <Icon name={t.icon as any} size={24} className="text-gray-700" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-gray-900" style={{ fontFamily: "Oswald" }}>{t.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${difficultyColor[t.difficulty]}`}>{t.difficulty}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{t.body}</p>
                  <span className="mt-3 inline-block text-xs font-medium text-gray-400">{t.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
