import {FavoriteCats} from "@/app/(public)/favorites-cats/FavoriteCats";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Страница любимых котиков"
}

const FavoritesCatsPage = () => {
    return (
        <div>
           <FavoriteCats />
        </div>
    );
};

export default FavoritesCatsPage