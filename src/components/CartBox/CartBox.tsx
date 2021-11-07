import "./CartBox.scss"
import CartButton from "../CartButton/CartButton";

const CartBox = () => {

    function clickHandler() {
        alert("8 800 555 3535 \n ПРОЩЕ ПОЗВОНИТЬ ЧЕМ У КОГО-ТО ЗАНИМАТЬ")
    }

    return (
        <div>
            <div className="cartBox__item">
                <i className="fas fa-phone"></i>
                <p onClick={clickHandler}>+8 800 555 3535</p>
            </div>

            <div className="cartBox__item">
                <CartButton cartCount={6} cartSum={10}/>

            </div>

        </div>
    )

}

export default CartBox;
