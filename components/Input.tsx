import React, { InputHTMLAttributes, useEffect, useState } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    title: string,
    inputCallback: (text: string) => void;
    delayInSeconds?: number;
}

function Input(props: Props) {
    const {
        delayInSeconds = 1,
        name,
        title,
        inputCallback,
        ...rest
    } = props;

    const [text, setText] = useState('');

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            inputCallback(text);
        }, delayInSeconds * 1000);
        return () => clearTimeout(delayDebounce);
    }, [text]);

    return (
        <div
            className='relative my-4 mt-8 border-b-2 focus-within:border-blue-500 '
        >
            <input
                type='text'
                placeholder='&nbsp;'
                name='title'
                {...rest}
                className='block w-full appearance-none focus:outline-none bg-transparent'
                onChange={({ target: { value } }) => setText(value)}
            />
            <label
                className='absolute top-0 text-lg duration-300 origin-0'
                htmlFor='title'
            >{title}</label>
        </div>
    );
}

export default Input;
