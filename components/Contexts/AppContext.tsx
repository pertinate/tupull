import React, { createContext, useContext, useEffect, useState } from 'react';

interface Props {
    children: React.ReactNode;
}

export const appContext = createContext({
    counter: 0,
    increaseCounter: () => { }
});

function AppContext(props: Props) {
    let state = sharedState();

    return (
        <appContext.Provider value={state} >
            {props.children}
        </appContext.Provider>
    );
}

const sharedState = () => {
    const [counter, setCounter] = useState(1);

    return {
        counter,
        increaseCounter: () => setCounter(counter + 1)
    };
};

export const useAppContext = () => useContext(appContext);

export default AppContext;
