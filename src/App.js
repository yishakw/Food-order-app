import { Fragment, useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";
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
    <CartProvider>
      {cartIsShown && <Cart hideCart={hideCartHandler} />}
      {/* <ShowCartStatus.Provider value={{ cartIsShown, setCartIsShown }}> */}
      <Header showCart={showCartHandler} />
      {/* </ShowCartStatus.Provider> */}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
