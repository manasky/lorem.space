<div class="flex flex-col gap-2 px-10 py-6 bg-neutral-focus">
  <a href="/"><h1 class="font-bold uppercase">{@html title}</h1></a>
  <div class="text-xs opacity-50">{@html desc}</div>
</div>
<div class="sticky top-0">
  <ul class="p-2 lg:p-4 menu">
    {#each links as { label, href, icon, target }, i}
      <li><a href={href} class="flex gap-3" target={target ? target : ""}>
        <span>{@html icon}</span>
        <span class="text-xs lg:text-sm">{label}</span>
      </a></li>
    {/each}
  </ul>
  <div class="text-center">
    <a class="github-button" href="https://github.com/manasky/lorem.space" data-color-scheme="no-preference: dark_dimmed; light: dark_dimmed; dark: dark_dimmed;" data-size="large" data-show-count="true" aria-label="Star manasky/lorem.space on GitHub">Star</a>
  </div>
</div>


<script>
  export let title = "";
  export let desc = "";
  export let links = {};
</script>
