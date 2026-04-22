"use client"
import styles from "./allCats.module.css";
import {addFavoriteCat} from "@/services/api";
import {Card} from "@/components/Card/Card";
import {TGetCatsCardResponse} from "@/shared/types";
import {useInView} from "react-intersection-observer";
import {useEffect, useState} from "react";
import {getCats} from "@/services/actions";
import {CATS_PORTION} from "@/constants/constants";
import {clsx} from "clsx";

type Props = {
    cats: TGetCatsCardResponse[]
}

const AllCats =  (prop: Props) => {
    const { cats } = prop

    const [catsData, setCatsData] = useState<TGetCatsCardResponse[]>(cats)
    const [isLoading, setIsLoading] = useState(false)

    const {ref, inView} = useInView({
        threshold: 0,
    })

    useEffect(() => {

      if(inView) {
          const loadMoreCats = async () => {
              setIsLoading(true)
            const newCate = await getCats(CATS_PORTION)
              setCatsData((prev) => [...prev, ...newCate])
          }
          setIsLoading(false)
         void loadMoreCats()
      }

    }, [inView]);

    return (
        <>
            <div className={"container"}>
                {catsData.map((cat: TGetCatsCardResponse, index: number) => {
                    return <Card url={cat.url} key={`${cat.id}${index}`} onClick={() => addFavoriteCat(cat.id, cat.url)} isActive />
                })}
                <div ref={ref}></div>
            </div>
            {isLoading &&  <p className={clsx(styles.textLoading, styles.blockSpace)}>... Загружаем еще котиков ...</p>}

        </>

    );
};

export default AllCats;
