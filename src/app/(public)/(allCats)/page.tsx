import {getCats} from "@/services/api";
import {Card} from "@/components/Card/Card";

const AllCatsPage = async () => {
    const cats = await getCats(30)

    return (
        <section className={"section"}>
            <div className={"container"}>
                {cats.map((cat) => {
                    return <Card url={cat.url} id={cat.id} key={cat.id} />
                })}
            </div>
        </section>
    );
};

export default AllCatsPage;