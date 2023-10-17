import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";
const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsvalid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
  };
  const enteredAmount = amountInputRef.current.value;
  const enteredAmountNumber = +enteredAmount;
  if (
    enteredAmount.trim().length === 0 ||
    enteredAmountNumber < 1 ||
    enteredAmountNumber > 5
  ) {
    setAmountIsvalid(false);
    return;
  }
  return (
    <form className={classes.form}>
      <Input
        ref={amountInputRef}
        input={{
          type: "number",
          id: "amount" + props.id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        label="Amount"
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
