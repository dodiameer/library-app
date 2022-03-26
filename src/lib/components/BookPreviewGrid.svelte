<script lang="ts">
	import type { Author, Book } from '@prisma/client';
	import BookPreviewCard from './BookPreviewCard.svelte';

	export let books: (Book & { authors: Author[] })[];
</script>

<ul class="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(35ch,1fr))] gap-8">
	{#each books as book (book.id)}
		<li>
			<BookPreviewCard {book} />
		</li>
	{/each}
</ul>
