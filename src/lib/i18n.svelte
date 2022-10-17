<script>
  import { currentLang, switchLang } from "../i18n";
</script>

<div class="m-2">
  <button
    on:click={switchLang}
    type="button"
    class="inline-block px-6 py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
    >{currentLang == "en" ? "فا" : "en"}</button
  >
</div>
