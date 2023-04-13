<script lang="ts">
  import Icon from "./Icon.svelte";

  export let icon: string = undefined;
  /* export let color: string = "zinc"; */
  /* export let active: boolean = false; */
  export let disabled: boolean = false;
  export let onClick: any = function () {};

  export let iconSize: string = "24";
</script>

<div
  class="{$$props.class} inline-flex flex-shrink-0 flex-wrap rounded-xl p-2 text-lg fill-zinc-200 text-zinc-200 hover:bg-zinc-900 active:fill-sky-400 active:text-sky-400"
>
  <input type="checkbox" id="check-button" />
  {#if icon}
    <Icon
      class="items-center justify-center rounded-full"
      name={icon}
      width={iconSize}
      height={iconSize}
    />
  {/if}
  <label for="check-button"><slot /></label>
</div>
