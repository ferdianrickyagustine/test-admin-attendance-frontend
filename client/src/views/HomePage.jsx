export default function HomePage() {

    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-radial-[at_50%_20%] from-gray-800 to-gray-600 px-4">
            <div className="w-full max-w-md bg-black/60 rounded-lg shadow p-6 flex flex-col items-center gap-4">
                <h1 className="text-2xl font-bold text-white mb-2">Home Page</h1>
                <a
                    href="/view-attendance"
                    className="mt-2 px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-semibold transition"
                >
                    Lihat Attendance
                </a>
            </div>
        </div>
    )
}