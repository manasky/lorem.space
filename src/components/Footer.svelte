
<footer class="p-10 bg-neutral text-neutral-content">
  <div class="max-w-5xl mx-auto footer">
    <div>
      <span class="footer-title">{@html title}</span> 
      <p class="opacity-50">{@html desc}</p>
      <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      <p>{@html contact}</p>
    </div> 
    <div class="text-xs">
      <span class="footer-title">Donate</span>
      <WalletAddress
        name="btc"
        fullname="bitcoin"
        address="bc1quamx75vg5nfa5m3shx6hxfega03tenxazyg722"
        icon='<svg class="w-16 h-16 fill-[#F7931A]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path transform="scale(4 4) translate(0 0)" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"/></svg>'
      />
      <WalletAddress
        name="eth"
        fullname="ethereum"
        address="0x46199cC02D98Abc6Fd92FD20027701424773d7B2"
        icon='<svg class="w-16 h-16 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 2048"><path transform="scale(4 4) translate(0 0)" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"/></svg>'
      />
      <WalletAddress
        name="ltc"
        fullname="litecoin"
        address="LgNnwRR8jWz8jKpzsDpJdDzWNiGPw6Ct9F"
        icon='<svg class="w-16 h-16 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82.6 82.6"><title>litecoin-ltc-logo</title><circle cx="41.3" cy="41.3" r="36.83" style="fill:#fff"/><path d="M41.3,0A41.3,41.3,0,1,0,82.6,41.3h0A41.18,41.18,0,0,0,41.54,0ZM42,42.7,37.7,57.2h23a1.16,1.16,0,0,1,1.2,1.12v.38l-2,6.9a1.49,1.49,0,0,1-1.5,1.1H23.2l5.9-20.1-6.6,2L24,44l6.6-2,8.3-28.2a1.51,1.51,0,0,1,1.5-1.1h8.9a1.16,1.16,0,0,1,1.2,1.12v.38L43.5,38l6.6-2-1.4,4.8Z" style="fill:#345d9d"/></svg>'
      />
    </div>
  </div>
</footer>





<script>
  import WalletAddress from '../components/WalletAddress.svelte'
  export let title = "";
  export let desc = "";
  export let contact = "";
</script>