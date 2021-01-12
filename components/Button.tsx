import React from 'react';

interface Props {
    children?: React.ReactNode;
}

function Button(props: Props) {
    const { } = props;

    return (
        <button
            className='m-4 px-4 font-light cursor-pointer text-lg text-decoration-none uppercase hover:text-decoration-none bg-black border-black border-4 hover:border-gray-600 hover:bg-white text-white hover:text-gray-500 transition-all duration-300 ease-in-out'
        >
            {props.children}
        </button>
    );
}

export default Button;
