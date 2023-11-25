"use client";
import { CompleteHeroku } from "@/utils/actions";
import { startTransition, useTransition } from "react";

const Heroku = ({ heroku }) => {
  const [isPending, startTransition] = useTransition();
  return (
    <div
      className={`border border-black/20 cursor-pointer ${
        heroku.completed ? "line-through text-gray-900" : "color:blue"
      }`}
      onClick={() => startTransition(() => CompleteHeroku(heroku.id))}
    >
      {/* <p>ID: {heroku.id}</p> */}
      <p>Content: {heroku.content}</p>
      <p>Created At: {new Date(heroku.createdAt).toLocaleString()}</p>
    </div>
  );
};

export default Heroku;
