<script lang="ts">
	import { listToString } from '$lib/utils/listToString';

	import type { Author, Book } from '@prisma/client';

	export let book: Book & { authors: Author[] };
</script>

<article class="flex flex-col gap-4 p-8 rounded shadow bg-white h-full">
	<header>
		<h2 class="font-bold text-lg hover:underline focus:underline">
			<a sveltekit:prefetch href="/{book.slug}">{book.title}</a>
		</h2>
		<h3>By {listToString(book.authors.map((a) => a.name))}</h3>
	</header>
	<main class="line-clamp-3">
		{book.description || "Description wasn't provided"}
	</main>
</article>
