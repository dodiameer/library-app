<script lang="ts">
	import BookPreviewGrid from '$lib/components/BookPreviewGrid.svelte';
	import type { Author, Book } from '@prisma/client';

	export let books: (Book & { authors: Author[] })[];
</script>

<svelte:head>
	<title>Books</title>
</svelte:head>

<div class="container">
	<h1 class="font-bold text-3xl mb-4">Books</h1>
	{#if books.length}
		<BookPreviewGrid {books} />
	{:else}
		<p>No books found</p>
	{/if}
</div>
