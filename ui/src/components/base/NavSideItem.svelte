<script lang="ts">
  import Icon from "./Icon.svelte";

  export let icon: string = undefined;
  /* export let color: string = "zinc"; */
  export let active: boolean = false;
  export let disabled: boolean = false;
  export let iconSize: string = "24";
  export let onClick: any = undefined;

  let cssActive: string = "";
  let cssDisabled: string = "";

  $: if (active) {
    cssActive = "fill-sky-400 text-sky-400";
  } else {
    cssActive = "fill-zinc-200 text-zinc-200";
  }

  $: if (disabled) {
    cssDisabled = "opacity-25";
  } else {
    cssDisabled = "hover:bg-zinc-900";
  }
</script>

<button
  class="btn-group {$$props.class} inline-flex flex-shrink-0 flex-wrap rounded-xl p-2 text-lg {cssActive} {cssDisabled}"
  {disabled}
  on:click={onClick}
>
  {#if icon}
    <Icon
      class="items-center justify-center rounded-full"
      name={icon}
      width={iconSize}
      height={iconSize}
    />
  {/if}
  <slot />
</button>
