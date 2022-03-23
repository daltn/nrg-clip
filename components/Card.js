import PropTypes from 'prop-types'
import styles from '../styles/Card.module.scss'

function Card({ text, children }) {
  return (
    <section className={styles.wrapper}>
      <div>
        <p className={styles.text}>{text}</p>
      </div>
      <div>{children}</div>
    </section>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
}

Card.defaultProps = {
  text: 'Welcome',
}

export default Card
