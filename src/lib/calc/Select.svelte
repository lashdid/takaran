<script>
  // @ts-nocheck
  import ClickOutside from "svelte-click-outside";
  import Options from "./select/Options.svelte";
  import Trigger from "./select/Trigger.svelte";
  import "./select/style.css";

  let optionValue;
  let isOpen = false;
  let className = "";
  export { className as class };
  export { optionValue as value };
  export let items = [];
  export let onChange;
</script>

<div class="click-outside-container">
  <ClickOutside on:clickoutside={() => (isOpen = false)}>
    <Trigger
      {items}
      value={optionValue}
      class={className}
      on:click={() => (isOpen = !isOpen)}
    />
    <Options
      {items}
      {onChange}
      bind:value={optionValue}
      bind:visible={isOpen}
    />
  </ClickOutside>
</div>
