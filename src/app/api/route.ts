import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({ message: "Hello From server.." });
};

export const POST = async (request: Request) => {
  return NextRequest.json({ message: "Hello From server.." });
};

export const DELETE = async () => {
  return NextResponse.json({ message: "Hello From server.." });
};

export const PUT = async () => {
  return NextResponse.json({ message: "Hello From server.." });
};

export const PATCH = async () => {
  return NextResponse.json({ message: "Hello From server.." });
};
