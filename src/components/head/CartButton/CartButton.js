import "./CartButton.css"


const CartButton = (props) =>{
    return(
        <button className="cartButton">
            <i className="fas fa-shopping-cart"></i>
            <span>{props.cartCount} items - ${props.cartSum}</span>

        </button>
    )
}

export default CartButton;