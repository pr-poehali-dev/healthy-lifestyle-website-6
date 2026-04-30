import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import SearchBar from "@/components/SearchBar";

const IMG = {
  hero: "https://cdn.poehali.dev/projects/1dc512b5-fafd-45c9-a4f4-3ce8cb8cbf8c/files/98fd44dd-421d-4154-8717-56c7ffe67fb3.jpg",
  food: "https://cdn.poehali.dev/projects/1dc512b5-fafd-45c9-a4f4-3ce8cb8cbf8c/files/3eee5960-532d-47ec-aba6-c6c0ebc830cf.jpg",
  fitness: "https://cdn.poehali.dev/projects/1dc512b5-fafd-45c9-a4f4-3ce8cb8cbf8c/files/7ce29ebd-63ce-459a-9798-356d4a655490.jpg",
  smoothie: "https://cdn.poehali.dev/projects/1dc512b5-fafd-45c9-a4f4-3ce8cb8cbf8c/files/f199a0e4-10fd-4309-a684-4937c2b8e4c3.jpg",
  run: "https://cdn.poehali.dev/projects/1dc512b5-fafd-45c9-a4f4-3ce8cb8cbf8c/files/aeea6e16-8761-437d-bbe1-370fafe33af0.jpg",
  yoga: "https://cdn.poehali.dev/projects/1dc512b5-fafd-45c9-a4f4-3ce8cb8cbf8c/files/948f6a39-b6c7-47e2-8f3a-7f93ca2db410.jpg",
};

const featuredArticles = [
  {
    id: 1,
    title: "10 продуктов для крепкого иммунитета",
    excerpt: "Узнайте, какие суперфуды помогут вашему организму бороться с болезнями весь год.",
    category: "Питание",
    readTime: "5 мин",
    img: IMG.food,
    color: "from-green-500 to-emerald-600",
    path: "/articles",
  },
  {
    id: 2,
    title: "Утренняя зарядка: как войти в привычку",
    excerpt: "Простой гайд, который поможет вам наконец-то начать заниматься по утрам и не бросать.",
    category: "Спорт",
    readTime: "7 мин",
    img: IMG.run,
    color: "from-orange-500 to-rose-500",
    path: "/articles",
  },
  {
    id: 3,
    title: "Медитация за 5 минут в день",
    excerpt: "Короткие практики осознанности, которые реально меняют качество жизни уже за 2 недели.",
    category: "Психология",
    readTime: "4 мин",
    img: IMG.yoga,
    color: "from-teal-500 to-cyan-600",
    path: "/articles",
  },
];

const quickTips = [
  { icon: "Droplets", title: "8 стаканов воды", desc: "Начните утро со стакана тёплой воды с лимоном.", color: "bg-blue-50 text-blue-600 border-blue-100" },
  { icon: "Moon", title: "7–9 часов сна", desc: "Стабильный режим сна улучшает метаболизм и настроение.", color: "bg-purple-50 text-purple-600 border-purple-100" },
  { icon: "Salad", title: "Радуга на тарелке", desc: "5 порций овощей и фруктов разных цветов каждый день.", color: "bg-green-50 text-green-600 border-green-100" },
  { icon: "Wind", title: "Дышите глубоко", desc: "10 глубоких вдохов снимают стресс за 2 минуты.", color: "bg-teal-50 text-teal-600 border-teal-100" },
];

const categories = [
  { label: "Питание", icon: "Apple", count: 24, color: "bg-green-500", path: "/categories" },
  { label: "Спорт", icon: "Dumbbell", count: 18, color: "bg-orange-500", path: "/categories" },
  { label: "Психология", icon: "Brain", count: 12, color: "bg-purple-500", path: "/categories" },
  { label: "Сон", icon: "Moon", count: 9, color: "bg-indigo-500", path: "/categories" },
  { label: "Витамины", icon: "Pill", count: 15, color: "bg-yellow-500", path: "/categories" },
  { label: "Медитация", icon: "Flower2", count: 11, color: "bg-teal-500", path: "/categories" },
];

