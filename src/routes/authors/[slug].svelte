<script lang="ts">
	import BookPreviewGrid from '$lib/components/BookPreviewGrid.svelte';
	import type { Author, Book } from '@prisma/client';

	export let author: Author & { books: (Book & { authors: Author[] })[] };
</script>

<svelte:head>
	<title>{author.name}</title>
</svelte:head>

<article class="container">
	<header class="mb-4">
		<h1 class="font-bold text-3xl">{author.name}</h1>
	</header>
	<main>
		<p class="max-w-prose">
			{author.bio || "Bio wasn't provided"}
		</p>
		<section class="mt-6">
			<h2 class="font-bold text-2xl mb-3">Books</h2>
			{#if author.books.length}
				<BookPreviewGrid books={author.books} />
			{:else}
				<p>This author currently has no books in the library</p>
			{/if}
		</section>
	</main>
</article>
