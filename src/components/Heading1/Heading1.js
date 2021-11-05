import "./Heading1.css"

const Heading1 = (props) => {
    return (
        <h1 className="heading1">{props.hTextWhite}<span className="heading1-pink">{props.hTextPink}</span></h1>
    );
}

export default Heading1
