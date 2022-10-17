<script>
  export let theClass = "",
    href;
</script>

<a
  target="_blank"
  class="flex transition duration-300 ease-in-out {theClass}"
  {href}
  rel="noreferrer"><slot /></a
>
