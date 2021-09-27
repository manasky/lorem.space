<div>
  <h2 class="flex items-center mb-5 text-2xl font-black md:text-3xl xl:text-4xl">
    {@html icon}
    <span class="w-2"></span>
    {@html title}
  </h2>
  <p class="mb-5 text-xl">{@html desc}</p> 
  <slot/>
</div>

<script>
  export let title = "";
  export let desc = "";
  export let icon = "";
</script>