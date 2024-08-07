import { Outlet } from 'react-router-dom'
// import Footer from './Footer'
import Header from './Header'
import { useEffect, useState } from 'react'

const Main = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const timeId = setTimeout(() => {
            document.querySelector("calcite-shell").hidden = false;
            document.querySelector("calcite-loader").hidden = true;
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeId);

    }, []);

    return !loading && (
        <>
            <header id="header-content">
                <Header />
            </header>
            <main id="main-content">
                <Outlet />
            </main>
            {/* <footer id="footer-content">
                <Footer />
            </footer> */}
        </>
    )
}

export default Main