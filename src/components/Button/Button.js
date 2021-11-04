import "./Button.css"

const Button = (props) => {
    const clickHandler = () =>{
        alert("You choose " + props.buttonName);
    }

    return (
        <button className="button" onClick={clickHandler}>{props.buttonName}</button>
    );
}

export default Button;