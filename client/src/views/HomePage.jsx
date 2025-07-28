import { useNavigate } from "react-router";

export default function HomePage() {
    const navigate = useNavigate();

    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-radial-[at_50%_20%] from-gray-800 to-gray-600 px-4">
            <div className="w-full max-w-md bg-black/60 rounded-lg shadow p-6 flex flex-col items-center gap-4">
                <h1 className="text-2xl font-bold text-white mb-2">Home Page</h1>
                <div className="text-center text-gray-200 mb-4">
                    Selamat datang di halaman pengelola khusus admin.<br />
                    Silakan gunakan menu di bawah untuk mengelola data kehadiran dan user karyawan.
                </div>
                <div className="flex flex-row gap-4 w-full justify-center">
                    <a
                        href="/view-attendance"
                        className="px-4 py-2 rounded bg-green-500 hover:bg-green-600 text-white font-semibold transition w-40 text-center"
                    >
                        Lihat Attendance
                    </a>
                    <button
                        type="button"
                        onClick={() => navigate('/manage-user')}
                        className="px-4 py-2 rounded bg-orange-500 hover:bg-orange-600 text-white font-semibold transition w-40"
                    >
                        Manage User
                    </button>
                </div>
            </div>
        </div>
    )
}