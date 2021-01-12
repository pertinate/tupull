import React from "react";
import Head from 'next/head';
import Button from '../components/Button';
import { useAppContext } from "../components/Contexts/AppContext";

export default function Home() {
    const states = useAppContext();
    return (
        <div>
            <Head>
                <title>My NEXT.JS App</title>
            </Head>
            <main
                className='bg-gray-200 h-screen'
            >
                {states.counter}
                <Button
                    onClick={() => states.increaseCounter()}
                >testtttttttttt</Button>
            </main>
        </div>
    );
}
