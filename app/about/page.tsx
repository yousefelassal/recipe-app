import Link from "next/link";

export default function About(){
    return (
        <div className="grid place-content-center min-h-screen">
            <h1 className="font-thin text-green-400">About</h1>
            <p>This is the about page</p>
            <Link href="/" className="text-sm text-blue-400 hover:underline hover:text-blue-500">Go back home</Link>
        </div>
    )
}