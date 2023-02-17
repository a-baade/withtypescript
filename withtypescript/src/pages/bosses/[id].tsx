import Image from "next/image";
import imageLoader from "../../../imageLoader";
import {Datum} from "../../../types";
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import Layout from "../../../components/Layout";

function BossPage({ boss }: { boss: Datum }) {
    const router = useRouter()
    console.log("Promise:", boss.data)
    console.log(router.query.id)
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

BossPage.getLayout = function getLayout(page: typeof BossPage) {
    // @ts-ignore
    return <Layout>{page}</Layout>;
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