const ticker = ["150+ Статей", "80+ Советов", "40+ Рекомендаций", "6 Категорий", "Питание", "Спорт", "Медитация", "Здоровый сон"];

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#f0fdf4] via-[#ecfdf5] to-[#f0fdfa]">
        <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-green-300/30 blur-3xl animate-blob pointer-events-none" />
        <div className="absolute bottom-10 -right-20 w-80 h-80 rounded-full bg-teal-300/30 blur-3xl animate-blob pointer-events-none" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/3 left-1/2 w-72 h-72 rounded-full bg-lime-200/20 blur-3xl animate-blob pointer-events-none" style={{ animationDelay: "6s" }} />

        <div className="container mx-auto px-4 pt-28 pb-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 text-green-700 text-sm font-medium mb-6 animate-fade-up">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Живите лучше каждый день
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up delay-100" style={{ fontFamily: "Oswald", color: "var(--dark)" }}>
                ЗДОРОВЬЕ —<br />
                <span className="gradient-text">ЭТО ВЫБОР</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg animate-fade-up delay-200">
                Научные статьи, практические советы и экспертные рекомендации о питании, спорте и психологическом благополучии.
              </p>
              <div className="animate-fade-up delay-300 mb-8">
                <SearchBar large placeholder="Поиск по статьям и советам..." />
              </div>
              <div className="flex flex-wrap gap-3 animate-fade-up delay-400">
                <Link to="/articles" className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg shadow-green-200 hover:shadow-green-300 hover:scale-105 transition-all duration-200">
                  Читать статьи
                </Link>
                <Link to="/categories" className="px-6 py-3 rounded-full font-semibold border-2 border-green-300 text-green-700 hover:bg-green-50 transition-colors duration-200">
                  Категории
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end animate-fade-up delay-200">
              <div className="relative">
                <div className="w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-[40%_60%_60%_40%/40%_40%_60%_60%] overflow-hidden shadow-2xl shadow-green-300/40 animate-float">
                  <img src={IMG.hero} alt="Здоровый образ жизни" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-4 -left-8 glass rounded-2xl px-4 py-3 shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🥗</span>
                    <div>
                      <div className="text-xs font-bold text-gray-800">Правильное питание</div>
                      <div className="text-xs text-gray-500">24 статьи</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-6 glass rounded-2xl px-4 py-3 shadow-lg animate-float" style={{ animationDelay: "2s" }}>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">💪</span>
                    <div>
                      <div className="text-xs font-bold text-gray-800">Активность</div>
                      <div className="text-xs text-gray-500">18 советов</div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-1/2 -right-10 -translate-y-1/2 glass rounded-2xl px-3 py-2 shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
                  <div className="text-center">
                    <div className="text-xl">🧘</div>
                    <div className="text-xs font-bold text-gray-800">Wellness</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-green-400 flex items-start justify-center pt-1">
            <div className="w-1.5 h-3 rounded-full bg-green-400 animate-pulse" />
          </div>
        </div>
      </section>

      {/* TICKER */}
      <section className="bg-gradient-to-r from-green-600 via-teal-600 to-green-600 py-4 overflow-hidden">
        <div className="flex animate-marquee gap-0 whitespace-nowrap">
          {[...ticker, ...ticker, ...ticker, ...ticker].map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-6">
              <span className="text-white font-semibold text-sm" style={{ fontFamily: "Oswald", letterSpacing: "0.05em" }}>{item}</span>
              <span className="text-white/40 text-xs">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-green-600 text-sm font-semibold uppercase tracking-widest">Популярное</span>
              <h2 className="text-4xl lg:text-5xl font-bold mt-1" style={{ fontFamily: "Oswald", color: "var(--dark)" }}>СВЕЖИЕ СТАТЬИ</h2>
            </div>
            <Link to="/articles" className="hidden sm:flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all duration-200">
              Все статьи <Icon name="ArrowRight" size={18} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredArticles.map((a, i) => (
              <Link key={a.id} to={a.path} className={`group card-hover rounded-3xl overflow-hidden shadow-md`} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="relative h-52 overflow-hidden">
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${a.color} opacity-40`} />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-xs font-bold text-gray-800">{a.category}</span>
                  <span className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-black/30 text-white text-xs">
                    <Icon name="Clock" size={12} /> {a.readTime}
                  </span>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors" style={{ fontFamily: "Oswald" }}>{a.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{a.excerpt}</p>
                  <div className="mt-4 flex items-center gap-2 text-green-600 text-sm font-semibold">
                    Читать далее <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK TIPS */}
      <section className="py-20 bg-gradient-to-br from-[#f0fdf4] to-[#f0fdfa]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Каждый день</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-1" style={{ fontFamily: "Oswald", color: "var(--dark)" }}>БЫСТРЫЕ СОВЕТЫ</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {quickTips.map((t, i) => (
              <div key={i} className={`card-hover rounded-2xl border p-6 ${t.color}`}>
                <div className="w-12 h-12 rounded-xl bg-white/60 flex items-center justify-center mb-4 shadow-sm">
                  <Icon name={t.icon as any} size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "Oswald" }}>{t.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/tips" className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-lg shadow-orange-200 hover:scale-105 transition-all duration-200">
              Все советы <Icon name="ArrowRight" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest">Навигация</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-1" style={{ fontFamily: "Oswald", color: "var(--dark)" }}>КАТЕГОРИИ</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((c) => (
              <Link key={c.label} to={c.path} className="card-hover rounded-2xl p-5 text-center flex flex-col items-center gap-3 border border-gray-100 hover:border-transparent group shadow-sm">
                <div className={`w-14 h-14 rounded-2xl ${c.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={c.icon as any} size={26} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-800" style={{ fontFamily: "Oswald" }}>{c.label}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{c.count} материала</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#0f1a0e] to-[#0d2e20]">
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-green-800/40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-teal-900/30 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6 animate-float inline-block">🌿</div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: "Oswald" }}>
              НАЧНИТЕ ПУТЬ<br />
              <span className="gradient-text">К ЗДОРОВЬЮ СЕГОДНЯ</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Тысячи людей уже изменили свою жизнь с помощью наших материалов. Ваша очередь.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/articles" className="px-8 py-4 rounded-full font-bold bg-gradient-to-r from-green-500 to-teal-400 text-white shadow-xl shadow-green-900/50 hover:scale-105 transition-all duration-200 text-lg">
                Начать читать
              </Link>
              <Link to="/recommendations" className="px-8 py-4 rounded-full font-bold border-2 border-white/20 text-white hover:bg-white/10 transition-colors duration-200 text-lg">
                Рекомендации
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
