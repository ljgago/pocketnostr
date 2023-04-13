<script lang="ts">
  import NavSideItem from "./NavSideItem.svelte";

  let selected: string = "home";
</script>

<div class="flex flex-col gap-4 place-items-end items-right">
  <div class="flex flex-col gap-1 w-[300px] mx-4">
    <div class="h-12" />
    <NavSideItem
      class="px-4 gap-4 w-full"
      icon="ri:home-5-line"
      bind:group={selected}
      value="home"
    >
      Home
    </NavSideItem>
    <div class="h-2" />
    <NavSideItem
      class="px-4 gap-4 w-full"
      icon="ri:notification-4-line"
      bind:group={selected}
      value="notification"
    >
      Notification
    </NavSideItem>
    <NavSideItem
      class="px-4 gap-4 w-full"
      icon="ri:at-line"
      bind:group={selected}
      value="conversation"
    >
      Conversation
    </NavSideItem>
    <NavSideItem
      class="px-4 gap-4 w-full"
      icon="ri:heart-3-line"
      bind:group={selected}
      value="favorites"
    >
      Favorites
    </NavSideItem>
    <NavSideItem
      class="px-4 gap-4 w-full"
      icon="ri:earth-line"
      bind:group={selected}
      value="local"
    >
      Local
    </NavSideItem>
    <div class="h-2" />
    <NavSideItem
      class="px-4 gap-4 w-full"
      icon="ri:settings-3-line"
      bind:group={selected}
      value="settings"
    >
      Settings
    </NavSideItem>
  </div>
</div>
