import "./AboutUs.css"
import Heading1 from "../Heading1/Heading1";
import Button from "../Button/Button";
import shopItems from "../../props";

const AboutUs = () => {

    return (
        <div className="aboutUs content">
            <div className="aboutUs__left">
                <Heading1
                    className="aboutUs__left-title"
                    hTextWhite="About"
                    hTextPink="Us"
                />
                <p className="aboutUs__left-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam voluptas beatae vitae
                    expedita consectetur nesciunt quia deserunt asperiores facere fuga dicta fugiat corrupti et omnis
                    porro at dolorum! Ad!
                </p>
                <div>
                    <Button buttonName="EXPLORE"/>
                </div>
            </div>

            <div className="aboutUs__image-wrapper">

                <img className="aboutUs__image" src={shopItems[0].imgSrc} alt=""/>

            </div>


        </div>

    )

}


export default AboutUs;