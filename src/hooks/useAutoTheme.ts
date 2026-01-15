import { useState, useEffect, useCallback } from "react";

type ThemeMode = "light" | "dark" | "auto";

interface UseAutoThemeReturn {
  isDark: boolean;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

const getThemeForCurrentTime = (): boolean => {
  const hour = new Date().getHours();
  // Light mode: 6:00 AM - 6:59 PM (6-18)
  // Dark mode: 7:00 PM - 5:59 AM (19-5)
  return hour < 6 || hour >= 19;
};

export const useAutoTheme = (): UseAutoThemeReturn => {
  const [mode, setModeState] = useState<ThemeMode>("auto");
  const [isDark, setIsDark] = useState(true);

  const applyTheme = useCallback((dark: boolean) => {
    if (dark) {
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
    }
    setIsDark(dark);
  }, []);

  const setMode = useCallback((newMode: ThemeMode) => {
    setModeState(newMode);
    localStorage.setItem("themeMode", newMode);

    if (newMode === "auto") {
      applyTheme(getThemeForCurrentTime());
    } else {
      applyTheme(newMode === "dark");
    }
  }, [applyTheme]);

  const toggleTheme = useCallback(() => {
    // Cycle through: auto -> light -> dark -> auto
    const nextMode: ThemeMode = mode === "auto" ? "light" : mode === "light" ? "dark" : "auto";
    setMode(nextMode);
  }, [mode, setMode]);

  // Initialize theme on mount
  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode") as ThemeMode | null;
    const initialMode = savedMode || "auto";
    setModeState(initialMode);

    if (initialMode === "auto") {
      applyTheme(getThemeForCurrentTime());
    } else {
      applyTheme(initialMode === "dark");
    }
  }, [applyTheme]);

  // Auto-update theme when in auto mode
  useEffect(() => {
    if (mode !== "auto") return;

    // Check every minute for time-based theme changes
    const checkTime = () => {
      const shouldBeDark = getThemeForCurrentTime();
      if (shouldBeDark !== isDark) {
        applyTheme(shouldBeDark);
      }
    };

    const interval = setInterval(checkTime, 60000); // Check every minute
    
    return () => clearInterval(interval);
  }, [mode, isDark, applyTheme]);

  return { isDark, mode, setMode, toggleTheme };
};
