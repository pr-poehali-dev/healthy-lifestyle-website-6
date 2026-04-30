import { useState } from "react";
import Icon from "@/components/ui/icon";

const contacts = [
  { icon: "Mail", label: "Email", value: "hello@vitapuls.ru", color: "bg-blue-100 text-blue-600" },
  { icon: "MessageCircle", label: "Telegram", value: "@vitapuls", color: "bg-teal-100 text-teal-600" },
  { icon: "Instagram", label: "Instagram", value: "@vitapuls.ru", color: "bg-pink-100 text-pink-600" },
];

export default function Contacts() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] to-white">
      <div className="bg-gradient-to-br from-[#0f1a0e] to-[#1a3020] pt-28 pb-16 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-teal-900/30 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest">Связь</span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mt-2 mb-4" style={{ fontFamily: "Oswald" }}>КОНТАКТЫ</h1>
          <p className="text-gray-400 max-w-lg mx-auto">Есть вопрос, предложение или хотите сотрудничать? Напишите нам!</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-14">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: "Oswald", color: "var(--dark)" }}>НАПИШИТЕ НАМ</h2>

            {sent ? (
              <div className="rounded-3xl bg-green-50 border border-green-200 p-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-green-700 mb-2" style={{ fontFamily: "Oswald" }}>Сообщение отправлено!</h3>
                <p className="text-green-600">Мы ответим в течение 24 часов.</p>
                <button onClick={() => setSent(false)} className="mt-6 px-6 py-2 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors">
                  Написать ещё
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Ваше имя</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Иван Иванов"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800 placeholder:text-gray-400 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="ivan@example.ru"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800 placeholder:text-gray-400 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Сообщение</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Расскажите, чем мы можем помочь..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800 placeholder:text-gray-400 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg shadow-green-200 hover:scale-[1.02] transition-all duration-200"
                >
                  Отправить сообщение
                </button>
              </form>
            )}
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: "Oswald", color: "var(--dark)" }}>КАК НАС НАЙТИ</h2>
            <div className="space-y-4 mb-10">
              {contacts.map((c, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm card-hover">
                  <div className={`w-12 h-12 rounded-xl ${c.color} flex items-center justify-center shrink-0`}>
                    <Icon name={c.icon as any} size={22} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{c.label}</div>
                    <div className="font-bold text-gray-900">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-green-600 to-teal-600 p-8 text-white">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "Oswald" }}>БЫСТРЫЙ ОТВЕТ</h3>
              <p className="text-green-100 text-sm leading-relaxed">
                Мы отвечаем на вопросы в рабочие дни с 9:00 до 18:00 МСК. В Telegram — быстрее всего.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
