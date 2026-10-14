import "./APIHandling.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function API() {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [abc, setabc] = useState([]);
    const [editUser, setEditUser] = useState(null);
    const [updateLoading, setUpdateLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [name, setName] = useState("")
    const [deleteLoadingId, setDeleteLoadingId] = useState(null);
    const [selectedDeleteId, setSelectedDeleteId] = useState(null);
    const [addLoading, setAddLoading] = useState(false);
    const [popup, setPopup] = useState(false)
    const [newUser, setNewUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    async function handleAddUser(e) {
        e.preventDefault();
        setAddLoading(true);
        setMessage("");
        try {
            const res = await axios.post("http://localhost:5000/api/users", newUser);
            setabc((prevUsers) => [...prevUsers, res.data]);
            setNewUser({ name: "", username: "", email: "", phone: "", website: "" });
            setMessage("User added successfully!");
        } catch (err) {
            console.log(err);
            setMessage("Failed to add user.");
        } finally {
            setAddLoading(false)
        }
    }

    async function getabc() {
        try {
            const res = await axios.get("http://localhost:5000/api/users");
            setabc(res.data);
        } catch (err) {
            setError("Failed to load users. Please try again.");
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    async function handleUpdate(e) {
        if (e) e.preventDefault();
        if (!editUser) return;
        setUpdateLoading(true);
        setMessage("");
        try {
            const res = await axios.put(`http://localhost:5000/api/users/${editUser._id || editUser.id}`, editUser);
            setabc((prevUsers) => prevUsers.map((user) => (user._id || user.id) === (editUser._id || editUser.id) ? res.data : user));
            setMessage("User updated successfully!");
            setEditUser(null);
        } catch (err) {
            console.log(err);
            setMessage("Failed to update user. Please try again.");
        } finally {
            setUpdateLoading(false);
        }
    }

    async function handleDelete(id) {
        setDeleteLoadingId(id);
        setMessage("");
        try {
            await axios.delete(`http://localhost:5000/api/users/${id}`);
            setabc((prevUsers) => prevUsers.filter((user) => (user._id || user.id) !== id));
            setMessage("User deleted successfully!");
        } catch (err) {
            console.log(err);
            setMessage("Failed to delete user.");
        } finally {
            setDeleteLoadingId(null);
        }
    }

    useEffect(() => { getabc(); }, []);
    if (loading) return <p>Loading users...</p>;
    if (error) return <p>{error}</p>;

    const isEditMode = !!editUser;

    return (
        <div className="user-container">
            <h1>User Managementg</h1>
            {abc.length === 0 && <p>No users available.</p>}
            <section className="add-user-section">
                <h2>{!editUser?.id ? "Add New User" : "Edit user"}</h2>
                <form className="add-user-form" onSubmit={isEditMode ? handleUpdate : handleAddUser}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={isEditMode ? editUser.name : newUser.name} onChange={(e) => isEditMode ? setEditUser({ ...editUser, name: e.target.value }) : setNewUser({ ...newUser, name: e.target.value })} required style={isEditMode ? { border: "2px solid #16a34a" } : {}} />
                    <br /><br />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={isEditMode ? editUser.email : newUser.email} onChange={(e) => isEditMode ? setEditUser({ ...editUser, email: e.target.value }) : setNewUser({ ...newUser, email: e.target.value })} required style={isEditMode ? { border: "2px solid #16a34a" } : {}} />
                    <br /><br />
                    <label htmlFor="username">UserName:</label>
                    <input type="text" id="username" value={isEditMode ? editUser.username : newUser.username} onChange={(e) => isEditMode ? setEditUser({ ...editUser, username: e.target.value }) : setNewUser({ ...newUser, username: e.target.value })} required style={isEditMode ? { border: "2px solid #16a34a" } : {}} />
                    <br /><br />
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={10}
                        placeholder="10 digit number"
                        value={isEditMode ? editUser.phone : newUser.phone}
                        onChange={(e) => {
                            const onlyNums = e.target.value.replace(/\D/g, "").slice(0, 10);
                            if (isEditMode) setEditUser({ ...editUser, phone: onlyNums });
                            else setNewUser({ ...newUser, phone: onlyNums });
                        }}
                        required
                        style={isEditMode ? { border: "2px solid #16a34a" } : {}}
                    />
                    <br /><br />
                    <button type="submit" disabled={isEditMode ? updateLoading : addLoading} style={isEditMode ? { backgroundColor: "#16a34a" } : { backgroundColor: "#2563eb" }}>
                        {isEditMode ? (updateLoading ? "Updating..." : "Update User") : (addLoading ? "Adding..." : "Add User")}
                    </button>
                    {isEditMode && (
                        <button type="button" onClick={() => setEditUser(null)} disabled={updateLoading} style={{ backgroundColor: "#dc2626", marginLeft: "10px" }}>
                            Cancel
                        </button>
                    )}
                </form>
                {message && (
                    <p className={`status-message ${message.toLowerCase().includes("failed") ? "error-message" : "success-message"}`} style={{ marginTop: "15px" }}>
                        {message}
                    </p>
                )}
            </section>
            <section className="user-list-section">
                <h2>User Details</h2>
                {abc.map((aa) => (
                    <div className="user-card" key={aa._id || aa.id}>
                        <p>Id: {aa._id || aa.id}</p>
                        <h3>{aa.name}</h3>
                        <p>Username: {aa.username}</p>
                        <p>Email: {aa.email}</p>
                        <p>Phone: {aa.phone}</p>
                        <p>Website: {aa.website}</p>
                        <p>Address: {aa.address?.city || "Not available"}</p>
                        <button onClick={() => { setEditUser({ ...aa }); setMessage(""); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Edit</button>
                        <button onClick={() => { setName(aa.name); setSelectedDeleteId(aa._id || aa.id); setPopup(true); }} disabled={deleteLoadingId === (aa._id || aa.id)}>
                            {deleteLoadingId === (aa._id || aa.id) ? "Deleting..." : "Delete"}
                        </button>
                    </div>
                ))}
            </section>
            {popup && (
                <div className="delete-popup">
                    <p>Are you sure you want to delete this user - {name}?</p>
                    <button style={{
                        marginRight: "10px",
                        backgroundColor: "#f1aadb",
                        color: "white",
                        border: "none",
                        padding: "6px 14px",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }} onClick={() => { handleDelete(selectedDeleteId); setPopup(false); setSelectedDeleteId(null); }}>OK</button>
                    <button style={{
                        backgroundColor: "#f0f0f0",
                        color: "#c8d424",
                        border: "1px solid #ccc",
                        padding: "6px 14px",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }} onClick={() => { setPopup(false); setSelectedDeleteId(null); }}>Cancel</button>
                </div>
            )}
        </div>
    );
}