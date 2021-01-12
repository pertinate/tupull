import React, { useState } from "react";
import Head from 'next/head';
import { useAppContext } from "../components/Contexts/AppContext";
import Button from "../components/Button";
import PollCreation from "../components/PollCreation";

export default function Home() {
    const states = useAppContext();
    return (
        <div>
            <Head>
                <title>Tupoll</title>
            </Head>
            <main
                className='bg-gray-900 h-screen flex flex-col justify-center items-center'
            >
                <div
                    className='w-96 m-4 bg-gray-700 shadow-md flex flex-col justify-center'
                >
                    <PollCreation />
                    <Button>
                        Create Poll
                    </Button>
                </div>
            </main>
        </div>
    );
}
