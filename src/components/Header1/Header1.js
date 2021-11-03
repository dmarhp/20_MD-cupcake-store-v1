import "./Header1.css"

const Header1 = (props) => {
    return (
        <h1 className="header1">{props.hTextWhite}<span className="header1-pink">{props.hTextPink}</span></h1>
    );
}

export default Header1
