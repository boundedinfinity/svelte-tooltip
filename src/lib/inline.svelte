<script type="ts">
  import store from "./store";
  import type { TTEntry } from "./model";
  export let entry: TTEntry;
  export let expanded = false;
 
  let title = entry && entry.title
      ? entry.title.replaceAll("[", "<b>").replaceAll("]", "</b>")
      : "";

  let text: string;

  if ( entry && entry.abbr && expanded) {
    text = `${title} (${entry.abbr})`;
  } else if ( entry && entry.abbr) {
    text = entry.abbr;
  } else {
    text = title;
  }

  function mouseOver() {
    store.display(entry);
  }
</script>

<span on:mouseover={mouseOver} on:focus>
  {@html text}
</span>

<style>
  span {
    text-decoration-style: solid;
    text-decoration-line: underline;
  }
</style>
