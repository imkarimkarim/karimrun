import "./app.css";
import App from "./App.svelte";
import "./i18n";

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

const app = new App({
  target: document.getElementById("app"),
});

export default app;
