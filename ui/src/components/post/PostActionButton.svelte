<script lang="ts">
  import { nFormatter } from "@/utils";
  import Icon from "@/components/base/Icon.svelte";

  export let name: string = "";
  export let icon: string;
  export let activeIcon: string;
  export let color: string = "zinc";
  export let activeColor: string = "sky";
  export let active: boolean = false;
  export let disabled: boolean = false;
  export let value: number = 0;
  export let onClick: any;
</script>

<div class={$$props.class}>
  <button {name} {disabled} on:click={onClick}>
    {#if active}
      <div class="group/on inline-flex items-center content-center">
        <div
          class="flex items-center justify-center h-8 w-8 rounded-full fill-{activeColor}-400 group-active/on:bg-{activeColor}-900/50 group-hover/on:fill-{activeColor}-400 group-hover/on:bg-{activeColor}-900/20"
        >
          <Icon name={activeIcon} width="18" height="18" />
        </div>
        {#if value != 0}
          <span
            class="ml-px text-{activeColor}-400 group-hover/on:text-{activeColor}-400"
            >{nFormatter(value, 1)}</span
          >
        {/if}
      </div>
    {:else}
      <div class="group/off inline-flex items-center content-center">
        <div
          class="flex items-center justify-center h-8 w-8 rounded-full fill-{color}-400 group-active/off:bg-{activeColor}-900/50 group-hover/off:fill-{activeColor}-400 group-hover/off:bg-{activeColor}-900/20"
        >
          <Icon name={icon} width="18" height="18" />
        </div>
        {#if value != 0}
          <span
            class="ml-px text-{color}-400 group-hover/off:text-{activeColor}-400"
            >{nFormatter(value, 1)}</span
          >
        {/if}
      </div>
    {/if}
  </button>
</div>
