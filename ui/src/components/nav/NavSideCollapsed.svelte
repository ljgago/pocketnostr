<script lang="ts">
  import NavSideItem from "./NavSideItem.svelte";

  let selected: string = "home";
</script>

<div class="flex flex-col gap-4 place-items-end items-right ">
  <div class="flex flex-col gap-1 mx-4">
    <div class="h-12" />
    <NavSideItem
      class="gap-4 w-full"
      icon="ri:home-5-line"
      bind:group={selected}
      tip="Home"
      value="home"
    />
    <div class="h-2" />
    <NavSideItem
      class="gap-4 w-full"
      icon="ri:notification-4-line"
      bind:group={selected}
      tip="Notification"
      value="notification"
    />
    <NavSideItem
      class="gap-4 w-full"
      icon="ri:at-line"
      bind:group={selected}
      tip="Conversation"
      value="conversation"
    />
    <NavSideItem
      class="gap-4 w-full"
      icon="ri:heart-3-line"
      bind:group={selected}
      tip="Favorites"
      value="favorites"
    />
    <NavSideItem
      class="gap-4 w-full"
      icon="ri:earth-line"
      bind:group={selected}
      tip="Local"
      value="local"
    />
    <div class="h-2" />
    <NavSideItem
      class="gap-4 w-full"
      icon="ri:settings-3-line"
      bind:group={selected}
      tip="Settings"
      value="settings"
    />
  </div>
</div>
