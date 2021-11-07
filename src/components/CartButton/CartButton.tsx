import "./CartButton.scss";
import cartItems from "../../cartItems";

const CartButton = (props: { cartCount: number; cartSum: number }) =>{

    return(
        <button className="cartButton">
            <i className="fas fa-shopping-cart"></i>
            <span>{props.cartCount} items - ${props.cartSum}</span>

        </button>
    )
}

export default CartButton;
