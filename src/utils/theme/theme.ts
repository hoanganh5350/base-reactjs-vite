export function setThemeSystem(theme: "light" | "dark") {
  document.documentElement.setAttribute("data-theme", theme);
}
