<script>
  import Button from "./Button.svelte";
  import Select from "./Select.svelte";
  import Input from "./Input.svelte";
  import { count } from "../../utils/calcFunctions";

  let inputAmount;
  let inputSizeA = "cup";
  let inputSizeB = "gram";

  let data = {
    sizeA: "cup",
    sizeB: "gram",
    ingredients: [],
    amount: "",
    result: "Hasil",
    countMethod: "",
  };

  let sizes = [
    {
      name: "Gelas",
      value: "cup",
    },
    {
      name: "Sendok makan (sdm)",
      value: "tbsp",
    },
    {
      name: "Sendok teh (sdt)",
      value: "tsp",
    },

    {
      name: "Gram (g)",
      value: "gram",
    },
    {
      name: "mililiter (ml / cc)",
      value: "ml",
    },
  ];

  function onCalcChange() {
    data.amount = inputAmount;
    data.sizeA = inputSizeA;
    data.sizeB = inputSizeB;
    data = count(data);
  }

  function swap() {
    [inputSizeA, inputSizeB] = [inputSizeB, inputSizeA];
    onCalcChange();
  }
</script>

<div class="relative p-5 md:p-10">
  <div
    class="relative flex flex-row max-w-screen-lg mx-auto rounded-full border border-pink-300"
  >
    <Select
      class="rounded-l-full"
      bind:value={inputSizeA}
      items={sizes}
      onChange={onCalcChange}
    />
    <Button on:click={swap}/>
    <Select
      class="justify-end rounded-r-full"
      bind:value={inputSizeB}
      items={sizes}
      onChange={onCalcChange}
    />
  </div>
  <div class="flex flex-col md:flex-row items-start pt-10 space-y-2 md:space-y-0 md:space-x-20">
    <div class="w-full">
      <Input
        placeholder="Masukkan Jumlah"
        bind:value={inputAmount}
        on:input={onCalcChange}
      />
      <div
        class="font-light text-sm text-pink-500 space-y-2 {data.countMethod ==
        ''
          ? 'hidden'
          : 'block p-3'}"
      >
        <div>Cara Menghitung :</div>
        <p>{data.countMethod}</p>
      </div>
    </div>
    <div class="w-full ">
      <div
        class="bg-white rounded font-semibold outline-transparent border border-pink-300 w-full p-3 placeholder-pink-300 text-pink-600"
      >
        <div class="text-lg">{data.result}</div>
      </div>
      <div
        class="font-light text-sm text-pink-500 space-y-2 {data.ingredients
          .length === 0
          ? 'hidden'
          : 'block p-3'}"
      >
        {#each data.ingredients as ing}
          <div class="text-sm">{ing.name} = {ing.value}</div>
        {/each}
      </div>
    </div>
  </div>
</div>
