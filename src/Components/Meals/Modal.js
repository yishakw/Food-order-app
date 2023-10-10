import { Fragment } from "react/cjs/react.production.min";
import classes from "./Modal.module.css";
import { createPortal } from "react-dom";
const portalElement = document.getElementById("modal");
const Backdrop = ({ hideCart }) => {
  return <div className={classes.backdrop} onClick={hideCart} />;
};
function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
}
const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<Backdrop hideCart={props.hideCart} />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default Modal;
