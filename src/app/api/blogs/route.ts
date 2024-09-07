import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({ message: "Hello From Blog api" });
};

export const POST = async (request: Request) => {
  return NextRequest.json({ message: "Hello From Blog api" });
};

export const DELETE = async () => {
  return NextResponse.json({ message: "Hello From Blog api" });
};

export const PUT = async () => {
  return NextResponse.json({ message: "Hello From Blog api" });
};

export const PATCH = async () => {
  return NextResponse.json({ message: "Hello From Blog api" });
};
