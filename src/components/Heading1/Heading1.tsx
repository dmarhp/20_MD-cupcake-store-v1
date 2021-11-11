import './Heading1.scss';

interface Props {
    text: string;
    textPink: string;
    textColor: string;
}

const Heading1 = ({ text, textPink, textColor }: Props) => (
    <div className="heading1-wrapper">
        <h1 className="heading1" style={{color: textColor}}>
            {text}
            <span className="heading1-pink">{textPink}</span>
        </h1>
    </div>
);

export default Heading1;
