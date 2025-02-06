import { useState } from "react";
import styles from "./App.module.css";
import ButtonsConatiner from "./components/ButtonsContainer";
import Container from "./components/Container";
import Screen from "./components/Screen";

function App() {
  const [calval, setCalval] = useState("");

  const onButtonClick = (buttontext) => {
    if (buttontext === "=") {
      const total = eval(calval);
      setCalval(total.toString());
    } else if (buttontext === "C") {
      setCalval("");
    } else {
      const newScreenVal = calval + buttontext;
      setCalval(newScreenVal);
    }
    console.log(buttontext);
  };

  return (
    <div className={styles.appContainer}>
      <Container>
        <Screen displayMessage={calval}></Screen>
        <ButtonsConatiner onButtonClick={onButtonClick}></ButtonsConatiner>
      </Container>
    </div>
  );
}

export default App;
