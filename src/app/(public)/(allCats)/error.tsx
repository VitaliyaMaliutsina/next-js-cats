"use client"
import styles from "./allCats.module.css";
const Error = () => {
    return (
        <p className={styles.blockSpace}>
            Произошла ошибка при загрузке котиков :(
        </p>
    );
};

export default Error;