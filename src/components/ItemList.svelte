<div class="grid grid-cols-3 gap-6">
  {#each items as { title, desc }, i}
    <div class="space-y-2 text-center">
      <img width={imageData[0].width} height={imageData[0].height} alt={title} src="https://api.lorem.space/image{imageData[0].category}?w={imageData[0].width}&h={imageData[0].height}&t={i+1}" class="bg-black bg-opacity-5 rounded-box border border-black border-opacity-5"/>
      <h3 class="font-bold">{title}</h3>
      <p class="text-xs opacity-40">{desc}</p>
    </div>
  {/each}
</div>

<script>
  export let items = {};
  export let imageData = {};
</script>