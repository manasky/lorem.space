<div class="flex flex-col max-w-full mb-2 space-y-3 lg:space-y-0 lg:space-x-3 lg:items-center lg:flex-row">
  <div class="flex items-center space-x-3">
    <label for="{name}" class="cursor-pointer modal-button">
      <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>ionicons-v5-k</title><rect x="336" y="336" width="80" height="80"/><rect x="272" y="272" width="64" height="64"/><rect x="416" y="416" width="64" height="64"/><rect x="432" y="272" width="48" height="48"/><rect x="272" y="432" width="48" height="48"/><rect x="336" y="96" width="80" height="80"/><path d="M480,240H272V32H480ZM316,196H436V76H316Z"/><rect x="96" y="96" width="80" height="80"/><path d="M240,240H32V32H240ZM76,196H196V76H76Z"/><rect x="96" y="336" width="80" height="80"/><path d="M240,480H32V272H240ZM76,436H196V316H76Z"/></svg>
    </label>
    <p class="font-bold uppercase opacity-50">{name}</p>
  </div>
  <p class="max-w-[80vw] overflow-x-auto font-mono">{address}</p>
</div>

<input type="checkbox" id="{name}" class="modal-toggle"> 
<label class="cursor-pointer modal" for="{name}">
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label class="text-center text-black bg-white modal-box">
    <div>
      <div class="inline-block py-6 mx-auto">{@html icon}</div>
      <div class="mb-2 text-xl font-bold capitalize">{fullname} Address</div>
      <div class="flex items-center justify-center mb-2 space-x-2 text-sm">
        <span class="opacity-50">Donate any amount</span>
        <span class="text-xl">🤏</span>
      </div>
      <p class="inline-block px-4 py-2 mb-6 font-mono bg-gray-200 rounded-box">{address}</p>
      <img class="mx-auto my-6 bg-gray-200 rounded" alt="{name}" width="300" height="300" src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data={fullname}:{address}">
    </div>
  </label>
</label>

<script>
  export let name = "";
  export let icon = "";
  export let fullname = "";
  export let address = "";
</script>
