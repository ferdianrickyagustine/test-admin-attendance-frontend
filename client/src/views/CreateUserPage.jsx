import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export default function CreateUserPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [position, setPosition] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post("http://localhost:3001/users/create", {
                email,
                password,
                name,
                phone,
                position
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                }
            });
            toast.success("User berhasil dibuat");
            navigate("/manage-user");
        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-radial-[at_50%_20%] from-gray-800 to-gray-600 p-4">
            <div className="w-full max-w-md bg-black/60 rounded-lg shadow p-8">
                <h1 className="text-2xl font-bold text-white mb-8 text-center">Tambah Karyawan</h1>
                <form className="w-full" onSubmit={handleSubmit}>
                    <input
                        id="CreateUserEmail"
                        className="input input-bordered bg-gray-300 w-full px-3 py-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-black/80 mb-4"
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        placeholder="Email"
                        required
                    />
                    <input
                        id="CreateUserPassword"
                        className="input input-bordered bg-gray-300 w-full px-3 py-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-black/80 mb-4"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        placeholder="Password"
                        required
                    />
                    <input
                        id="CreateUserName"
                        className="input input-bordered bg-gray-300 w-full px-3 py-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-black/80 mb-4"
                        type="text"
                        onChange={e => setName(e.target.value)}
                        value={name}
                        placeholder="Nama"
                        required
                    />
                    <input
                        id="CreateUserPhone"
                        className="input input-bordered bg-gray-300 w-full px-3 py-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-black/80 mb-4"
                        type="text"
                        onChange={e => setPhone(e.target.value)}
                        value={phone}
                        placeholder="No. HP"
                    />
                    <input
                        id="CreateUserPosition"
                        className="input input-bordered bg-gray-300 w-full px-3 py-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-black/80 mb-4"
                        type="text"
                        onChange={e => setPosition(e.target.value)}
                        value={position}
                        placeholder="Posisi"
                    />
                    <button
                        type="submit"
                        className="w-full bg-green-600/80 text-white rounded py-2 hover:bg-green-700/80 transition"
                        disabled={loading}
                    >
                        {loading ? "Menyimpan..." : "Simpan"}
                    </button>
                </form>
            </div>
        </div>
    );
}