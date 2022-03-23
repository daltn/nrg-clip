export async function postTransaction(transactionData) {
  try {
    const res = await fetch(
      'https://jobcoin.gemini.com/limping-shaft/api/transactions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transactionData),
      }
    )
    return res.json()
  } catch (error) {
    console.log(error)
    return error
  }
}
