import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export function useWalletUser(address) {
  const { data, error } = useSWR(
    `https://jobcoin.gemini.com/limping-shaft/api/addresses/${address}`,
    fetcher,
    { refreshInterval: 1000 }
  )

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}
