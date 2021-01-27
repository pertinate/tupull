import React from 'react';
import { useRouter } from 'next/router';

interface Props {
    test: string;
}

function Poll(props: Props) {
    const {
        test
    } = props;

    return (
        <div>
            {test}
        </div>
    );
}

export default Poll;


export async function getServerSideProps({ query }) {
    console.log(query);
    return {
        props: {
            test: 'hello'
        }
    };
}
