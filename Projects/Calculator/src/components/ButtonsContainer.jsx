import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({ onButtonClicked }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button
          className={styles.button}
          onClick={() => onButtonClicked(buttonName)}
        >
          {buttonName}
        </button>
      ))}

      {/* <button className={styles.button}>1</button>
      <button className={styles.button}>2</button>
      <button className={styles.button}>+</button> */}
    </div>
  );
};
export default ButtonsContainer;
