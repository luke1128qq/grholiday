import "@/styles/globals.css";
import NavbarBS from "../../components/layout/navbarBS";
import Footer from "../../components/layout/footer";

export default function App({ Component, pageProps }) {
    return (
        <>
            <NavbarBS />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}
