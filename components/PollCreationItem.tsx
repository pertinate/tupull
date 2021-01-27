import React, { useEffect, useState } from 'react';
import Button from './Button';
import Input from './Input';

interface Props {
    title: string;
    deleteOption: () => void;
    pollOptionText: (text: string) => void;
    delayInSeconds?: number;
}

function PollCreationItem(props: Props) {
    const {
        deleteOption = () => { },
        pollOptionText = () => { },
        delayInSeconds = 1
    } = props;
    const [pollItem, setPollItem] = useState('');

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            pollOptionText(pollItem);
        }, delayInSeconds * 1000);
        return () => clearTimeout(delayDebounce);
    }, [pollItem]);

    useEffect(() => {
        console.log('test');
    }, []);

    return (
        <div
            className='flex flex-row items-center'
        >
            <Input
                name='poll-option'
                title='Poll Option'
                inputCallback={(text) => setPollItem(text)}
                style={{ maxWidth: '200px' }}
            />
            <Button
                onClick={() => deleteOption()}
            >
                -
            </Button>
        </div>
    );
}

export default PollCreationItem;
