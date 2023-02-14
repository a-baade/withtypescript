import {Bosses, Datum} from "../../../types";
import imageLoader from "../../../imageLoader";
import Image from "next/image";

async function getStaticPaths(id: string) {
    const res = await fetch(`https://eldenring.fanapis.com/api/bosses/${id}`);
    const { data }: Bosses = await res.json();

    return {
        paths: data.map((data) => {
            return {params: {id: String(data.id) } };
        }), fallback: false
    }
}

export async function getStaticProps({params}:{ params: { id: string} }) {
    const res = await fetch(`https://eldenring.fanapis.com/api/bosses/${params.id}`
    );
    const boss = await res.json()
    return {
        props: {
            boss
        }
    }
}

function BossesPage({ boss }: {
    boss: Datum
}) {
    return <div>
        <h1>{boss.name}</h1>
        <Image
            loader={imageLoader}
            unoptimized
            src={boss.image || "{}"}
            alt={boss.name}
            width={"200"}
            height={"200"}
        />
    </div>
}

export default BossesPage