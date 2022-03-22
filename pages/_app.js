import { NrgWrapper } from '../context/state'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <NrgWrapper>
      <Component {...pageProps} />
    </NrgWrapper>
  )
}

export default MyApp
