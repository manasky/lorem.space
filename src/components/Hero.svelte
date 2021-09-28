<div class="hero min-h-[50vh]">

  <div class="text-center hero-content">
    <div>
      <h1 class="mb-5 text-4xl font-black lg:text-5xl xl:text-6xl">{@html title}</h1>
      <p class="mb-5 text-4xl font-black -rotate-6 font-handwriting text-secondary lg:text-5xl xl:text-6xl">{@html desc}</p> 
      <div class="max-w-md mx-auto">
        <Codes 
          client:load
          textToCopy="https://api.lorem.space/image?w=400&h=400"
          showListOfLinks=false
        >https://api.lorem.space/image?w=<span class="text-primary">400</span>&h=<span class="text-primary">400</span></Codes>
      </div>
    </div>
  </div>

</div>


<script>
  import Codes from '../components/Codes.svelte'
  export let title = "";
  export let desc = "";
</script>