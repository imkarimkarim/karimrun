<script>
  import { MoonIcon, SunIcon } from "svelte-feather-icons";

  let currentMode = localStorage.getItem("theme");
  const switchMode = () => {
    if (currentMode == "dark") {
      localStorage.theme = currentMode = "light";
    } else {
      localStorage.theme = currentMode = "dark";
    }
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
</script>

<div class="m-2">
  <button
    on:click={switchMode}
    class="inline-block mt-1.5 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
    type="button"
  >
    {#if currentMode === "dark"}
      <SunIcon />
    {:else}
      <MoonIcon />
    {/if}
  </button>
</div>
