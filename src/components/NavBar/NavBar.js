import "./NavBar.css"
import shopItems from "../../props";
import Button from "../Button/Button";

const NavBar = () => {

    const types = [];
    shopItems.forEach(item => {
        if (!types.includes(item.type)) {
            types.push(item.type);
        }
    });

    return (
        <div className="navBar-wrapper">
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


export default NavBar;