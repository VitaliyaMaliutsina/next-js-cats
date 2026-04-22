import {FAVORITE_CAT_KEY} from "@/constants/localStorageKey";

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
