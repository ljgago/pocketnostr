<script>
  export let tip = "";
  export let top = false;
  export let right = false;
  export let bottom = false;
  export let left = false;
  export let active = false;
  export let color = "dark:bg-zinc-900 dark:text-zinc-200";
</script>

<div class="tooltip-wrapper">
  <span class="tooltip-slot">
    <slot />
  </span>
  <div
    class="tooltip"
    class:active
    class:left
    class:right
    class:bottom
    class:top
  >
    {#if tip}
      <div class="default-tip {color}">{tip}</div>
    {:else}
      <slot name="custom-tip" />
    {/if}
  </div>
</div>

<style>
  .tooltip-wrapper {
    position: relative;
    display: inline-block;
    z-index: 9999;
  }
  .tooltip {
    position: absolute;
    /* font-family: inherit; */
    display: inline-block;
    white-space: nowrap;
    /* color: inherit; */
    opacity: 0;
    visibility: hidden;
    transition: opacity 150ms, visibility 150ms;
  }
  .default-tip {
    display: inline-block;
    padding: 8px 8px;
    border-radius: 6px;
    /* color: inherit; */
  }

  .tooltip.top {
    left: 50%;
    transform: translate(-50%, -100%);
    margin-top: -12px;
  }
  .tooltip.bottom {
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 100%);
    margin-bottom: -12px;
  }
  .tooltip.left {
    left: 0;
    transform: translateX(-100%);
    margin-left: -12px;
  }
  .tooltip.right {
    right: 0;
    transform: translateX(100%);
    margin-right: -12px;
  }
  .tooltip.active {
    opacity: 1;
    visibility: initial;
  }
  .tooltip-slot:hover + .tooltip {
    opacity: 1;
    visibility: initial;
    transition-delay: 1s;
  }
</style>
