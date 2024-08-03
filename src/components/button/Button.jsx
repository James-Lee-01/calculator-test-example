import styles from './Button.module.css'
import prop from 'prop-types'
import clsx from 'clsx'

function Button({ className, value, onClick}) {
  return (
      <button className={clsx(styles.button, className)} onClick={onClick}>
        {value}
      </button>
  )
}

export default Button

Button.propTypes = {
  className: prop.string,
  value: prop.oneOfType([prop.string, prop.number]).isRequired,
  onClick: prop.func.isRequired
}