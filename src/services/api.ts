import {FAVORITE_CAT_KEY} from "@/constants/localStorageKey";
import {TGetCatsCardResponse} from "@/shared/types";

export const getCats = async  (portion: number) => {
    try {
    const res = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=${portion}&api_key=${process.env.DB_PASSWORD}`,
        {
            headers: {
                Authorization: `x-api-key ${process.env.DB_PASSWORD}`,
            },

        }
    );

    if(!res.ok) {
        throw new Error(`HTTP Error: ${res.status}`)
    }

    const data: TGetCatsCardResponse[] = await res.json()
    return data

    } catch (err) {
        console.log(err)
        throw new Error("Не удалось получить котиков :(")
    }
}

export const deleteFavoriteCat = (id: string) => {
    const currentData = localStorage.getItem(FAVORITE_CAT_KEY);

    if (!currentData) return;

    const cats = currentData ? JSON.parse(currentData) : [];

    const deletedCats = cats.filter((cat: Record<string, string>) => cat.id !== id);

    if (deletedCats.length === 0) {
        localStorage.removeItem(FAVORITE_CAT_KEY);
        return [];
    }

    localStorage.setItem(FAVORITE_CAT_KEY, JSON.stringify(deletedCats));

    return deletedCats;
};

export const addFavoriteCat = (id: string, url: string) => {
    const currentData = localStorage.getItem(FAVORITE_CAT_KEY);

    const cats: Record<string, string>[] = currentData ? JSON.parse(currentData) : [];

    if (cats.some((cat) => cat.id === id)) {
        deleteFavoriteCat(id);
        return;
    }

    cats.unshift({ id: id, url: url });

    localStorage.setItem(FAVORITE_CAT_KEY, JSON.stringify(cats));
};
