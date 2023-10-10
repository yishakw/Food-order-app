import { Fragment, useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  // const ShowCartStatus = createContext();
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart hideCart={hideCartHandler} />}
      {/* <ShowCartStatus.Provider value={{ cartIsShown, setCartIsShown }}> */}
      <Header showCart={showCartHandler} />
      {/* </ShowCartStatus.Provider> */}
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
