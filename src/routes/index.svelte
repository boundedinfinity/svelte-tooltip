<script lang="ts">
  import "../app.css";
  import type { TTEntry } from "$lib/model";
  import Inline from "$lib/inline.svelte";
  import Display from "$lib/display.svelte";

  const ghEntry: TTEntry = {
    title: "Github",
    description: "this is a description",
    references: [{ url: "https://www.github.com" }],
  };
</script>

<Inline entry={ghEntry} />

<div>
  <Display />
</div>
