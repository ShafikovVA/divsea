import { NextRequest, NextResponse } from 'next/server';
import { INfts } from '@/types/nfts/INfts';

export const GET = async (request: NextRequest) => {
  const { searchParams } = request.nextUrl;

  const response = await fetch(
    `${process.env.BASE_URL}/cards?${searchParams}`,
  ).catch(() => {
    return NextResponse.error();
  });
  const data: INfts = await response.json();
  return NextResponse.json(data);
};
