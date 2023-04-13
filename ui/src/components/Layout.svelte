<script lang="ts">
</script>

<div class={$$props.class}>
  <div class="layout grid">
    <div
      class="top-a bg-black-new/75 backdrop-blur hidden xl:block top-0 sticky"
    >
      <slot name="top-a" />
    </div>
    <div
      class="top-b bg-black-new/75 backdrop-blur border-b border-zinc-800 xl:hidden top-0 sticky"
    >
      <slot name="top-b" />
      <div class="" />
    </div>
    <div class="left-a hidden xl:block h-fit top-0 min-h-screen sticky">
      <slot name="left-a">left-1</slot>
    </div>
    <div
      class="left-b hidden sm:block xl:hidden h-fit top-0 min-h-screen sticky"
    >
      <slot name="left-b">left-2</slot>
    </div>
    <div class="mid-a items-stretch ">
      <slot name="mid-a">mid</slot>
    </div>
    <div class="right-a hidden xl:block h-fit top-0 min-h-screen sticky">
      <slot name="right-a">right</slot>
    </div>
    <div class="bot-a bg-purple-500 sm:hidden bottom-0 sticky">
      <slot name="bot-a">bot</slot>
    </div>
  </div>
</div>

<style>
  .layout {
    grid-template-columns: minmax(16.666667%, 1fr) minmax(0px, 600px) 1fr;
    grid-template-rows: 3rem 1fr 3rem;
    grid-template-areas:
      "top-b top-b top-b"
      "mid-a mid-a mid-a"
      "bot-a bot-a bot-a";
  }

  .top-a {
    grid-area: top-a;
  }

  .top-b {
    grid-area: top-b;
  }

  .left-a {
    grid-area: left-a;
  }

  .left-b {
    grid-area: left-b;
  }

  .mid-a {
    grid-area: mid-a;
  }

  .right-a {
    grid-area: right-a;
  }

  .bot-a {
    grid-area: bot-a;
  }

  @media (min-width: 640px) {
    .layout {
      grid-template-rows: 3rem 1fr;
      grid-template-areas:
        "left-b top-b right-a"
        "left-b mid-a right-a";
    }
  }

  @media (min-width: 1280px) {
    .layout {
      grid-template-rows: 1.5rem 1fr;
      grid-template-areas:
        "left-a top-a right-a"
        "left-a mid-a right-a";
    }
  }
</style>
