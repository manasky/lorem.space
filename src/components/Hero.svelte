<div class="hero min-h-[50vh]">

  <div class="text-center hero-content">
    <div>
      <h1 class="mb-5 text-4xl xl:text-5xl font-black">{@html title}</h1>
      <p class="mb-5 text-xl">{@html desc}</p> 
      <slot/>
    </div>
  </div>

</div>


<script>
  export let title = "";
  export let desc = "";
</script>