import "./Start.scss";
import Header from "../Header/Header";
import Heading1 from "../Heading1/Heading1";
import Button from "../Button/Button";


const Start = () => {
    return (
        <div className="start">
            <Header/>
            <div className="start-content">
                <Heading1
                    textColor={"white"}
                    text="Welcome To"
                    textPink="Grandma's"
                />
                <div className="start-content-buttonWrapper">
                    <Button buttonName="EXPLORE" clickHandler={() => null}/>
                </div>
            </div>

        </div>
    )

}

export default Start
