import AllCats from "@/app/(public)/(allCats)/AllCats";
import {getCats} from "@/services/actions";
import {CATS_PORTION} from "@/constants/constants";

const AllCatsPage = async () => {
    const cats = await getCats(CATS_PORTION)


    return (
        <section className={"section"}>
            <AllCats cats={cats} />
        </section>
    );
};

export default AllCatsPage;