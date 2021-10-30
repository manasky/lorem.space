<div class="relative z-10 gap-2 px-4 navbar md:rounded-box">

  <div class="navbar-start">
    <a href="/" class="font-bold btn btn-ghost rounded-btn">{@html title}</a>
  </div>

  <div class="hidden navbar-end lg:flex">
    {#each links as { label, href }, i}
      <a href={href} class="capitalize btn btn-ghost btn-sm">{label}</a>
    {/each}
  </div>

  <div class="navbar-end lg:hidden">
    <div class="dropdown dropdown-end">
      <div tabindex="0" class="flex space-x-2 capitalize btn-sm btn btn-ghost rounded-btn">
        <span>MENU</span>
        <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
      </div> 
      <ul tabindex="0" class="p-2 mt-6 compact menu dropdown-content bg-neutral text-neutral-content rounded-box w-60">
        {#each links as { label, href }, i}
          <li>
            <a href={href}>{label}</a>
          </li> 
        {/each}
      </ul>
    </div>
  </div>

</div>


<script>
  export let title = "";
  export let links = {};
</script>
