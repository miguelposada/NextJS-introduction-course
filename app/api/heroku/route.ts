import { NextResponse } from "next/server";
import db from "@/utils/db";

export const GET = async (request: Request) => {
  const herokus = await db.heroku.findMany({});
  return NextResponse.json({ message: herokus });
};

export const POST = async (request: Request) => {
  const data = await request.json();

  const heroku = await db.heroku.create({
    data,
  });
  //   const data = await request.json();
  return NextResponse.json({ message: heroku });
};
