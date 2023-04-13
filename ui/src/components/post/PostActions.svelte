<script lang="ts">
  import PostActionButton from "@/components/post/PostActionButton.svelte";

  export let countChat = 0;
  export let countRepost = 0;
  export let countLike = 0;

  export let activeChat = false;
  export let activeRepost = false;
  export let activeLike = false;
  export let activeBookmark = false;

  function onClickChat() {
    countChat++;
  }

  function onClickRepost() {
    activeRepost = !activeRepost;
    activeRepost ? countRepost++ : countRepost--;
  }

  function onClickLike() {
    activeLike = !activeLike;
    activeLike ? countLike++ : countLike--;
  }

  function onClickBookmark() {
    activeBookmark = !activeBookmark;
  }
</script>

<div class="flex justify-between items-center">
  <PostActionButton
    class="flex-1"
    icon="ri:chat-1-line"
    color="zinc"
    activeIcon="ri:chat-1-line"
    activeColor="sky"
    onClick={onClickChat}
    value={countChat}
    active={activeChat}
  />
  <PostActionButton
    class="flex-1"
    icon="ri:repeat-line"
    color="zinc"
    activeIcon="ri:repeat-fill"
    activeColor="green"
    onClick={onClickRepost}
    value={countRepost}
    active={activeRepost}
  />
  <PostActionButton
    class="flex-1"
    icon="ri:heart-3-line"
    color="zinc"
    activeIcon="ri:heart-3-fill"
    activeColor="red"
    onClick={onClickLike}
    value={countLike}
    active={activeLike}
  />
  <PostActionButton
    class="flex-none"
    icon="ri:bookmark-line"
    color="zinc"
    activeIcon="ri:bookmark-fill"
    activeColor="yellow"
    onClick={onClickBookmark}
    active={activeBookmark}
  />
</div>
