import "./ShopItems.css";
import Header1 from "../Header1/Header1";
import NavBar from "../NavBar/NavBar";
import shopItems from "../../props";
import Card from "../Card/Card";

const ShopItems = () => {
    return (
        <div className="shopItems-wrapper">
            <div className="shopItems content">
                <Header1 hTextWhite="Our" hTextPink="Store"/>
                <NavBar/>
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