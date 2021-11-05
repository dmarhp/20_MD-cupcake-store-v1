import "./ShopItems.css";
import Heading1 from "../Heading1/Heading1";
import NavBarShop from "../NavBarShop/NavBarShop";
import shopItems from "../../props";
import Card from "../Card/Card";
const ShopItems = () => {

    return (
        <div className="shopItems-wrapper">
            <div className="shopItems content">
                <Heading1 hTextWhite="Our" hTextPink="Store"/>
                <NavBarShop/>
                <div className="card-wrapper">
                    {
                       shopItems.map((item, index) => {
                            return (
                                <Card
                                    key={index}
                                    imgSrc={item.imgSrc}
                                    title={item.title}
                                    price={item.price}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default ShopItems;