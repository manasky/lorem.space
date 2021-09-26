<div>
  <h1 class="mb-5 text-2xl md:text-3xl xl:text-4xl font-black flex items-center">
    {@html icon}
    <span class="w-2"></span>
    {@html title}
  </h1>
  <p class="mb-5 text-xl">{@html desc}</p> 
  <slot/>
</div>

<script>
  export let title = "";
  export let desc = "";
  export let icon = "";
</script>