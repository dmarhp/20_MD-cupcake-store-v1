import './Card.scss';

import cartItems from "../../cartItems";
import shopItemList from "../shopItemList";


interface Props {
    title: string;
    price: number;
    imgSrc: string;
}

const getChosenElement = (title: string) =>{
    const findedElement = shopItemList.find(item => item.title = title)
    if (findedElement) {
        cartItems[cartItems.length] = findedElement;
    }
    console.log(cartItems);
}



const Card = ({title, price, imgSrc}: Props) => {

    return (
    <div className="card">
        <div className="card__image-wrapper">
            <img className="card__image" src={imgSrc} alt=""/>
            <span className="store-item-icon" onClick={(event) => {
                console.log(title)
                getChosenElement(title);
            }}>
                <i className="fas fa-shopping-cart" />
              </span>
        </div>
        <div className="card__body">
            <span className="card__body-text">{title}</span>
            <span className="card__body-text">{`$ ${price}`}</span>
        </div>
    </div>
)
};

export default Card;
