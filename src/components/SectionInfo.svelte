<div>
  <h2 class="flex items-center mb-5 text-lg font-black md:text-xl xl:text-2xl">
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