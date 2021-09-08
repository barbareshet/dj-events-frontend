import { FaExclamationTriangle } from 'react-icons/fa'
import Layout from "../components/Layout";
import Link from "next/link";
import styles from "../styles/404.module.css";
function NotFound() {

    return (
        <Layout title="Page Not Found">
            <div className={styles.error}>
                <h1><FaExclamationTriangle/>404</h1>
                <h4>No Events Here...</h4>
                <Link href="/">
                    <a>Back to home page</a>
                </Link>
            </div>
        </Layout>
    )
}

export default NotFound