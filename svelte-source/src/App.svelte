<script lang="ts">
	import VisibilityProvider from "$lib/providers/VisibilityProvider.svelte";
	import { debugData } from "$utils/debugData";
	import { isEnvBrowser } from "$utils/misc";
	import { onMount } from "svelte";

	// Shows the UI in the browser for development purposes
	if (isEnvBrowser()) {
		debugData([
			{
				action: "setVisible",
				data: true,
			},
		]);
	}

	export let config = {};

	onMount(async () => {
		const response = await fetch("config.json");

		await response.json().then((data) => {
			config = data;
		});
	});
</script>

<VisibilityProvider>
	<div class="flex items-center justify-center h-full">
		<div class="flex flex-col justify-center w-1/4 text-center">
			<img
				src="https://avatars.githubusercontent.com/u/6727484"
				alt="https://github.com/xFutte"
			/>
			<p class="text-3xl dark:text-white font-bold">Template made by</p>
			<p class="text-lg dark:text-white">
				<a href="https://github.com/xFutte">xFutte</a>
			</p>
		</div>
	</div>
</VisibilityProvider>
