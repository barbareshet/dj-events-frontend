import { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import { FaUser} from "react-icons/fa";
import Link from "next/link"
import Layout from "@/components/Layout";
import AuthContext from "@/context/AuthContext";
import styles from "@/styles/AuthForm.module.css"
function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        login({email,password})
    }
    return (
        <Layout title="Account login">

            <div className={styles.auth}>
                <h1><FaUser/> Login</h1>
                <ToastContainer />
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email"
                               id="email"
                               value={email}
                               onChange={ (e) => setEmail(e.target.value )}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password"
                               id="password"
                               value={password}
                               onChange={ (e) => setPassword(e.target.value )}
                        />
                    </div>
                    <input type="submit" value="Login" className="btn"/>
                </form>
                <div>
                    <p>Don't have an account yet?</p>
                    <p>Please register
                        <Link href="/account/register">
                            <a> here</a>
                        </Link>
                    </p>
                </div>
            </div>

        </Layout>
    )
}

export default Login