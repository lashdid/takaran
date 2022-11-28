<script>
  export let placeholder;
  export let value;
</script>

<input
  on:keypress={(event) => !/[0-9.]/.test(event.key) && event.preventDefault()}
  type="number"
  class="rounded font-semibold outline-transparent border border-pink-300 w-full md:h-full p-3 py-[14px] placeholder-pink-300 transition text-pink-600 duration-300 focus:(placeholder-transparent) focus:(border border-pink-400)"
  {placeholder}
  bind:value
  on:input
/>
