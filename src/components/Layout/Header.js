import {Fragment} from "react";
import mainHeaderImage from "../../assests/headerBanner.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
const Header = (props) =>{
return(
    <Fragment>
        <header className={classes.header}>
            <h1>IRestaurant</h1>
           <HeaderCartButton onClick = {props.onShowCart} btnName="Your Cart"/>
           
        </header>
        <div className={classes["main-image"]}>
            <img src={mainHeaderImage} alt="A table full of delicious food"/>;
        </div>
    </Fragment>
);
};
export default Header;