import { INftCard } from '@/types/nfts/INftCard';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const { searchParams } = request.nextUrl;

  const response = await fetch(
    `${process.env.BASE_URL}/cards?${searchParams}`,
  ).catch(() => {
    return NextResponse.error();
  });
  const data: INftCard[] = await response.json();
  return NextResponse.json(data);
};
