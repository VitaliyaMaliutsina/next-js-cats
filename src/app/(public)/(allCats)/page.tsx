import {getCats} from "@/services/api";
import AllCats from "@/app/(public)/(allCats)/AllCats";

const AllCatsPage = async () => {
    const cats = await getCats(30)


    return (
        <section className={"section"}>
            <AllCats cats={cats} />
        </section>
    );
};

export default AllCatsPage;