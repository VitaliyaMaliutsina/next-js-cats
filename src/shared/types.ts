export type TGetCatsCardResponse = {
  id: string;
  url: string;
};

export type isLikedCat = TGetCatsCardResponse & {
  isLiked: boolean;
};
