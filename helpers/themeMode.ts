export type ThemeMode = "light" | "dark" | "auto";
export const switchToDarkMode = () => document.documentElement.classList.add("dark");
export const switchToLightMode = () => document.documentElement.classList.remove("dark");
export const switchToAutoMode = () => {};
export const getCurrentThemeMode = (): ThemeMode => (document.documentElement.classList.contains("dark") ? "dark" : "light");
