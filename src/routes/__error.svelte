<script context="module" lang="ts">
	import type { ErrorLoad } from '@sveltejs/kit';

	export const load: ErrorLoad = async ({ error, status }) => {
		return {
			props: {
				message: error.message,
				status,
				stack: import.meta.env.DEV ? error.stack : undefined
			}
		};
	};
</script>

<script lang="ts">
	export let message, stack, status;
	console.error(stack);
</script>

<div class="container">
	<div class="flex flex-col items-center justify-center h-screen">
		{#if status === 404}
			<h1 class="font-bold text-4xl mb-3">404</h1>
			<p>The page you requested wasn't found</p>
		{:else}
			<h1 class="font-bold text-4xl mb-3">{status}</h1>
			<p>{message}</p>
		{/if}
	</div>
</div>
