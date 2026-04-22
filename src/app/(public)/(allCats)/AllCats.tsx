"use client"

import {addFavoriteCat} from "@/services/api";
import {Card} from "@/components/Card/Card";
import {TGetCatsCardResponse} from "@/shared/types";

type Props = {
    cats: TGetCatsCardResponse[]
}

const AllCats =  (prop: Props) => {
    const { cats } = prop

    return (
            <div className={"container"}>
                {cats.map((cat: TGetCatsCardResponse) => {
                    return <Card url={cat.url} key={cat.id} onClick={() => addFavoriteCat(cat.id, cat.url)} isActive />
                })}
            </div>
    );
};

export default AllCats;
