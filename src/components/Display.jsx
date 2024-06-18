import styles from "../../src/App.module.css";

const Display = (props) => {
  return (
    <input
      type="text"
      value={props.dispTxt}
      readOnly
      className={styles.display}
    />
  );
};

export default Display;
