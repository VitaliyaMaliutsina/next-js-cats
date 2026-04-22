import styles from "./card.module.css";
import Image from "next/image";
import { HeartIcon } from "@/components/HeartIcon/HeartIcon";
import { clsx } from "clsx";
import { useState } from "react";

type Props = {
  url: string;
  onClick?: () => void;
  isActive: boolean;
};
export const Card = (props: Props) => {
  const { url, onClick, isActive = false } = props;
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={styles.card}>
      <Image
        src={url}
        alt="Изображение милокого котика"
        className={clsx(styles.cardImg, loaded && styles.loaded)}
        width={225}
        height={225}
        loading={"lazy"}
        unoptimized={url.endsWith(".gif")}
        onLoad={() => setLoaded(true)}
      />
      <button
        className={clsx(styles.likeButton, isActive ? styles.active : "")}
        onClick={onClick}
        aria-label="Добавить в избранное"
      >
        <HeartIcon className={clsx(styles.icon, isActive ? styles.active : "")} />
      </button>
    </div>
  );
};
