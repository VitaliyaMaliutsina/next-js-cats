"use client";
import styles from "./allCats.module.css";
import { addFavoriteCat } from "@/services/api";
import { Card } from "@/components/Card/Card";
import { isLikedCat } from "@/shared/types";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { getCats } from "@/services/actions";
import { CATS_PORTION } from "@/constants/constants";
import { clsx } from "clsx";

type Props = {
  cats: isLikedCat[];
};

const AllCats = (prop: Props) => {
  const { cats } = prop;

  const [catsData, setCatsData] = useState<isLikedCat[]>(cats);
  const [isLoading, setIsLoading] = useState(false);

  const { ref: bottomAnchor, inView: bottomInView } = useInView({
    threshold: 0,
    rootMargin: "0px 0px 400px 0px",
  });

  const { ref: topAnchor, inView: topInView } = useInView({
    threshold: 0,
  });

  const handleUpDown = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAddFavoriteCat = (id: string, url: string) => {
    addFavoriteCat(id, url);

    setCatsData((prev) => {
      return prev.map((cat) => {
        if (cat.id === id) {
          return { ...cat, isLiked: !cat.isLiked };
        }
        return { ...cat };
      });
    });
  };

  useEffect(() => {
    if (bottomInView && !isLoading) {
      const loadMoreCats = async () => {
        setIsLoading(true);
        try {
          const newCate = await getCats(CATS_PORTION);

          const cats: isLikedCat[] = newCate.map((cat) => {
            return { ...cat, isLiked: false };
          });
          setCatsData((prev) => [...prev, ...cats]);
        } finally {
          setIsLoading(false);
        }
      };

      void loadMoreCats();
    }
  }, [bottomInView, topInView, isLoading]);

  return (
    <>
      <div ref={topAnchor}></div>

      <div className={"container"}>
        {catsData.map((cat: isLikedCat, index: number) => {
          return (
            <Card
              url={cat.url}
              key={`${cat.id}${index}`}
              onClick={() => handleAddFavoriteCat(cat.id, cat.url)}
              isActive={cat.isLiked}
            />
          );
        })}
      </div>
      {!topInView && (
        <div>
          <button onClick={handleUpDown} className={styles.fixed}>
            ↑
          </button>
        </div>
      )}

      <div ref={bottomAnchor}></div>
      {isLoading && (
        <p className={clsx(styles.textLoading, styles.blockSpace)}>... Загружаем еще котиков ...</p>
      )}
    </>
  );
};

export default AllCats;
