import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";
import { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";
import OrderDelievered from "./OrderDelivered";
import axios from "axios";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const queryString = window.location.search;
    const [showOrder, setShowOrder] = useState(false);
    const [orderItems, setOrderItems] = useState(null);

    const totalAmount = `₹ ${cartCtx.totalAmount.toFixed(2)}`;

    useEffect(()=>{
        let item = '';
        cartCtx.items.forEach((food,index)=>{
            item = `${item}${index === 0 ? '': ','} ${food.name}(${food.amount})`
        })
        setOrderItems(item);
    })   

    function cartItemRemoveHandler(id) {
        cartCtx.removeItem(id);
    }

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    };

    const orderHandler = async() =>{
        const url = new URLSearchParams(queryString);
        const payload = {
            createdon : new Date(),
            ocontact : window.localStorage.getItem('contact'),
            oemail : window.localStorage.getItem('email'),
            oitems : orderItems,
            oname : window.localStorage.getItem('name'),
            oprice : totalAmount,
            restid : 1,
            tableno : url.get('tableno'),
            served : 'false'
        }
        await axios.post('https://fad2-2405-201-3010-7be1-7c45-9302-ae72-e4b9.ngrok-free.app/menu/createOrder',payload);
        cartCtx.clearall();
        setShowOrder(true);
    };
        console.log(orderItems);
        
    const cartItems = (
        <ul className={classes["cart-items"]}>
            {
                cartCtx.items.map((item) => (
                    <CartItem
                    key = {item.id}
                    name = {item.name}
                    amount = {item.amount}
                    price = {item.price}
                    onRemove = {cartItemRemoveHandler.bind(null, item.id)}
                    onAdd = {cartItemAddHandler.bind(null,item)}
                    />
                 ))}
        </ul>
    )

    return (
        <Modal onClose ={props.onClose}> 
            { !showOrder ? (
                <>
            {cartItems}
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onClose}>
                    Close
                </button>
                <button className={classes.button} onClick={orderHandler}>
                    Order
                </button>
            </div>
            </>
            )  : (
                <OrderDelievered onClose = {props.onClose}/>
            )}
        </Modal>
    );
};
export default Cart;