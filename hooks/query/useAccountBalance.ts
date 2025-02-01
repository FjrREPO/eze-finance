import { normalize } from '@/lib/bignumber'
import { useAccount, useBalance } from 'wagmi'

export const useAccountBalance = ({ token= "", decimal = 18 }: { token: string, decimal: number }) => {
  const { address } = useAccount()

  const result = useBalance({
    address: address,
    token: token as HexAddress,
  })

  const bNormal = result?.data?.value
  const bNormalized = result?.data?.value ? normalize(result.data.value.toString(), decimal) : undefined

  return {
    bNormal,
    bNormalized,
  }
}