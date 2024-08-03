import props from "prop-types"
import styles from "./Screen.module.css"


const Screen = ({ value }) => {
  return (
    <div className={styles.screen}>
      {value}
    </div>
  )
}

export default Screen

Screen.propTypes = {
  value: props.number
}