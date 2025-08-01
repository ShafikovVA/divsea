import '@/styles/index.scss';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Header from '@/components/ui/Header/Header';
import { ReactNode } from 'react';
import Footer from '@/components/ui/Footer/Footer';
import ModalManager from '@/components/ui/ModalManager/ModalManager';
import { Providers } from '@/app/providers';
import { headers } from 'next/headers';
import { cookieToInitialState } from 'wagmi';
import { getConfig as getWagmiConfig } from '@/wagmi.config';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `${process.env.PRODUCT_NAME}`,
  description:
    'Discover, buy, and sell unique digital assets on DivSea — your next-generation NFT marketplace. Explore exclusive collections, connect with creators, and securely trade NFTs with ease',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const initialState = cookieToInitialState(
    getWagmiConfig(),
    (await headers()).get('cookie'),
  );
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers initialState={initialState}>
          <Header />
          <main>{children}</main>
          <Footer />
          <ModalManager />
        </Providers>
      </body>
    </html>
  );
}
