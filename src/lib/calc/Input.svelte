<script>
    export let placeholder;
    export let value;
</script>

<input type="number" class="rounded font-semibold outline-transparent border border-pink-300 w-full md:h-full p-3 py-[14px] placeholder-pink-300 transition text-pink-600 duration-300 focus:(placeholder-transparent)" placeholder={placeholder} bind:value={value} on:input/>