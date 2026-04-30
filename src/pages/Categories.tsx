import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const categories = [
  {
    label: "Питание", icon: "Apple", count: 24, color: "from-green-400 to-emerald-500",
    bg: "bg-green-50", border: "border-green-200",
    desc: "Правильный рацион, суперфуды, диеты и рецепты для здоровья.",
    tags: ["Диеты", "Суперфуды", "Рецепты", "Детокс", "Витамины"],
  },
  {
    label: "Спорт", icon: "Dumbbell", count: 18, color: "from-orange-400 to-rose-500",
    bg: "bg-orange-50", border: "border-orange-200",
    desc: "Тренировки, фитнес-программы и физическая активность для любого уровня.",
    tags: ["Фитнес", "Кардио", "Силовые", "HIIT", "Йога"],
  },
  {
    label: "Психология", icon: "Brain", count: 12, color: "from-purple-400 to-violet-500",
    bg: "bg-purple-50", border: "border-purple-200",
    desc: "Ментальное здоровье, стресс, мотивация и психологическое благополучие.",
    tags: ["Стресс", "Мотивация", "Осознанность", "Эмоции", "Привычки"],
  },
  {
    label: "Сон", icon: "Moon", count: 9, color: "from-indigo-400 to-blue-500",
    bg: "bg-indigo-50", border: "border-indigo-200",
    desc: "Качество сна, режим отдыха и борьба с бессонницей.",
    tags: ["Режим", "Бессонница", "Мелатонин", "Сновидения", "Цикл"],
  },
  {
    label: "Витамины", icon: "Pill", count: 15, color: "from-yellow-400 to-amber-500",
    bg: "bg-yellow-50", border: "border-yellow-200",
    desc: "БАДы, витамины и минералы: что принимать и как правильно.",
    tags: ["Витамин D", "Омега-3", "Магний", "Цинк", "B12"],
  },
  {
    label: "Медитация", icon: "Flower2", count: 11, color: "from-teal-400 to-cyan-500",
    bg: "bg-teal-50", border: "border-teal-200",
    desc: "Практики медитации, дыхательные упражнения и работа с вниманием.",
    tags: ["Медитация", "Дыхание", "Mindfulness", "Релаксация", "Йога-нидра"],
  },
];

export default function Categories() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-[#0f1a0e] to-[#1a3020] pt-28 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-green-800/30 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest">Навигация</span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mt-2 mb-4" style={{ fontFamily: "Oswald" }}>КАТЕГОРИИ</h1>
          <p className="text-gray-400 max-w-lg mx-auto">Выберите тему, которая вас интересует</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {categories.map((c) => (
            <Link
              key={c.label}
              to="/articles"
              className={`card-hover rounded-3xl border p-7 ${c.bg} ${c.border} group`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={c.icon as any} size={30} className="text-white" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "Oswald" }}>{c.label}</h3>
                <span className="text-sm font-semibold text-gray-400 bg-white/60 px-3 py-1 rounded-full">{c.count} статей</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{c.desc}</p>
              <div className="flex flex-wrap gap-2">
                {c.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-full bg-white/70 text-xs font-medium text-gray-600 border border-white">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-gray-700 group-hover:gap-3 transition-all">
                Смотреть все <Icon name="ArrowRight" size={14} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
