import classes from "./Cart.module.css";
import Modal from "../Meals/Modal";
const Cart = ({ hideCart }) => {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "sushi", amount: "2", price: "12.99" }].map(
        (item) => (
          <li key={item.id}>{item.name}</li>
        )
      )}
    </ul>
  );
  return (
    <Modal hideCart={hideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={hideCart}>
          Close
        </button>
        <button className={classes.button} onClick={hideCart}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
