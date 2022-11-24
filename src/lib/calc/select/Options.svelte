<script>
  export let visible = false;
  export let value;
  export let items = [];
  export let onChange = () => {};
</script>

<div class="absolute {visible ? 'flex': 'hidden'} flex-col bg-pink-100 border border-pink-300 text-xs w-full mt-5 py-5 left-0">
  {#each items as item}
    <button
      class="text-left text-pink-500 font-semibold pl-5 py-1 transition duration-300 hover:bg-pink-200 {item.value === value && 'bg-pink-200'}"
      on:click={() => {
        value = item.value
        visible = false
        onChange()
      }}>{item.name}</button
    >
  {/each}
</div>
