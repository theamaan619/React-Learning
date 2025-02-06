import { useState } from "react";
import Item from "./Item";
/* Yaha par props ko argument mai pass karne ke bajae Usko destructure kar liya hai aur items mai leliya hai */
const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          /* items mai se map individal elements nikal kar foodItem mai pass kar raha hai  */
          <Item
            key={item}
            foodItem={item}
            bought={activeItems.includes(item)}
            handleBuyButtonClicked={(event) => onBuyButton(item, event)}
          ></Item>
        ))}
      </ul>
    </>
  );
};
export default FoodItems;
