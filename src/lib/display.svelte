<script type="ts">
  import store from "./store";
  import { fade } from "svelte/transition";
  import { Ea } from "@boundedinfinity/svelte-ea"

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
    <div in:fade class="container">
      <h3>{@html bracket2bold($store.title)}</h3>

      {#if $store.abbr}
        <p>Abbreviation: <b>{$store.abbr}</b></p>
      {/if}

      {#if $store.description}
        <hr />

        <div>{@html $store.description}</div>
      {/if}

      {#if $store.references}
        <hr />

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

<style>
  .container {
    border-width: 2px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }

  li {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
</style>