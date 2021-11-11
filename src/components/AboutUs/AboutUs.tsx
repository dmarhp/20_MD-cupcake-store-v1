import './AboutUs.scss';
import Heading1 from '../Heading1/Heading1';
import Button from '../Button/Button';
import shopItemList from '../shopItemList';

const aboutUsImage = shopItemList[0].imgSrc;

const AboutUs = () => (
    <div className="aboutUs">
    <div className="aboutUs-wrapper container">
    <div className="aboutUs__left">
    <Heading1
        textColor={"black"}
        text="About"
textPink="Us"
/>
<p className="aboutUs__left-text">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam voluptas beatae vitae
expedita consectetur nesciunt quia deserunt asperiores facere fuga dicta fugiat corrupti et omnis
porro at dolorum! Ad!
</p>
<div>
<Button buttonName="EXPLORE" clickHandler={() =>null} />
</div>
</div>

<div className="aboutUs__image-wrapper">

<img className="aboutUs__image" src={aboutUsImage} alt="" />

    </div>

    </div>
    </div>
);

export default AboutUs;
