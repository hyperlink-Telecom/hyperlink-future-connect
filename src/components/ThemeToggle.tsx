import { motion } from "framer-motion";
import { Sun, Moon, Monitor } from "lucide-react";
import { useAutoTheme } from "@/hooks/useAutoTheme";

const ThemeToggle = () => {
  const { isDark, mode, toggleTheme } = useAutoTheme();

  const getIcon = () => {
    if (mode === "auto") return <Monitor className="w-3 h-3 text-white" />;
    if (isDark) return <Moon className="w-3 h-3 text-white" />;
    return <Sun className="w-3 h-3 text-white" />;
  };

  const getPosition = () => {
    if (mode === "light") return 0;
    if (mode === "auto") return 14;
    return 28;
  };

  const getLabel = () => {
    if (mode === "auto") return "Modo automático (cambia según hora del día)";
    if (isDark) return "Cambiar a modo automático";
    return "Cambiar a modo oscuro";
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-muted p-1 transition-colors duration-300 hover:bg-muted/80"
      whileTap={{ scale: 0.95 }}
      aria-label={getLabel()}
      title={getLabel()}
    >
      {/* Track background icons */}
      <div className="absolute inset-0 flex items-center justify-between px-1.5">
        <Sun className="w-4 h-4 text-yellow-500 opacity-50" />
        <Monitor className="w-3 h-3 text-primary opacity-50" />
        <Moon className="w-4 h-4 text-blue-400 opacity-50" />
      </div>
      
      {/* Slider thumb */}
      <motion.div
        className="relative z-10 w-5 h-5 rounded-full bg-gradient-to-r from-[hsl(217,100%,56%)] to-[hsl(203,77%,35%)] shadow-lg flex items-center justify-center"
        animate={{
          x: getPosition(),
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {getIcon()}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
