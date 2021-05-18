import { useState, useEffect } from "react";
import styles from "./Sidebar.module.scss";

const Sidebar = ({ isActive }) => {
    const [display, setDisplay] = useState(isActive);
    console.log(display, isActive);

    useEffect(() => {
        if (isActive) {
            setDisplay(true);
        } else {
            setDisplay(false);
        }
    }, [isActive]);

    const style = display
        ? { width: "18rem" }
        : null;

    return (
        <>
            <div
                className={styles.sidebar}
                style={style}
                onClick={() => setDisplay(false)}
            >
                <div className={styles.sidebar_brand}>12</div>
                <div className={styles.sidebar_div1}></div>
                <div className={styles.sidebar_div1}></div>
                <div className={styles.sidebar_div1}></div>
                <div className={styles.sidebar_div1}></div>
            </div>
        </>
    );
};

export default Sidebar;
