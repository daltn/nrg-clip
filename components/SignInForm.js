import { useState } from 'react'
import styles from '../styles/SignInForm.module.scss'
import SubmitButton from './SubmitButton'
import { useNrgContext } from '../context/state'
import { useRouter } from 'next/router'
import Card from './Card'

function SignInForm() {
  const [address, setAddress] = useState('')
  const { setUser } = useNrgContext()
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser(address)
    router.push('/wallet')
  }

  return (
    <Card text="Welcome! Sign In With Your Jobcoin Address">
      <form className={styles.signInForm}>
        <label className={styles.addressLabel}>
          Jobcoin Address
          <input
            className={styles.addressInput}
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <SubmitButton handleClick={handleSubmit} text="Sign In" />
      </form>
    </Card>
  )
}

export default SignInForm
