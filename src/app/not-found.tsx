import Link from 'next/link'

export default function NotFound() {

    return (
        <div className=" bg-red-100 dark:bg-zinc-800 dark:text-white text-slate-950">
            <div className="sm:w-9/12 w-full  m-auto py-16 min-h-screen flex items-center justify-center">
                <div className="bg-white dark:bg-slate-800  overflow-hidden sm:rounded-lg pb-8">
                    <div className=" text-center pt-8">
                        <h1 className="sm:text-9xl text-6xl font-bold text-red-500 dark:text-red-700">404</h1>
                        <h1 className="sm:text-6xl text-3xl font-medium py-8">oops! Page not found</h1>
                        <p className="sm:text-2xl text-xl pb-8 px-12 font-medium">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                        <Link href="/" className=" bg-red-500 dark:bg-red-700  font-semibold px-6 py-3 rounded-md mr-6" role="button">
                            Go to HOME
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}