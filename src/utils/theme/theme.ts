export function setThemeSystem(theme: "light" | "dark") {
  document.documentElement.classList.remove("theme-light", "theme-dark");
  document.documentElement.classList.add(`theme-${theme}`);
}
