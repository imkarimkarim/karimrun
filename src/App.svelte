<script>
  import Avatar from "./lib/Avatar.svelte";
  import Contact from "./lib/Contact.svelte";
  import Greeting from "./lib/Greeting.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import Socials from "./lib/Socials.svelte";
</script>

<main>
  <Navbar />
  <div
    class="flex flex-col p-7 pt-9 bg-gray-100 dark:bg-gray-900 h-100 dark:text-gray-300 text-gray-900 md:pr-64 md:pl-64 lg:pr-96 lg:pl-96"
  >
    <Avatar />
    <Greeting />
    <hr class="mt-6 mb-5" />
    <Contact />
    <hr class="mt-7 mb-5" />
    <Socials />
  </div>
</main>

<style>
</style>
