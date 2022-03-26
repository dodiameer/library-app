import { prisma } from "$lib/prisma";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async () => {
  return {
    status: 200,
    body: {
      books: await prisma.book.findMany({ include: {authors: true}})
    }
  }
}