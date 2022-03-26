<script lang="ts">
	import { listToString } from '$lib/utils/listToString';

	import type { Author, Book } from '@prisma/client';

	export let book: Book & { authors: Author[] };

	let previewableAuthors = book.authors.filter((a) => !!a.bio);
</script>

<svelte:head>
	<title>{book.title}</title>
</svelte:head>

<article class="container">
	<header class="mb-4">
		<h1 class="font-bold text-3xl">{book.title}</h1>
		<h2>
			By {@html listToString(
				book.authors.map((a) => `<a href="/authors/${a.slug}" class="underline">${a.name}</a>`)
			)}
		</h2>
	</header>
	<main class="max-w-prose">
		<p>
			{book.description || "Description wasn't provided"}
		</p>
		{#if previewableAuthors.length}
			<section class="mt-6">
				<h2 class="font-bold text-2xl mb-3">About the authors</h2>
				<ul class="flex flex-col gap-4">
					{#each previewableAuthors as author (author.id)}
						<li>
							<h3 class="font-bold text-xl mb-1">
								<a href="/authors/{author.slug}">{author.name}</a>
							</h3>
							<p>{author.bio}</p>
						</li>
					{/each}
				</ul>
			</section>
		{/if}
	</main>
</article>
