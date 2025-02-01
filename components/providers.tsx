"use client";

import type { ThemeProviderProps } from "next-themes";

import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { WagmiProvider, createConfig, http } from 'wagmi';
import { base, baseSepolia } from 'wagmi/chains';
import { coinbaseWallet } from 'wagmi/connectors';

const wagmiConfig = createConfig({
  chains: [base, baseSepolia],
  connectors: [
    coinbaseWallet({
      appName: 'onchainkit',
    }),
  ],
  ssr: false,
  transports: {
    [base.id]: http("https://base-mainnet.g.alchemy.com/v2/vwDTCZX0XZnU6flxj8YzYZuMaOKI3EX9"),
    [baseSepolia.id]: http("https://base-sepolia.g.alchemy.com/v2/vwDTCZX0XZnU6flxj8YzYZuMaOKI3EX9"),
  },
});

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

const queryClient = new QueryClient();

export default function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig}>
          <OnchainKitProvider
            apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
            chain={base}
            config={{
              appearance: {
                name: 'EZE',
                logo: '/logo.png',
                mode: 'light',
                theme: 'base',
              },
              wallet: {
                display: 'modal',
                termsUrl: 'https://...',
                privacyUrl: 'https://...',
              },
            }}
          >
            <NextThemesProvider {...themeProps}>
              {children}
            </NextThemesProvider>
          </OnchainKitProvider>
        </WagmiProvider>
      </QueryClientProvider>
    </HeroUIProvider>
  );
}
