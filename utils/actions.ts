"use server";
import { revalidatePath } from "next/cache";
import db from "./db";

export const CompleteHeroku = async (id) => {
  await db.heroku.update({
    where: { id },
    data: {
      completed: true,
    },
  });
  revalidatePath("/heroku");
};

export const NewHeroku = async (formData) => {
  const heroku = await db.heroku.create({
    data: {
      content: formData.get("content"),
    },
  });
  revalidatePath("/heroku");
};
