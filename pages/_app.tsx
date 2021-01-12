import { AppProps } from 'next/app';
import AppContext from '../components/Contexts/AppContext';
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
    return (
        <AppContext>
            <Component {...pageProps} />
        </AppContext>
    );
}

export default App;
