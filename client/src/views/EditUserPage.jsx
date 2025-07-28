import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function EditUserPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [position, setPosition] = useState("");

    async function fetchProfile() {
        try {
            const { data } = await axios.get(`http://localhost:3001/users/${id}`, {
                headers: { Authorization: `Bearer ${localStorage.token}` }
            });
            setProfile(data);
        } catch (error) {
            toast.error("Failed to load user data");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProfile();
    }, []);

    useEffect(() => {
        if (profile) {
            setName(profile.name || "");
            setPhone(profile.phone || "");
            setEmail(profile.email || "");
            setPosition(profile.position || "");
        }
    }, [profile]);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const body = { name, phone, email, position }
            const { data } = await axios.put(`http://localhost:3001/users/${id}`, body, {
                headers: { Authorization: `Bearer ${localStorage.token}` }
            });
            toast.success("Profile updated!");
            navigate(`/user/${id}`);
        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
        }
    }

    if (loading) return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
    if (!profile) return <div className="min-h-screen flex items-center justify-center text-white">User not found</div>;

    return (
        <div className="min-h-screen flex items-center justify-center bg-radial-[at_50%_20%] from-gray-800 to-gray-600 p-4">
            <div className="w-full max-w-md bg-black/60 rounded-lg shadow p-8">
                <h1 className="text-2xl font-bold text-white mb-8 text-center">Update Profile</h1>
                <form onSubmit={(e) => handleSubmit(e, name, phone, email, position)} className="flex flex-col gap-4">
                    <input
                        type="text"
                        className="input input-bordered bg-gray-300 w-full px-3 py-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-black/80 mb-4"
                        placeholder="Name"
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                    <input
                        type="phone"
                        className="input input-bordered bg-gray-300 w-full px-3 py-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-black/80 mb-4"
                        placeholder="Phone"
                        onChange={e => setPhone(e.target.value)}
                        value={phone}
                    />
                    <input
                        type="email"
                        className="input input-bordered bg-gray-300 w-full px-3 py-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-black/80 mb-4"
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    <input
                        type="text"
                        className="input input-bordered bg-gray-300 w-full px-3 py-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-black/80 mb-4"
                        onChange={e => setPosition(e.target.value)}
                        value={position}
                        placeholder="Position"
                    />
                    <button
                        type="submit"
                        className="w-full bg-green-600/80 text-white rounded py-2 hover:bg-green-700/80 transition"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
}
