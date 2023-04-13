<script lang="ts">
  let midScroll;
  let bodyScroll;

  function handleMidScroll(e: any) {
    console.log("Mid", e.target.clientHeight);

    bodyScroll = e.target.scrollTop;
    /* const scrollTop = e.target.scrollTop; */
    /* const scrollHeight = e.target.scrollHeight; */
    /* const clientHeight = e.target.clientHeight; */

    /* const scrollbarHeight = globalScroll.clientHeight; */
    /* const thumbPosition = */
    /*   (scrollTop / (scrollHeight - clientHeight)) * (scrollbarHeight - 20); // El 20 es el tamaño del thumb */

    /* globalScroll.scrollTop = thumbPosition; */
  }

  function handleBodyScroll(e: any) {
    console.log("Body", e);
    /* const scrollbarHeight = e.target.clientHeight; */
    /* const scrollHeight = midScroll.scrollHeight; */
    /* const clientHeight = midScroll.clientHeight; */

    /* const thumbPosition = */
    /*   (e.target.scrollTop / (scrollbarHeight - 20)) * */
    /*   (scrollHeight - clientHeight); // El 20 es el tamaño del thumb */

    /* midScroll.scrollTop = thumbPosition; */
  }

  /* class="grid sm:grid-cols-[auto_minmax(600px,2fr)_1fr] md:gap-2 lg:grid-cols-[auto_minmax(600px,1fr)_1fr] place-content-around" */

  /* <div class="container xl:grid xl:h-screen xl:place-items-center"> */
  /*   <div */
  /*     class="grid w-full  sm:grid-cols-[minmax(16.666667%,1fr)_minmax(0px,600px)_1fr]" */
  /*   > */
  /*     <div class="w-full h-full sm:block hidden items-stretch"> */
  /*       Left */
  /*     </div> */
  /*     <div class="w-full h-screen overflow-y-auto"> */
  /*       <Post class="px-3" /> */
  /*     </div> */
  /*     <div class="hidden xl:block xl:items-stretch">Right</div> */
  /*   </div> */
  /* </div> */
</script>

<svelte:body on:scroll={handleBodyScroll} />

<div class={$$props.class}>
  <div class="layout grid gap-1 w-screen h-screen relative">
    <div class="top bg-green-500 xl:hidden">
      <slot name="top">top</slot>
    </div>
    <div class="left-1 hidden xl:block overflow-y-auto relative z-10">
      <slot name="left-1">left-1</slot>
    </div>
    <div class="left-2 hidden sm:block xl:hidden relative z-10">
      <slot name="left-2">left-2</slot>
    </div>
    <div
      bind:this={midScroll}
      on:scroll={handleMidScroll}
      class="mid items-stretch overflow-y-auto relative z-20"
    >
      <slot name="mid">mid</slot>
    </div>
    <div class="right bg-yellow-500 hidden xl:block">
      <slot name="right">right</slot>
    </div>
    <div class="bot bg-purple-500 sm:hidden">
      <slot name="bot">bot</slot>
    </div>
  </div>
</div>

<style>
  .layout {
    grid-template-columns: minmax(16.666667%, 1fr) minmax(0px, 600px) 1fr;
    grid-template-rows: 3rem 1fr 3rem;
    grid-template-areas:
      "top top top"
      "mid mid mid"
      "bot bot bot";
  }

  .top {
    grid-area: top;
  }

  .left-1 {
    grid-area: left-1;
  }

  .left-2 {
    grid-area: left-2;
  }

  .mid {
    grid-area: mid;
    /* scrollbar-width: none; */
  }

  .right {
    grid-area: right;
  }

  .bot {
    grid-area: bot;
  }

  @media (min-width: 640px) {
    .layout {
      grid-template-rows: 3rem 1fr;
      grid-template-areas:
        "left-2 top ."
        "left-2 mid right";
    }
  }

  @media (min-width: 1280px) {
    .layout {
      grid-template-rows: none;
      grid-template-areas: "left-1 mid right";
    }
  }
</style>
