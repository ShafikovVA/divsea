import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({
    items: ['sadasdasd', 'dasdasd', 'dasdasdasd'],
  });
}
