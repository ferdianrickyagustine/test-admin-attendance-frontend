import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router";

export default function UserDetailPage() {
    const [profile, setProfile] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();


    async function fetchProfile() {
        try {
            const { data } = await axios.get(`http://localhost:3001/users/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            setProfile(data);
        } catch (error) {
            toast.info("Failed to load user detail");
        }
    }

    useEffect(() => {
        fetchProfile();
    }, []);


    return (
        <div className="min-h-screen flex items-center justify-center bg-radial-[at_50%_20%] from-gray-800 to-gray-600 p-4">
            <div className="flex flex-col md:flex-row w-full max-w-5xl rounded-2xl overflow-hidden">
                <div className="bg-black/40 flex flex-col items-center justify-center md:w-1/2 w-full p-10">
                    <div className="relative flex justify-center mb-6">
                        <div className="group relative w-full h-full rounded-full overflow-hidden border-4 border-gray-700 shadow-lg">
                            <img
                                src={profile.photo ? `http://localhost:3001/${profile.photo}` : "https://ui-avatars.com/api/?name=User&background=random"}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-black/60 flex flex-col justify-center md:w-1/2 w-full p-10 text-white">
                    <h1 className="mb-8 text-3xl font-bold text-white">User Detail</h1>
                    <div className="space-y-4">
                        <div>
                            <span className="text-gray-400 text-sm">Name</span>
                            <div className="text-lg font-medium mt-1">{profile.name}</div>
                        </div>
                        <div>
                            <span className="text-gray-400 text-sm">Phone</span>
                            <div className="text-lg font-medium mt-1">{profile.phone}</div>
                        </div>
                        <div>
                            <span className="text-gray-400 text-sm">Position</span>
                            <div className="text-lg font-medium mt-1">{profile.position}</div>
                        </div>
                        <div>
                            <span className="text-gray-400 text-sm">Email</span>
                            <div className="text-lg font-medium mt-1">{profile.email}</div>
                        </div>
                        <div>
                            <span className="text-gray-400 text-sm">Role</span>
                            <div className="text-lg font-medium mt-1">{profile.role}</div>
                        </div>
                    </div>
                    <button
                        className="mt-8 px-6 py-2 rounded-lg bg-green-500/80 hover:bg-green-600/80 text-white font-semibold shadow transition w-full md:w-auto"
                        onClick={() => navigate(`/edit-user/${id}`)}
                    >
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    );
}