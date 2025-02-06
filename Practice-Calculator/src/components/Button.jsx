import styles from "./Button.module.css";

const Button = ({ buttonNames, onButtonClick }) => {
  return (
    <>
      {buttonNames.map((buttonName) => (
        <button
          key={buttonName}
          className={styles.button}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </>
  );
};
export default Button;
