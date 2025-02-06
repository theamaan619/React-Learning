import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButtonClicked }) => {
  // let foodItem = props;
  // Upar Array Destructing Kiya Gaya Hai

  return (
    <li
      className={`${styles["my-item"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["my-span"]}>{foodItem}</span>
      <button
        className={` ${styles.button} btn btn-info`}
        onClick={handleBuyButtonClicked}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
