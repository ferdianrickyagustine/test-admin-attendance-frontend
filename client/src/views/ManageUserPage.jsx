import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export default function ManageUserPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    

    async function fetchUsers() {
        setLoading(true);
        try {
            const { data } = await axios.get("http://localhost:3001/users/all", {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                }
            });
            setUsers(data);
        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
            setUsers([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);



    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-radial-[at_50%_20%] from-gray-800 to-gray-600 px-4">
            <div className="w-full max-w-lg bg-black/60 rounded-lg shadow p-6 flex flex-col items-center gap-4 mx-auto h-96">
                <h1 className="text-2xl font-bold text-white mb-2">Manage User</h1>
                {loading ? (
                    <div className="text-white">Loading...</div>
                ) : users.length === 0 ? (
                    <div className="text-gray-300">No data</div>
                ) : (
                    <>
                        <div className="flex flex-col gap-3 w-full overflow-y-auto pr-2" style={{ maxHeight: '16rem' }}>
                            {users.map((user, idx) => (
                                <div
                                    key={user.id || idx}
                                    className="bg-white rounded-lg shadow flex items-center gap-3 px-5 py-2 cursor-pointer hover:shadow-md transition min-h-[56px] w-full max-w-md mx-auto"
                                    onClick={() => { navigate(`/user/${user.id}`); }}
                                    style={{ minWidth: 0 }}
                                >
                                    <img
                                        src={user.photo ? `http://localhost:3001/${user.photo}` : "https://ui-avatars.com/api/?name=User&background=random"}
                                        alt={user.name || "User"}
                                        className="w-10 h-10 rounded-full object-cover border flex-shrink-0"
                                    />
                                    <div className="flex flex-col min-w-0">
                                        <div className="font-semibold text-gray-900 truncate max-w-[320px]">{user.name || '-'}</div>
                                        <div className="text-xs text-gray-500 truncate max-w-[320px]">{user.email || '-'}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="w-full flex justify-center mt-4">
                            <button
                                onClick={() => navigate('/create-user')}
                                className="px-4 py-2 rounded bg-green-500/80 hover:bg-green-600/80 text-white font-semibold transition shadow"
                            >
                                Tambah User
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}