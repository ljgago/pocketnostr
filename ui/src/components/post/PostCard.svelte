<script lang="ts">
  import PostAvatar from "@/components/post/PostAvatar.svelte";
  import PostHeader from "./PostHeader.svelte";
  import PostActions from "@/components/post/PostActions.svelte";

  // class="max-w-xs line-clamp-1 dark:bg-gradient-to-r dark:from-zinc-500 dark:via-zinc-900 dark:to-zinc-500 dark:text-transparent dark:bg-clip-text"
</script>

<div class={$$props.class}>
  {#each [...Array(20).keys()] as _item}
    <article>
      <div class="flex flex-col px-3">
        <div class="flex gap-3 pt-3 pb-2">
          <PostAvatar class="pt-1" />
          <div>
            <div class="w-full h-full">
              <div class="flex-col flex-1">
                <PostHeader />
                <div class="mb-2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati aliquam eum quam ea magnam maiores dolorum modi
                    animi iusto eligendi fugit sed, ipsam similique placeat
                    natus blanditiis exercitationem perferendis reiciendis?
                  </p>
                </div>
                <PostActions />
              </div>
            </div>
          </div>
        </div>
        <div class="w-auto border-b border-zinc-800" />
      </div>
    </article>
  {/each}
</div>
