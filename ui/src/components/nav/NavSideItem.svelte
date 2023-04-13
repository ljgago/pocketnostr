<script lang="ts">
  import Icon from "@/components/base/Icon.svelte";
  import Tooltip from "@/components/base/Tooltip.svelte";

  export let icon: string = undefined;
  export let disabled: boolean = false;
  export let iconSize: string = "24";
  export let group: any = undefined;
  export let value: string = "";
  export let tip: string = "";

  let cssActive: string = "";

  $: if (group == value) {
    cssActive = "fill-sky-500 text-sky-500";
  } else {
    cssActive = "dark:fill-zinc-200 dark:text-zinc-200";
  }
</script>

<Tooltip right {tip}>
  <label>
    <fieldset
      class="{$$props.class} inline-flex flex-shrink-0 flex-wrap items-center cursor-pointer select-none rounded-xl p-2 text-lg {cssActive} enabled:hover:bg-zinc-200/50 dark:enabled:hover:bg-zinc-900 disabled:opacity-25"
      {disabled}
    >
      <input class="hidden" type="radio" bind:group {value} />
      {#if icon}
        <Icon name={icon} width={iconSize} height={iconSize} />
      {/if}
      <slot />
    </fieldset>
  </label>
</Tooltip>
