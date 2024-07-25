import styles from './Button.module.css'
import prop from 'prop-types'

function Button({text, onClick}) {
  return (
    <div>
      <button className={styles.button} onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button

Button.propTypes = {
  text: prop.string,
  onClick: prop.func
}