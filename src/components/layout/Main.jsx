import { Outlet } from 'react-router-dom'
// import Footer from './Footer'
import Header from './Header'
import { useEffect, useState } from 'react'

const Main = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const timeId = setTimeout(() => {
            setLoading(false);
        }, 2000);

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