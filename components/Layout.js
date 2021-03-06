import Head from "next/head";
import {useRouter} from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import Showcase from "@/components/Showcase";
import styles from "@/styles/Layout.module.css";
function Layout({title, keywords, description, children}) {
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords}/>
            </Head>
            <Header/>
            { router.pathname == '/' && <Showcase /> }
            <div className={styles.container}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}
Layout.defaultProps = {
    title: 'DJ & Musical events',
    description: 'Find the latest DJ & Musical events',
    keywords: 'DJ Events, Music Events, Party'
}
export default Layout
