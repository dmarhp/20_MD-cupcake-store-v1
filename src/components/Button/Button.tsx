import "./Button.scss"

interface Props {
    buttonName: string;
    clickHandler: ()=> void ;

}
const Button = ({ buttonName, clickHandler }: Props) => (
    <button className="button" onClick={clickHandler}>
        {buttonName}
    </button>
);

export default Button
