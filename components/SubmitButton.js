import PropTypes from 'prop-types'
import styles from '../styles/Button.module.scss'

function SubmitButton({ handleClick, text, buttonStyle }) {
  const buttonClass = buttonStyle === 'send' ? styles.send : styles.default

  return (
    <button type="submit" className={buttonClass} onClick={handleClick}>
      {text}
    </button>
  )
}

SubmitButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string,
}

SubmitButton.defaultProps = {
  buttonStyle: 'default',
  text: 'Submit',
}

export default SubmitButton
