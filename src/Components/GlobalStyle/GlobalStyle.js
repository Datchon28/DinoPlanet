import './GlobalStyle.scss'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function GlobalStyle({ children }) {

    useEffect(() => {
        Aos.init();
        Aos.refresh()
        Aos.refreshHard()
    }, [])

    return children;
}

export default GlobalStyle;