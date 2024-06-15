<script lang="ts">
  import { onMount } from "svelte";

  export let config = {};

  onMount(async () => {
    const response = await fetch("config.json");

    await response.json().then((data) => {
      config = data;
    });
  });
</script>
