import "./Header.scss"
import CartBox from "../CartBox/CartBox";
import NavBarHeader from "../NavBarHeader/NavBarHeader";


const Header = () =>{

    return(
        <div className="header">

        <div className="header-brand">
        <img src="https://js-beginners.github.io/filter-project/img/logo.svg" alt=""/>
        </div>

        <NavBarHeader/>

        <CartBox/>
        </div>

)

}


export default Header;
