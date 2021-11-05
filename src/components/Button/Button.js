import "./Button.css"

let filterType = "";

const Button = (props) => {
    const clickHandler = () =>{
        filterType = props.buttonName;
        alert(filterType);
    }

    return (
        <button className="button" onClick={clickHandler}>{props.buttonName}</button>
    );
}

export default Button;
export {filterType}