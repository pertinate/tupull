import React from 'react';

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode;
}

function Index(props: Props) {
    const {
        children,
        ...rest
    } = props;

    return (
        <button
            {...rest}
        >
            {props.children}
        </button>
    );
}

export default Index;
