<script lang="ts">
  import Icon from "./Icon.svelte";

  export let size = "18";

  let checked = false;
</script>

<label class="inline-flex flex-shrink-0 flex-wrap items-center cursor-pointer dark:fill-zinc-400" >
  <input class="hidden" type="checkbox" bind:checked />

  {#if checked}
    <Icon class="" name="ri:moon-line" width={size} height={size} />
  {:else}
    <Icon name="ri:sun-line" width={size} height={size} />
  {/if}
</label>
