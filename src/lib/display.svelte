<script type="ts">
  import store from "./store";
  import { fade } from "svelte/transition";
  import { Ea } from "@boundedinfinity/svelte-ea";

  interface Replacement {
    from: string;
    to: string;
  }

  const replacements: Replacement[] = [
    { from: "[", to: "<b>" },
    { from: "]", to: "</b>" },
    { from: "&", to: "&amp;" },
  ];

  function bracket2bold(s: string): string {
    let o = s;
    replacements.forEach((r) => (o = o.replaceAll(r.from, r.to)));
    return o;
  }
</script>

{#if $store}
  {#key $store}
    <div in:fade class="animate-fade border-2 px-2 bg-slate-50 shadow-sm">
      <h3>{@html bracket2bold($store.title)}</h3>

      {#if $store.abbr}
        <p>Abbreviation: <b>{$store.abbr}</b></p>
      {/if}

      <hr />

      {#if $store.description}
        <p>{@html $store.description}</p>
      {/if}

      {#if $store.references}
        <p>References:</p>
        <ul>
          {#each $store.references as ref}
            <li><Ea {...ref} /></li>
          {/each}
        </ul>
      {/if}
    </div>
  {/key}
{/if}
