import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ showCart }) => {
  // const { cartIsShown, setCartIsShown } = useContext();
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton showCart={showCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="table full of food" />
      </div>
    </Fragment>
  );
};
export default Header;
