import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
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
