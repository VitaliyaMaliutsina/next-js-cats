"use client"

import styles from "./card.module.css";
import Image from "next/image";
import {HeartIcon} from "@/components/HeartIcon/HeartIcon";
import {clsx} from "clsx";
import {addFavoriteCat} from "@/services/api";

type Props = {
    url: string;
    id: string;
};
export const Card = (props: Props) => {
    const {url, id} = props

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
            <button className={clsx(styles.likeButton, isActive ? styles.active: "")} onClick={() => addFavoriteCat(id, url)} aria-label="Добавить в избранное">
                <HeartIcon className={clsx(styles.icon, isActive ? styles.active : "")} />
            </button>
        </div>
    );

};