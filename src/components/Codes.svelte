<div class="mockup-code text-left w-full max-w-[90vw] relative">

  <div class="absolute top-2 right-2">
    <CopyToClipboard client:load {textToCopy} />
  </div>

  <pre>
    <code class="pr-4 text-sm"><slot/></code>
  </pre>
</div>

{#if showListOfLinks == true}
<div class="w-full dropdown">
  <div tabindex="0" class="inline-block mx-4 text-xs link link-hover">
    Show a list of links
  </div>
  <div tabindex="0" class="w-full -mt-4 dropdown-content">

    <div class="bg-base-200 px-6 py-10 text-base-content rounded-box text-left w-full max-w-[90vw] text-xs overflow-x-auto relative">
      <div class="absolute top-2 right-2">
        <CopyToClipboard 
          client:load 
          textToCopy={
            textToCopy+'&hash=8B7BCDC2'
            +'\n'+
            textToCopy+'&hash=500B67FB'
            +'\n'+
            textToCopy+'&hash=A89D0DE6'
            +'\n'+
            textToCopy+'&hash=225E6693'
            +'\n'+
            textToCopy+'&hash=9D9539E7'
            +'\n'+
            textToCopy+'&hash=BDC01094'
            +'\n'+
            textToCopy+'&hash=7F5AE56A'
            +'\n'+
            textToCopy+'&hash=4F32C4CF'
            +'\n'+
            textToCopy+'&hash=B0E33EF4'
            +'\n'+
            textToCopy+'&hash=2D297A22'
          }
        />
      </div>
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
  import CopyToClipboard from '../components/CopyToClipboard.svelte'
  export let textToCopy;
  export let showListOfLinks = true;
</script>