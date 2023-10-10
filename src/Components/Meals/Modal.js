import { Fragment } from "react/cjs/react.production.min";
import classes from "./Modal.module.css";
import { createPortal } from "react-dom";
const portalElement = document.getElementById("modal");
function ModalOverlay({ children }) {
  return <div className={classes.modal}>{children}</div>;
}
const Backdrop = ({ props, children }) => {
  return (
    <div className={classes.backdrop}>
      <div>{children}</div>;
    </div>
  );
};
const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
      {createPortal(<Backdrop />, portalElement)}
    </Fragment>
  );
};
export default Modal;
