import { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import { FaUser} from "react-icons/fa";
import Link from "next/link"
import Layout from "@/components/Layout";
import AuthContext from "@/context/AuthContext";
import styles from "@/styles/AuthForm.module.css"


function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const { register, error } = useContext(AuthContext);

    useEffect( () => error && toast.error(error));
    const handleSubmit = (e) => {
        e.preventDefault();

        if ( password !== passwordConfirm ){
            toast.error('Passwords do not match!')

            return
        }

        register({username, email, password })
    }
    return (
        <Layout title="Register new account">
            <div className={styles.auth}>
                <h1><FaUser/> Register</h1>
                <ToastContainer />
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text"
                               id="username"
                               value={username}
                               onChange={ (e) => setUsername(e.target.value )}
                        />
                    </div>
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
                    <div>
                        <label htmlFor="passwordConfirm">Confirm Password</label>
                        <input type="password"
                               id="passwordConfirm"
                               value={passwordConfirm}
                               onChange={ (e) => setPasswordConfirm(e.target.value )}
                        />
                    </div>
                    <input type="submit" value="Register" className="btn"/>
                </form>
                <p>Already have an account?</p>
                <p>Please login
                    <Link href="/account/login">
                        <a> here</a>
                    </Link>
                </p>
            </div>
        </Layout>
    )
}

export default Register