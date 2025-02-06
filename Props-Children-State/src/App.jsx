import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
  {
    /* let foodItems = [
    "Daal",
    "Green Vegetables",
    "Roti",
    "Salad",
    "Milk",
    "Ghee" // foodItems ke array mai se map karke ek ek item utha ke item mai daalega aur phir usse hum list mai daaldenge aur phir list print hoga 
    // Agar har item ko alag key dedenge toh react sirf new key ko hi update karna padega instead of pure items ko update karne se, Aur react ka bhi yahi motto hai  
    
    */
  }

  /* Parameter mai hum initial value pass kar sakte hai */

  // useState 2 cheez return karega ek hoga Current value aur dusra hoga Function jiko hum use karenge state ko set karne ke liye

  {
    /*  First Method of Writing useState 
  //let textStateArr = useState("Food Item Entered by User")
  //let textToShow = textStateArr[0];
  //let setTextState = textStateArr[1];
    */
  }
  // let [textToShow, setTextState] = useState("Food Item Entered by User");
  // console.log(`Current Value of TextState: ${textToShow}`);

  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem]; // {...} <= this is spread operator current aaray mai jo value hai unko newitems mai add kardega
      setFoodItems(newItems);
      console.log(`Food value Entered is ${newFoodItem}`);
    }

    // setTextState(event.target.value);

    // ismai har baar App() call hoga toh uska state nahi badlega kyke functional componemt stateless hota hai toh hume state dena padega. Isliye useState use kiya hu aur function mai value daal diya hu taaki uski value set hojaaae

    /* Event mai batega ki kya changes hua hai uske saath aur bhi detail bataega par hume value dhekni thi isliye event.target.value likha hai taaki hume value dhikhe */
  };
  return (
    <>
      <Container>
        {/* Container ek Child Prop Hai matlab ek component ke andar bhi kuch likh sakte hai aur usko farak bhi nahi padega woh bas uske andar jo hai woh dhikha dega */}
        <h1 className="food-heading">Healthy Food</h1>
        {/* Yaha Par Humne foodItems Array ko As an Attribute Pass kiya hai aur Jisko bhi pass kiya hai usne as a props object receive kiya hai */}
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      {/* <Container>
        <p>
          Above are the list of healthy foods that are good for your Health and
          well being
        </p>
      </Container> */}
    </>
  );
}

export default App;
