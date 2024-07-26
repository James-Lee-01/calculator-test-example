import styles from "./Wrapper.module.css";
import props from "prop-types";

const Wrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;

Wrapper.propTypes = {
  children: props.node,
};
