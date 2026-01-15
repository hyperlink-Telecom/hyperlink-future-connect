import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.add("light");
    } else {
      setIsDark(true);
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-muted p-1 transition-colors duration-300 hover:bg-muted/80"
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? "Cambiar a modo día" : "Cambiar a modo noche"}
    >
      {/* Track background icons */}
      <div className="absolute inset-0 flex items-center justify-between px-1.5">
        <Sun className="w-4 h-4 text-yellow-500 opacity-50" />
        <Moon className="w-4 h-4 text-blue-400 opacity-50" />
      </div>
      
      {/* Slider thumb */}
      <motion.div
        className="relative z-10 w-5 h-5 rounded-full bg-gradient-to-r from-[hsl(217,100%,56%)] to-[hsl(203,77%,35%)] shadow-lg flex items-center justify-center"
        animate={{
          x: isDark ? 28 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {isDark ? (
          <Moon className="w-3 h-3 text-white" />
        ) : (
          <Sun className="w-3 h-3 text-white" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
