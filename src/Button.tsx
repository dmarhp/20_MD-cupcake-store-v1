import React from 'react';

type Props = {
    title: string;
    onClick: ()=>void;
};

const Button: React.FC<Props> = ({ title, onClick }) => (
    <button onClick={onClick}>{title}</button>
);

export default Button;
