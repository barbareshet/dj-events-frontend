/**
 * based on this article: @link https://devrecipes.net/modal-component-with-next-js/
 */
import { useState, useEffect } from "react";
import ReactDom from 'react-dom';
import { FaTimes } from "react-icons/fa";
import styles from "@/styles/Modal.module.css"
function Modal({show, onClose, children, title}) {

    const [isBrowser, setIsBrowser] = useState(false);

    useEffect( () => setIsBrowser(true))
    const handleCloseModal = (e) => {
        e.preventDefault();
        onClose();
    }
    const modalContent = show ? (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <a href="#" onClick={handleCloseModal} className={styles.close}>
                        <FaTimes/>
                    </a>
                    {title && <div>{title}</div>}
                </div>
                <div className={styles.body}>
                    {children}
                </div>
            </div>
        </div>
    ) : null

    if ( isBrowser ){
        return ReactDom.createPortal(modalContent, document.getElementById("modal-root"))
    } else {
        return null
    }
}

export default Modal