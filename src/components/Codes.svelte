<div class="mockup-code text-left w-full max-w-[90vw]">
  <pre>
    <code class="text-sm pr-4"><slot/></code>
  </pre>
</div>

{#if showListOfLinks == true}
<div class="dropdown w-full">
  <div tabindex="0" class="text-xs mx-4 link link-hover inline-block">
    Show a list of links
  </div> 
  <div tabindex="0" class="dropdown-content -mt-4 w-full">

    <div class="bg-base-200 px-6 py-10 text-base-content rounded-box text-left w-full max-w-[90vw] text-xs">
      <pre>
<code class="pr-4"><slot/>&hash=8B7BCDC2</code>
<code class="pr-4"><slot/>&hash=500B67FB</code>
<code class="pr-4"><slot/>&hash=A89D0DE6</code>
<code class="pr-4"><slot/>&hash=225E6693</code>
<code class="pr-4"><slot/>&hash=9D9539E7</code>
<code class="pr-4"><slot/>&hash=BDC01094</code>
<code class="pr-4"><slot/>&hash=7F5AE56A</code>
<code class="pr-4"><slot/>&hash=4F32C4CF</code>
<code class="pr-4"><slot/>&hash=B0E33EF4</code>
<code class="pr-4"><slot/>&hash=2D297A22</code>

      </pre>
    </div>

  </div>
</div>
{/if}

<script>
  export let showListOfLinks = true;
</script>