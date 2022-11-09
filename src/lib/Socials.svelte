<script>
  import { msg } from "../i18n";
  import github from "../assets/icons/github.svg";
  import instagram from "../assets/icons/instagram.svg";
  import linkedin from "../assets/icons/linkedin.svg";
  import twitter from "../assets/icons/twitter.svg";
  import youtube from "../assets/icons/youtube.svg";
  import Link from "./Link.svelte";
  const imageClass = "h-auto w-6";
</script>

<div class="text-center">
  <p class="pb-5">{msg("socials")}</p>
  <div class="flex w-100 items-center justify-between pr-14 pl-14">
    <Link href="https://github.com/imkarimkarim">
      <img class="{imageClass} dark:invert" src={github} alt="github icon" />
    </Link>
    <Link href="https://instagram.com/imkarimkarim">
      <img class={imageClass} src={instagram} alt="instagram icon" />
    </Link>
    <Link href="https://www.linkedin.com/in/imkarimkarim">
      <img class={imageClass} src={linkedin} alt="linkedin icon" />
    </Link>
    <Link href="https://twitter.com/imkarimkarim">
      <img class={imageClass} src={twitter} alt="twitter icon" />
    </Link>
    <Link href="https://www.youtube.com/@imkarimkarim">
      <img class={imageClass} src={youtube} alt="youtube icon" />
    </Link>
  </div>
</div>
