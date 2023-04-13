<script lang="ts">
  import Layout from "./Layout.svelte";
  import NavSideFull from "@/components/nav/NavSideFull.svelte";
  import NavSideCollapsed from "@/components/nav/NavSideCollapsed.svelte";
  import PostCard from "@/components/post/PostCard.svelte";
  import Theme from "./Theme.svelte";
</script>

<Theme>
  <Layout>
    <NavSideFull slot="left-a" />
    <NavSideCollapsed slot="left-b" />
    <PostCard slot="mid-a" />
  </Layout>
</Theme>
