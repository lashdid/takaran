<script>
  export let value;
  let className = "";
  export { className as class };
  export let items = [];
</script>

<button
  class="{className} cursor-pointer flex font-semibold bg-transparent text-xs py-2 px-4 text-pink-500 w-full h-full items-center transition duration-300 appearance-none hover:bg-pink-200"
  on:click
>
  {items.find((item) => item.value === value).name}
</button>
