import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function useWalletUser(address) {
  const { data, error } = useSWR(
    `http://jobcoin.gemini.com/limping-shaft/api/addresses/${address}`,
    fetcher
  )

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  }
}
