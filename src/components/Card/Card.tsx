"use client"

import styles from "./card.module.css";
import Image from "next/image";
import {HeartIcon} from "@/components/HeartIcon/HeartIcon";
import {clsx} from "clsx";

type Props = {
    url: string;
    onClick?: () => void;
};
export const Card = (props: Props) => {
    const {url, onClick} = props

    const isActive = false

    return (
        <div className={styles.card}>
            <Image
                src={url}
                alt="Изображение милокого котика"
                className={styles.cardImg}
                width={225}
                height={225}
                loading={"lazy"}
                unoptimized={url.endsWith(".gif")}
            />
            <button className={clsx(styles.likeButton, isActive ? styles.active: "")} onClick={onClick} aria-label="Добавить в избранное">
                <HeartIcon className={clsx(styles.icon, isActive ? styles.active : "")} />
            </button>
        </div>
    );

};