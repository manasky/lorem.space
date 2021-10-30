
<a class="transition-all duration-200 card image-full hover:shadow-xl hover:-translate-y-2" href="/#{slug}">
  <figure>
    <img src="https://api.lorem.space/image/{slug}?w=300&h=300" alt="{title}" class="bg-neutral" style="aspect-ratio:1">
  </figure> 
  <div class="justify-end card-body">
    <h2 class="card-title">{title}</h2>
  </div>
</a>


<script>
export let title
export let slug
</script>