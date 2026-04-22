"use client"

import styles from "./favoriteCats.module.css";
import {useEffect, useState} from "react";

import {FAVORITE_CAT_KEY} from "@/constants/localStorageKey";
import Link from "next/link";
import {Card} from "@/components/Card/Card";
import {TGetCatsCardResponse} from "@/shared/types";
import {deleteFavoriteCat} from "@/services/api";

export const FavoriteCats = () => {
    const [favoritesCats, setFavoritesCats] = useState([]);
    const [isHydrated, setIsHydrated] = useState(false)


    useEffect(() => {
        const favoriteCat = localStorage.getItem(FAVORITE_CAT_KEY);
        if (favoriteCat) {
            setFavoritesCats(JSON.parse(favoriteCat));
        }
            setIsHydrated(true)
    }, []);


    if(!isHydrated) return null;

    const handleDeleteFavoriteCat = (id: string) => {
        setFavoritesCats(deleteFavoriteCat(id))
    }

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
                                isActive
                                onClick={() => handleDeleteFavoriteCat(cat.id)}
                            />
                        );
                    })
                )}
            </div>
        </section>
    );
};
