import Icon from "@/components/ui/icon";
import SearchBar from "@/components/SearchBar";

const recs = [
  {
    id: 1,
    title: "Омега-3 жирные кислоты",
    subtitle: "Сердце, мозг, суставы",
    body: "Рыбий жир или льняное масло — 1–2 г EPA/DHA в день. Снижают воспаление, улучшают работу мозга и сердца.",
    badge: "Витамины",
    priority: "Высокий",
    emoji: "🐟",
    color: "bg-blue-50 border-blue-200",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    title: "Средиземноморская диета",
    subtitle: "Долголетие и здоровье",
    body: "Оливковое масло, рыба 2–3 раза в неделю, много овощей, бобовые, орехи, цельное зерно. Снижает риск всех хронических болезней.",
    badge: "Питание",
    priority: "Высокий",
    emoji: "🫒",
    color: "bg-green-50 border-green-200",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    id: 3,
    title: "HIIT тренировки",
    subtitle: "Жиросжигание за 20 минут",
    body: "Высокоинтенсивные интервальные тренировки 2–3 раза в неделю эффективнее длительного кардио для похудения и сердца.",
    badge: "Спорт",
    priority: "Средний",
    emoji: "⚡",
    color: "bg-orange-50 border-orange-200",
    badgeColor: "bg-orange-100 text-orange-700",
  },
  {
    id: 4,
    title: "Магний B6",
    subtitle: "Нервная система и сон",
    body: "Дефицит магния есть у 70% людей. 400 мг перед сном улучшают качество сна, снимают тревогу и судороги в ногах.",
    badge: "Витамины",
    priority: "Высокий",
    emoji: "💊",
    color: "bg-purple-50 border-purple-200",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    id: 5,
    title: "Холодный душ по утрам",
    subtitle: "Бодрость и иммунитет",
    body: "30 секунд холодной воды после тёплого душа активируют нервную систему, повышают иммунитет и уровень дофамина на 250%.",
    badge: "Lifestyle",
    priority: "Средний",
    emoji: "🚿",
    color: "bg-teal-50 border-teal-200",
    badgeColor: "bg-teal-100 text-teal-700",
  },
  {
    id: 6,
    title: "Интервальное голодание 16/8",
    subtitle: "Метаболизм и долголетие",
    body: "Приём пищи в 8-часовое окно запускает аутофагию, нормализует уровень инсулина и улучшает чувствительность к лептину.",
    badge: "Питание",
    priority: "Средний",
    emoji: "⏰",
    color: "bg-yellow-50 border-yellow-200",
    badgeColor: "bg-yellow-100 text-yellow-700",
  },
];

const priorityColor: Record<string, string> = {
  "Высокий": "bg-red-100 text-red-700",
  "Средний": "bg-yellow-100 text-yellow-700",
};

export default function Recommendations() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white">
      <div className="bg-gradient-to-br from-teal-600 to-green-700 pt-28 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-teal-400/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-green-400/20 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-teal-200 text-sm font-semibold uppercase tracking-widest">Экспертно</span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mt-2 mb-4" style={{ fontFamily: "Oswald" }}>РЕКОМЕНДАЦИИ</h1>
          <p className="text-teal-100 max-w-lg mx-auto mb-8">Проверенные методики и подходы для трансформации вашего здоровья</p>
          <div className="flex justify-center">
            <SearchBar placeholder="Поиск по рекомендациям..." />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {recs.map((r) => (
            <div key={r.id} className={`card-hover rounded-3xl border p-6 ${r.color}`}>
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{r.emoji}</span>
                <div className="flex flex-col gap-1 items-end">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${r.badgeColor}`}>{r.badge}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${priorityColor[r.priority]}`}>
                    {r.priority} приоритет
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1 text-gray-900" style={{ fontFamily: "Oswald" }}>{r.title}</h3>
              <p className="text-sm font-medium text-gray-500 mb-3">{r.subtitle}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{r.body}</p>
              <button className="mt-4 flex items-center gap-2 text-teal-600 text-sm font-semibold hover:gap-3 transition-all">
                Подробнее <Icon name="ArrowRight" size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
