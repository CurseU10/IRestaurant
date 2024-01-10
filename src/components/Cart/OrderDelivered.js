import { Fragment } from "react";
import classes from "./Cart.module.css";

const OrderDelievered = (props) => {
return(
    <Fragment>
        <section>
            <h2>Thank you so much for your order.</h2>
            <p>We really appreciate this. </p>
        </section>
        <div className={classes.actions} >
            <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
            </button>
        </div>
    </Fragment>
);
};
export default OrderDelievered;