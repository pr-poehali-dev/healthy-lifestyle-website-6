import Icon from "@/components/ui/icon";

const IMG = {
  hero: "https://cdn.poehali.dev/projects/1dc512b5-fafd-45c9-a4f4-3ce8cb8cbf8c/files/98fd44dd-421d-4154-8717-56c7ffe67fb3.jpg",
  fitness: "https://cdn.poehali.dev/projects/1dc512b5-fafd-45c9-a4f4-3ce8cb8cbf8c/files/7ce29ebd-63ce-459a-9798-356d4a655490.jpg",
};

const values = [
  { icon: "FlaskConical", title: "Научный подход", desc: "Все материалы основаны на актуальных научных исследованиях и проверенных методиках.", color: "bg-blue-100 text-blue-600" },
  { icon: "Heart", title: "Забота о людях", desc: "Мы пишем для обычных людей, которые хотят жить лучше, а не для профессиональных спортсменов.", color: "bg-rose-100 text-rose-600" },
  { icon: "Zap", title: "Практичность", desc: "Никакой воды — только конкретные советы, которые можно применить сегодня же.", color: "bg-yellow-100 text-yellow-600" },
  { icon: "Shield", title: "Безопасность", desc: "Мы никогда не советуем то, что может навредить. Всегда рекомендуем консультацию с врачом.", color: "bg-green-100 text-green-600" },
];

const team = [
  { name: "Анна Коваль", role: "Нутрициолог", emoji: "👩‍⚕️" },
  { name: "Дмитрий Орлов", role: "Фитнес-тренер", emoji: "🏋️" },
  { name: "Елена Смирнова", role: "Психолог", emoji: "🧘‍♀️" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative pt-28 pb-16 bg-gradient-to-br from-[#f0fdf4] to-[#ecfdf5] overflow-hidden">
        <div className="absolute top-10 -right-20 w-80 h-80 rounded-full bg-green-200/40 blur-3xl animate-blob pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-green-600 text-sm font-semibold uppercase tracking-widest">Кто мы</span>
              <h1 className="text-5xl sm:text-6xl font-bold mt-2 mb-6" style={{ fontFamily: "Oswald", color: "var(--dark)" }}>
                О ПРОЕКТЕ<br /><span className="gradient-text">ВИТАПУЛЬС</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                ВитаПульс — это информационный портал, созданный командой экспертов в области здоровья, питания и спорта. Мы верим, что каждый человек заслуживает жить полной, здоровой жизнью.
              </p>
              <p className="text-gray-500 leading-relaxed">
                С 2022 года мы помогаем тысячам людей принимать осознанные решения о своём здоровье, основанные на науке, а не на мифах.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-green-200/40">
                <img src={IMG.hero} alt="О проекте" className="w-full h-80 object-cover" />
              </div>
              <div className="absolute -bottom-5 -left-5 glass rounded-2xl px-5 py-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🌿</span>
                  <div>
                    <div className="font-bold text-gray-900" style={{ fontFamily: "Oswald" }}>С 2022 года</div>
                    <div className="text-sm text-gray-500">Помогаем жить здоровее</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold" style={{ fontFamily: "Oswald", color: "var(--dark)" }}>НАШИ ЦЕННОСТИ</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div key={i} className="card-hover rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className={`w-12 h-12 rounded-xl ${v.color} flex items-center justify-center mb-4`}>
                  <Icon name={v.icon as any} size={22} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "Oswald" }}>{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-[#f0fdf4] to-[#f0fdfa]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold" style={{ fontFamily: "Oswald", color: "var(--dark)" }}>НАША КОМАНДА</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {team.map((m, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl p-6 text-center shadow-md border border-gray-100">
                <div className="text-5xl mb-3">{m.emoji}</div>
                <div className="font-bold text-gray-900" style={{ fontFamily: "Oswald" }}>{m.name}</div>
                <div className="text-sm text-green-600 mt-1">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
