<script lang="ts">
  import "../app.css";
  import type { TTEntry } from "$lib/model";
  import Inline from "$lib/inline.svelte";
  import Display from "$lib/display.svelte";

  const ghEntry: TTEntry = {
    title: "Github",
    description: "System based on the git revision control system.",
    references: [{ url: "https://www.github.com" }],
  };

  const googleEntry: TTEntry = {
    title: "Google",
    description: "Search Engine",
    references: [{ text: "Homepage", url: "https://www.google.com" }],
  };
</script>

Some stuff here <Inline entry={ghEntry} /> and here <Inline entry={googleEntry} /> with more stuff.

<div>
  <Display />
</div>
