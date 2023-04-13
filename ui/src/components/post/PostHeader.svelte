<script lang="ts">
  import Icon from "@/components/base/Icon.svelte";

   type Event = {
    id: string,
    pubkey: string,
    created_at: number,
    kind: number,
    tags: [],
    content: string,
    sig: string
  };

  export let event: Event;

  let profile = true;
  let npub: string =
    "npub1wxxh2mmqeaghnme4kwwudkel7k8sfsrnf7qld4zppu9sglwljq5shd0y24";
  /* let npub: string = "npub1wxxh2mmqeaghnme4kwwudkel7"; */

  function sortKey(npub: string): string {
    return `${npub.slice(4, 9)}...${npub.slice(-5)}`;
  }
</script>

<div class="flex gap-x-1 items-center">
  <div>
    <a
      href="/"
      class="flex flex-col md:flex-row gap-x-2 rounded-xl px-2 -mx-2 dark:hover:bg-zinc-900"
    >
      {#if profile}
        <span class="font-bold ">MyUser</span>
        <p class="inline-flex max-w-sm line-clamp-1 text-sm items-center">
          <span class="dark:text-zinc-400">nickname</span>
          <span class="dark:text-zinc-500">@demo.com</span>
        </p>
      {:else}
        <span class="inline-flex">
          <span class="dark:text-zinc-400">npub</span>
          <span class="max-w-xs line-clamp-1 dark:text-zinc-500 ">
            {sortKey(npub)}
          </span>
        </span>
      {/if}
    </a>
  </div>
  <span class="flex-auto" />
  <span class="dark:text-zinc-500">2m</span>
  <button class=" ">
    <div class="group/on ">
      <div
        class="p-2 -my-2 rounded-full fill-zinc-500 group-active/on:bg-sky-900/50 group-hover/on:fill-sky-400 group-hover/on:bg-sky-900/20"
      >
        <Icon name="ri:more-line" width="18" height="18" />
      </div>
    </div>
  </button>
</div>
