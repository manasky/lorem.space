<div class="navbar glass md:rounded-box relative z-10">

  <div class="navbar-start">
    <a href="/" class="btn btn-ghost rounded-btn font-bold">{@html title}</a>
  </div>

  <div class="navbar-end hidden lg:flex">
    {#each links as { label, href }, i}
      <a href={href} class="btn btn-ghost rounded-btn">{label}</a>
    {/each}
  </div>

  <div class="navbar-end lg:hidden">
    <div class="dropdown dropdown-end">
      <div tabindex="0" class="btn btn-ghost rounded-btn">Categories</div> 
      <ul tabindex="0" class="p-2 mt-4 shadow compact menu dropdown-content bg-base-100 rounded-box w-52">
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
