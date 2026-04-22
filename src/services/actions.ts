"use server";

import { TGetCatsCardResponse } from "@/shared/types";

export const getCats = async (portion: number) => {
  try {
    const res = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=${portion}&api_key=${process.env.DB_PASSWORD}`,
      {
        headers: {
          Authorization: `x-api-key ${process.env.DB_PASSWORD}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }

    const data: TGetCatsCardResponse[] = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    throw new Error("Не удалось получить котиков :(");
  }
};
