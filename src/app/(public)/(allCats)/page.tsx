import AllCats from "@/app/(public)/(allCats)/AllCats";
import { getCats } from "@/services/actions";
import { CATS_PORTION } from "@/constants/constants";
import { isLikedCat } from "@/shared/types";

const AllCatsPage = async () => {
  const response = await getCats(CATS_PORTION);
  const cats: isLikedCat[] = response.map((cat) => {
    return { ...cat, isLiked: false };
  });

  return (
    <section className={"section"}>
      <AllCats cats={cats} />
    </section>
  );
};

export default AllCatsPage;
