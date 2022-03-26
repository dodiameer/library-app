import { prisma } from "$lib/prisma";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async ({params}) => {
  const book = await prisma.book.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      authors: true
    }
  })

  if (!book) {
    return {
      status: 404
    }
  }

  return {
    status: 200,
    body: {
      book
    }
  }
} 