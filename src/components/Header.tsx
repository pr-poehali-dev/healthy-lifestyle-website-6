import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const navItems = [
  { label: "Главная", path: "/" },
  { label: "Статьи", path: "/articles" },
  { label: "Советы", path: "/tips" },
  { label: "Рекомендации", path: "/recommendations" },
  { label: "Категории", path: "/categories" },
  { label: "О проекте", path: "/about" },
  { label: "Контакты", path: "/contacts" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg shadow-green-500/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
            <span className="text-white text-lg font-bold" style={{ fontFamily: "Oswald" }}>В</span>
          </div>
          <span className="text-xl font-bold" style={{ fontFamily: "Oswald", color: "var(--dark)" }}>
            ВИТА<span className="gradient-text">ПУЛЬС</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link text-sm font-medium transition-colors duration-200 ${
                location.pathname === item.path
                  ? "text-green-600"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/articles"
            className="px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-md hover:shadow-green-300/50 hover:scale-105 transition-all duration-200"
          >
            Читать
          </Link>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg hover:bg-green-50 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden glass border-t border-green-100 mt-1">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? "bg-green-100 text-green-700"
                    : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/articles"
              className="mt-2 px-5 py-3 rounded-full text-center font-semibold bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-md"
            >
              Начать читать
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
