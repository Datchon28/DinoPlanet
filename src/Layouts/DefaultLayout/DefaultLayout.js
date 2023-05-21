import classNames from "classnames/bind";
import style from './DefaultLayout.scss'

import Header from '../components/Header/Header'
import Footer from "../components/Footer/Footer";

const st = classNames.bind(style)

function DefaultLayout({ children }) {
    return (
        <div className={st('main')}>
            <Header />

            <div className={st('container')}>
                {children}
            </div>

            <Footer />
        </div>
    );
}

export default DefaultLayout;