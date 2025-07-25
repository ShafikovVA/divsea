'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as React from 'react';
import { getConfig as getWagmiConfig } from '@/wagmi.config';
import { State, WagmiProvider } from 'wagmi';
import ReduxStoreProvider from '@/app/ReduxStoreProvider';
import { ReactNode, useState } from 'react';

interface IProvidersProps {
  children: ReactNode;
  initialState: State | undefined;
}

export function Providers(props: IProvidersProps) {
  const [wagmiConfig] = useState(() => getWagmiConfig());
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={wagmiConfig} initialState={props.initialState}>
      <QueryClientProvider client={queryClient}>
        <ReduxStoreProvider>{props.children}</ReduxStoreProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
