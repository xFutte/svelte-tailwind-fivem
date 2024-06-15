<script lang="ts">
    import { fetchNui } from '$utils/fetchNui';
    import { useNuiEvent } from '$utils/useNuiEvent';
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';


  /** Returns boolean value of if the resource is visible or not */
  export const visibility = writable(false);

  let isVisible: boolean;

  visibility.subscribe((visible) => {
    isVisible = visible;
  });

  useNuiEvent<boolean>('setVisible', (visible: boolean) => {
    visibility.set(visible);
  });

  onMount(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if (isVisible && ['Escape'].includes(e.code)) {
        fetchNui('hideUI');
        visibility.set(false);
      }
    };

    window.addEventListener('keydown', keyHandler);

    return () => window.removeEventListener('keydown', keyHandler);
  });
</script>

<main>
  {#if isVisible}
    <slot />
  {/if}
</main>