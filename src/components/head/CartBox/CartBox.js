import "./CartBox.css"
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
                <CartButton
                    imgClass="cartBox__img"

                />

            </div>

        </div>
    )

}

export default CartBox;