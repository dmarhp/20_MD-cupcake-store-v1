import "./Start.css";
import NavBarHeader from "../NavBarHeader/NavBarHeader";
import Header from "../Header/Header";
import Heading1 from "../../Heading1/Heading1";
import Button from "../../Button/Button";

const Start = () => {
    return (
        <div className="start">
            <Header/>
            <div className="start-content">
                <Heading1
                    hTextWhite="Welcome To"
                    hTextPink="Grandma's"
                />
                <div className="start-content-buttonWrapper">
                    <Button buttonName="EXPLORE"/>
                </div>
            </div>

        </div>
    )

}

export default Start