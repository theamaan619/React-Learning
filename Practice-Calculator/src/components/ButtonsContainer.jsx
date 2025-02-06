import Button from "./Button";
import styles from "./ButtonsContainer.module.css";

const ButtonsConatiner = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "+-",
    "%",
    "/",
    7,
    8,
    9,
    "X",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "=",
    "clear",
  ];

  return (
    <div className={styles.buttonsConatiner}>
      <Button buttonNames={buttonNames} onButtonClick={onButtonClick}></Button>
    </div>
  );
};
export default ButtonsConatiner;
