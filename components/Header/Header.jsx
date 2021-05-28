import { useCallback, useState } from "react";
import styles from "./Header.module.scss";
import Sidebar from "./Sidebar.jsx";
import Link from "next/link";

const Header = (props) => {
    const [isActiveSidebar, setSidebar] = useToggle();
    return (
        <>
            <header>
                <nav className={styles.nav}>
                    <div className={styles.nav_brand}>
                    <Link href="/">
                        <a>Asinger</a>
                        <span>
                            <a>| JJ</a>
                        </span>
                    </Link>
                    </div>
                </nav>
            </header>
            <div className={styles.anchor}>
                <a href="#">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-circle-up"
                        className={styles.anchor_up}
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="currentColor"
                            d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm231-113.9L103.5 277.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L256 226.9l101.6 101.6c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L273 142.1c-9.4-9.4-24.6-9.4-34 0z"
                        ></path>
                    </svg>
                </a>
            </div>
        </>
    );
};

const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);
    const toggle = useCallback(() => setState((state) => !state), []);
    return [state, toggle];
};

export default Header;
