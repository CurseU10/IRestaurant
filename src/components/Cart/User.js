import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const User = ()=>{
    const [name,setName] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [contact,setContact] = React.useState('');

    const handleSubmit=(e) => {
        e.preventDefault();
        console.log(name,email,contact);
       const storage = window.localStorage;

        if(storage !== undefined){
        storage.setItem('name', name);
        storage.setItem('email', email);
        storage.setItem('contact', contact);
        storage.setItem('isSet',true);
                 }
         window.location.reload();
    }

return(
<Modal>
    <form onSubmit={handleSubmit}>
    <label className={classes.userLabel}> Name </label><br/>
    <input type="text" className={classes.userForm} required value={name} onChange={(e) => {setName(e.target.value)}}/><br/><br/>
    <label className={classes.userLabel}> Email </label><br/>
    <input type="text" className={classes.userForm} required value={email} onChange={(e) => {setEmail(e.target.value)}}/><br/><br/>
    <label className={classes.userLabel}> Contact </label><br/>
    <input type="text" className={classes.userForm} required value={contact} onChange={(e) => {setContact(e.target.value)}}/><br/>
    <div className={classes.actions + " " +classes.userLeft} style={{marginTop:'24px', textAlign:'left !important' }}>
    <button className={classes.button} type="submit">
                    Save
                </button>
     </div>
     </form>
</Modal>
);
}
export default User;