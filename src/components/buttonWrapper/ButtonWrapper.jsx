import props from "prop-types"
import styles from "./ButtonWrapper.module.css"

const ButtonWrapper = ({ children }) => {
  return <div className={styles.buttonWrapper}>{children}</div>
}

export default ButtonWrapper

ButtonWrapper.propTypes = {
  children: props.node
}