import React, { useState } from 'react';
import Input from './Input';
import PollCreationItem from './PollCreationItem';

interface Props { }

function PollCreation(props: Props) {
    const { } = props;
    const [pollItems, setPollItems] = useState<({ title: string; })[]>([]);
    const [pollTitle, setPollTitle] = useState('');

    return (
        <form
            className='flex flex-col items-center'
            onSubmit={(e) => e.preventDefault()}
        >
            <Input
                name='poll-title'
                title='Poll Title'
                inputCallback={(text) => setPollTitle(text)}
            />
            {
                pollItems.map((item, index) => {
                    return (
                        <PollCreationItem
                            title={item.title}
                            key={`poll-creation-item-${index}`}
                            deleteOption={() => {
                                let update = [...pollItems];
                                update.splice(index, 1);
                                setPollItems(update);
                            }}
                            pollOptionText={(text) => {
                                console.log(index);
                                let update = [...pollItems];
                                update[index].title = text;
                                setPollItems(update);
                            }}
                        />
                    );
                })
            }
            <div>
                <button
                    onClick={() => {
                        console.log(pollItems);
                        let update = [...pollItems, { title: '' }];
                        console.log(update);
                        setPollItems(update);
                    }}
                >Add Poll Item</button>
            </div>
        </form>
    );
}

export default PollCreation;
