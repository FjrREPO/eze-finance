import type { Token } from '@coinbase/onchainkit/token';

export const mockUSDC: Token = {
  name: 'USDC',
  address: '0xfa9e6b38862bae0e4ce7df6adaece16985272d7a',
  symbol: 'USDC',
  decimals: 6,
  image: 'https://wallet-api-production.s3.amazonaws.com/uploads/tokens/eth_288.png',
  chainId: 84532,
}

export const mockETH: Token = {
  name: 'ETH',
  address: '',
  symbol: 'ETH',
  decimals: 18,
  image: 'https://wallet-api-production.s3.amazonaws.com/uploads/tokens/eth_288.png',
  chainId: 84532,
}