import React from "react";
import Link from "next/link";

function Layout({children}: { children: React.ReactNode}) {
    return <div>
        <nav>
            <Link href={"/"}>
                <div>Home</div>
            </Link>
        </nav>
        {children}
    </div>
}

export default Layout