import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function AttendancePage() {
    const [attendance, setAttendance] = useState([]);
    const [loading, setLoading] = useState(true);



    async function fetchAttendance() {
        setLoading(true);
        try {
            const { data } = await axios.get("http://localhost:3002/attendance/history", {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                }
            });
            console.log(data);
            
            setAttendance(data);
        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
            setAttendance([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchAttendance();
    }, []);
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-radial-[at_50%_20%] from-gray-800 to-gray-600 px-4">
            <div className="w-full max-w-3xl bg-black/60 rounded-lg shadow p-6 flex flex-col items-center gap-4">
                <h1 className="text-2xl font-bold text-white mb-2">Attendance Management</h1>
                {loading ? (
                    <div className="text-white">Loading...</div>
                ) : (
                    <div className="overflow-x-auto w-full">
                        <table className="min-w-full border text-sm rounded-lg overflow-hidden bg-white">
                            <thead>
                                <tr className="bg-gray-200 text-gray-900">
                                    <th className="border px-2 py-1">ID</th>
                                    <th className="border px-2 py-1">Date</th>
                                    <th className="border px-2 py-1">Check In</th>
                                    <th className="border px-2 py-1">Check Out</th>
                                </tr>
                            </thead>
                            <tbody>
                                {attendance.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="text-center p-2 text-gray-500">No data</td>
                                    </tr>
                                ) : (
                                    attendance.map((item, idx) => (
                                        <tr key={item.id || idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-gray-100"}>
                                            <td className="border px-2 py-1 text-gray-900">{item.id}</td>
                                            <td className="border px-2 py-1 text-gray-900">{item.date ? item.date.slice(0, 10) : '-'}</td>
                                            <td className="border px-2 py-1 text-gray-900">
                                                {item.checkIn ? new Date(item.checkIn).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '-'}
                                            </td>
                                            <td className="border px-2 py-1 text-gray-900">
                                                {item.checkOut ? new Date(item.checkOut).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '-'}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}