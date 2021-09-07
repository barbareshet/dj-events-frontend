import Head from "next/head";
import styles from "../styles/Layout.module.css";
function Layout({title, keywords, description, children}) {

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords}/>
            </Head>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    )
}
Layout.defaultProps = {
    title: 'DJ & Musical events',
    description: 'Find the latest DJ & Musical events',
    keywords: 'DJ Events, Music Events, Party'
}
export default Layout
