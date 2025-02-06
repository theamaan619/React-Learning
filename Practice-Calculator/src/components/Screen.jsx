import styles from "./Screen.module.css";
const Screen = ({ displayMessage }) => {
  return (
    <>
      <input
        type="text"
        className={styles.screenConatiner}
        value={displayMessage}
        readOnly
      />
    </>
  );
};
export default Screen;
