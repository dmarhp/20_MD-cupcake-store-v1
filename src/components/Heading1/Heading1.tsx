import './Heading1.scss';

interface Props {
    text: string;
    textPink: string;
}

const Heading1 = ({ text, textPink }: Props) => (
    <div className="heading1-wrapper">
        <h1 className="heading1">
            {text}
            <span className="heading1-pink">{textPink}</span>
        </h1>
    </div>
);

export default Heading1;
