import styles from "./allCats.module.css";
const Loading = () => {
    return (
        <p className={styles.blockSpaceStart}>
          ... Загружаем еще котиков ...
        </p>
    );
};

export default Loading;