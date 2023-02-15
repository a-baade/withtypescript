

import Image from "next/image";
import imageLoader from "../../../imageLoader";
import {Bosses, Datum} from "../../../types";

function BossPage({ boss }: { boss: Datum }) {
    console.log("Promise:", boss.data.name)
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

export async function getStaticPaths() {
    const res = await fetch("https://eldenring.fanapis.com/api/bosses");
    const { data }: Bosses = await res.json();

    return {
        paths: data.map((boss) => {
            return { params: { id: String(boss.id) } };
        }),
        fallback: false,
    };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
    const res = await fetch(
        `https://eldenring.fanapis.com/api/bosses/${params.id}`
    );
    const boss = await res.json();

    return {
        props: {
            boss,
        },
    };
}

export default BossPage;