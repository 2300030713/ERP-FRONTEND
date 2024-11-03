import React, { useState } from 'react';

const Profile = () => {
    const [name, setName] = useState('Student');
    const [username, setUsername] = useState('Student123');
    const [email, setEmail] = useState('student@example.com');
    const [bio, setBio] = useState('Hello! I am a software developer.');

    const handleSave = () => {
        alert('Profile updated!');
    };

    const handleLogout = () => {
        alert('Logged out!');
    };

    return (
        <div className="profile-container">
            <h1>Profile Page</h1>
            <div className="profile-info">
                <img src="student.jpg" alt="Profile" className="profile-picture" />
                <h2>{name}</h2>
                <p>@{username}</p>
                <p>Email: {email}</p>
                <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Write a short bio"
                    className="bio-input"
                />
                <div className="buttons">
                    <button onClick={handleSave}>Save Changes</button>
                    <button onClick={handleLogout}>Log Out</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
