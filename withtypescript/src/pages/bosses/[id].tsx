import Image from "next/image";
import imageLoader from "../../../imageLoader";
import {Datum} from "../../../types";
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";

function BossPage({ boss }: { boss: Datum }) {
    const router = useRouter()
    console.log("Promise:", boss.data.name)
    console.log(router.query)
    return (
        <div key={boss.data.id}>
            <h1>{boss.data.name}</h1>

            <Image
                loader={imageLoader}
                unoptimized
                src={boss.data.image || "{}"}
                alt={boss.data.name}
                width="200"
                height="200"
            />
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(
        `https://eldenring.fanapis.com/api/bosses/${context.query.id}`
    );
    const boss = await res.json();

    return {
        props: {
            boss,
        },
    };
}

export default BossPage;