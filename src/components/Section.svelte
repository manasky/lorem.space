<div id={name} class="pt-6 px-4 pb-20 min-h-[50vh] w-full grid place-content-center">
  <div class="grid xl:grid-cols-2 gap-10 max-w-7xl">

    <slot/>

  </div>
</div>

<script>
  export let name = "";
</script>