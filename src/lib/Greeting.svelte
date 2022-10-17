<script>
  import { msg } from "../i18n";
  import WavingHand from "./WavingHand.svelte";
</script>

<div class="">
  <h2 class="text-3xl">{msg("hi")}</h2>
  <h2 class="text-2xl">{msg("welcomeToMyPage")} <WavingHand /></h2>
  <div class="text-gray-600 dark:text-gray-400">
    <h4>{msg("im")}</h4>
    <p>
      {msg("brief")}
    </p>
  </div>
</div>
