import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="w-full h-20 flex items-center justify-between lg:px-20 px-10 absolute top-0 left-0">
            <Link href="/" className="font-semibold text-2xl">
                jonasbrahmst.
            </Link>
            <button className="text-xl">
                Menu
            </button>
        </nav>
    )
}