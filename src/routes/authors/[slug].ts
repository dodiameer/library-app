import { prisma } from "$lib/prisma";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async ({params}) => {
  const author = await prisma.author.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      books: {
        include: {
          authors: true
        }
      },
    }
  })

  if (!author) {
    return { status: 404 }
  }

  return {
    status: 200,
    body: {
      author
    }
  }
}