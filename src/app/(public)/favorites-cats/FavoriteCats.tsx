"use client"

import styles from "./favoriteCats.module.css";
import { useState } from "react";

import {FAVORITE_CAT_KEY} from "@/constants/localStorageKey";
import Link from "next/link";
import {Card} from "@/components/Card/Card";
import {TGetCatsCardResponse} from "@/shared/types";


export const FavoriteCats = () => {
    const [favoritesCats, setFavoritesCats] = useState(() => {
        if(typeof window !== "undefined") {
            const favoriteCat = localStorage.getItem(FAVORITE_CAT_KEY);

            if (favoriteCat) {
                return JSON.parse(favoriteCat);
            }
        }


        return [];
    });

    return (
        <section className="section">
            <div className="container">
                {favoritesCats.length === 0 ? (
                    <div className={styles.emptyState}>
                        <p className={styles.title}>У вас пока нет любимых котиков, но можно это исправить!</p>
                        <Link className={styles.link} href={"/"}>
                            Исправить!
                        </Link>
                    </div>
                ) : (
                    favoritesCats.map((cat: TGetCatsCardResponse) => {
                        return (
                            <Card
                                key={cat.id}
                                url={cat.url}
                                id={cat.id}
                            />
                        );
                    })
                )}
            </div>
        </section>
    );
};
