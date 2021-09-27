
<footer class="p-10 footer bg-primary text-primary-content footer-center">
  <div>
    <p class="font-bold">{@html title}</p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
    <p>{@html contact}</p>
  </div>
</footer>



<script>
  export let title = "";
  export let contact = "";
</script>