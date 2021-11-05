import "./NavBarShop.css"
import shopItems from "../../props";
import Button from "../Button/Button";

const NavBarShop = () => {

    const types = [];
    shopItems.forEach(item => {
        if (!types.includes(item.type)) {
            types.push(item.type);
        }
    });

    return (
        <div className="navBarShop-wrapper">
            <Button buttonName="ALL"/>
            {
                types.map((item) => {
                    return (
                        <Button key={item} buttonName={item}/>
                    );
                })
            }
        </div>
    );
}


export default NavBarShop;