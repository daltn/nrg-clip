import { useState, useEffect } from 'react'
import styles from '../styles/SendTransaction.module.scss'
import SubmitButton from './SubmitButton'
import { useNrgContext } from '../context/state'
import Card from './Card'
import { postTransaction } from '../lib/postTransaction'

function SendTransaction() {
  const { user: fromAddress } = useNrgContext()
  const [toAddress, setToAddress] = useState('')
  const [amount, setAmount] = useState('')
  const [transactionMessage, setTransactionMessage] = useState('')

  useEffect(() => {
    let timer
    if (transactionMessage) {
      timer = setTimeout(() => setTransactionMessage(''), 3000)
    }
    return () => clearTimeout(timer)
  }, [transactionMessage])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const submitTransaction = await postTransaction({
      fromAddress,
      toAddress,
      amount,
    })

    if (submitTransaction.status === 'OK') {
      setTransactionMessage('transaction complete :)')
    } else {
      setTransactionMessage('something went wrong :(')
    }
    setToAddress('')
    setAmount('')
  }

  return (
    <Card text="Send Jobcoin">
      <form className={styles.transactionForm}>
        <label className={styles.transactionLabel}>
          Destination Address
          <input
            className={styles.transactionInput}
            type="text"
            value={toAddress}
            onChange={(e) => setToAddress(e.target.value)}
          />
        </label>
        <label className={styles.transactionLabel}>
          Amount to Send
          <input
            className={styles.transactionInput}
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <SubmitButton
          handleClick={handleSubmit}
          text="Send Jobcoins"
          buttonStyle="send"
        />
        {transactionMessage && <p>{transactionMessage}</p>}
      </form>
    </Card>
  )
}

export default SendTransaction
