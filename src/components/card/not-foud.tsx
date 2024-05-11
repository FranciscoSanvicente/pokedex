"use client"
import { useRouter } from "next/navigation";

export default function NotFound() {
    const { push } = useRouter();
    push('/404')
    return <div role="alert">No Pokémon found with ID .</div>;
}
