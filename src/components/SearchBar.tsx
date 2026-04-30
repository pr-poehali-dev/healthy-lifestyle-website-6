import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const suggestions = [
  { label: "Правильное питание для похудения", section: "Статьи", path: "/articles" },
  { label: "Утренняя зарядка за 10 минут", section: "Советы", path: "/tips" },
  { label: "Витамины для иммунитета", section: "Рекомендации", path: "/recommendations" },
  { label: "Медитация для начинающих", section: "Советы", path: "/tips" },
  { label: "Здоровый сон: нормы и правила", section: "Статьи", path: "/articles" },
  { label: "Детокс-смузи рецепты", section: "Рекомендации", path: "/recommendations" },
  { label: "Бег для здоровья сердца", section: "Статьи", path: "/articles" },
  { label: "Йога для гибкости тела", section: "Советы", path: "/tips" },
];

interface SearchBarProps {
  large?: boolean;
  placeholder?: string;
}

export default function SearchBar({ large = false, placeholder = "Найти статьи, советы, рекомендации..." }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [results, setResults] = useState<typeof suggestions>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length > 1) {
      const filtered = suggestions.filter((s) =>
        s.label.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else if (focused && query.length === 0) {
      setResults(suggestions.slice(0, 5));
    } else {
      setResults([]);
    }
  }, [query, focused]);

  const sectionColor: Record<string, string> = {
    "Статьи": "bg-green-100 text-green-700",
    "Советы": "bg-orange-100 text-orange-700",
    "Рекомендации": "bg-teal-100 text-teal-700",
  };

  return (
    <div className={`relative ${large ? "w-full max-w-2xl" : "w-full max-w-md"}`}>
      <div
        className={`flex items-center gap-3 rounded-2xl px-4 transition-all duration-300 ${
          large ? "py-4 text-base" : "py-3 text-sm"
        } ${
          focused
            ? "bg-white shadow-xl shadow-green-200/50 ring-2 ring-green-400"
            : "bg-white/90 shadow-lg shadow-black/5 ring-1 ring-gray-200"
        }`}
      >
        <Icon name="Search" size={large ? 22 : 18} className="text-green-500 shrink-0" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-gray-800 placeholder:text-gray-400"
        />
        {query && (
          <button onClick={() => setQuery("")} className="text-gray-400 hover:text-gray-600 transition-colors">
            <Icon name="X" size={16} />
          </button>
        )}
        {large && (
          <button
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity shrink-0"
            onClick={() => navigate("/articles")}
          >
            Найти
          </button>
        )}
      </div>

      {results.length > 0 && focused && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 overflow-hidden z-50">
          {results.map((r, i) => (
            <button
              key={i}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-green-50 transition-colors text-left"
              onClick={() => {
                navigate(r.path);
                setQuery("");
              }}
            >
              <Icon name="Search" size={14} className="text-gray-400 shrink-0" />
              <span className="flex-1 text-sm text-gray-700">{r.label}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${sectionColor[r.section] || "bg-gray-100 text-gray-600"}`}>
                {r.section}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
