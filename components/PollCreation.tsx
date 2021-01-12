import React, { useState } from 'react';
import PollCreationItem from './PollCreationItem';

interface Props { }

function PollCreation(props: Props) {
    const { } = props;
    const [pollItems, setPollItems] = useState<({ title: string; })[]>([]);

    return (
        <form
            className='flex flex-col'
            onSubmit={(e) => e.preventDefault()}
        >
            <div>
                <label>Poll Title</label>
                <input />
            </div>
            {
                pollItems.map((item, index) => {
                    return (
                        <PollCreationItem
                            title={item.title}
                            key={`poll-creation-item-${index}`}
                        />
                    );
                })
            }
            <div>
                <button
                    onClick={() => {
                        setPollItems([...pollItems, { title: '' }]);
                    }}
                >Add Poll Item</button>
            </div>
        </form>
    );
}

export default PollCreation;
