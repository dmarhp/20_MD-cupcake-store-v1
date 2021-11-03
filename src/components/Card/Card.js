import "./Card.css"

const Card = (props) => {
    return (
        <div className="card">
            <div className="card__image-wrapper">
                <img className="card__image" src={props.imgSrc} alt=""/>
            </div>
            <div className="card__body">
                <span className="card__body-text">{props.title}</span>
                <span className="card__body-text">{`$ ${props.price}`}</span>
            </div>
        </div>
    );
}

export default Card;