import React from "react";
import { useRouter } from "next/router";

export default function Search() {
    const router = useRouter();
    const { search } = router.query;

    return <div>{search}</div>;
}
