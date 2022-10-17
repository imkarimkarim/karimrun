<script>
  import { msg } from "../i18n";
  import { MailIcon, PhoneCallIcon, SendIcon } from "svelte-feather-icons";
  const iconClass = "mr-1 pr-1 ml-1 pl-1";
  import Link from "./Link.svelte";
</script>

<div class="flex flex-col ltr items-center">
  <h3 class="font-medium leading-tight text-2xl mt-0 mb-2 ">
    {msg("contacts")}
  </h3>

  <Link
    theClass="text-teal-600 dark:text-teal-400 hover:text-teal-400 dark:hover:text-teal-500"
    href={"tel:+989118494570"}
    ><PhoneCallIcon class={iconClass} /> +98 911 849 4570</Link
  >
  <Link
    theClass="text-red-600 dark:text-red-400 hover:text-red-400 dark:hover:text-red-500"
    href={"mailto:allalirezamail@gmail.com"}
    ><MailIcon class={iconClass} />allalirezamail@gmail.com</Link
  >
  <Link
    theClass="text-sky-600 dark:text-sky-400 hover:text-sky-400 dark:hover:text-sky-500"
    href={"https://t.me/imkarimkarim47"}
    ><SendIcon class={iconClass} />{msg("telegram")}</Link
  >
</div>
